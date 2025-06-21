import React, { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

type Zone = {
    id: string;
    page: number;
    x: number;
    y: number;
    width: number;
    height: number;
    confirmed: boolean;
};

const BubbleSelect = () => {
    const pdfUrl = "/sample.pdf"; // Replace with your PDF URL
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [zones, setZones] = useState<Zone[]>([]);
    const [selecting, setSelecting] = useState<boolean>(false);
    const [currentZone, setCurrentZone] = useState<Zone | null>(null);
    const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(null);
    const pdfWrapperRef = useRef<HTMLDivElement>(null);
    const [pageWidth, setPageWidth] = useState<number>(500);

    useEffect(() => {
        const updateWidth = () => {
            if (pdfWrapperRef.current) {
                const width = Math.min(pdfWrapperRef.current.offsetWidth, 500);
                setPageWidth(width);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // PDF loaded
    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
        setPageNumber(1);
        setZones([]); // Reset zones when loading a new PDF
    };

    const  changePage = (offset: number) => {
        setPageNumber((prevPageNumber) => {
            const newPageNumber = prevPageNumber + offset;
            return Math.max(1, Math.min(newPageNumber, numPages));
        });
    }

    const previousPage = () => changePage(-1);
    const nextPage = () => changePage(1);
    

    // Start/stop selection mode
    const handleToggleSelect = () => {
        if (selecting) {
            setSelecting(false);
            setCurrentZone(null);
            setStartPoint(null);
        } else {
            setSelecting(true);
            setCurrentZone(null);
            setStartPoint(null);
        }
    };

    // Mouse down to start zone
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!selecting || currentZone) return;
        const rect = pdfWrapperRef.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setStartPoint({ x, y });
        // Start a new currentZone with zero width/height
        setCurrentZone({
            id: "current",
            page: pageNumber,
            x,
            y,
            width: 0,
            height: 0,
            confirmed: false,
        });
    };

    // Mouse move to update zone
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!selecting || !startPoint || !currentZone) return;
        const rect = pdfWrapperRef.current!.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const width = Math.abs(x - startPoint.x);
        const height = Math.abs(y - startPoint.y);
        const zoneX = Math.min(x, startPoint.x);
        const zoneY = Math.min(y, startPoint.y);
        setCurrentZone({
            id: "current",
            page: pageNumber,
            x: zoneX + width / 2,
            y: zoneY + height / 2,
            width,
            height,
            confirmed: false,
        });
    };

    // Mouse up to finish zone
    const handleMouseUp = () => {
        if (!selecting || !currentZone) return;
        // Show confirm/remove buttons under the zone
        setStartPoint(null);
    };

    // Confirm zone
    const handleConfirmZone = () => {
        if (!currentZone) return;
        setZones((prev) => [
            ...prev,
            { ...currentZone, id: `${Date.now()}`, confirmed: true },
        ]);
        setCurrentZone(null);
        setStartPoint(null);
    };

    // Remove zone (current or confirmed)
    const handleRemoveZone = (id?: string) => {
        if (id) {
            setZones((prev) => prev.filter((z) => z.id !== id));
        } else {
            setCurrentZone(null);
            setStartPoint(null);
        }
    };

    // Only allow finish if on last page and no zone in progress
    const canFinish =
        pageNumber === numPages && !currentZone && !selecting;

    // Render zones for current page
    const renderZones = () =>
        zones
            .filter((z) => z.page === pageNumber)
            .map((z) => (
                <div
                    key={z.id}
                    style={{
                        position: "absolute",
                        left: z.x - z.width / 2,
                        top: z.y - z.height / 2,
                        width: z.width,
                        height: z.height,
                        border: "2px dashed #3b82f6",
                        background: "rgba(59,130,246,0.1)",
                        pointerEvents: "none", // disables pointer events for the zone
                    }}
                >
                    <button
                        style={{
                            position: "absolute",
                            top: -12,
                            right: -12,
                            background: "#ef4444",
                            color: "white",
                            borderRadius: "50%",
                            border: "none",
                            width: 20,
                            height: 20,
                            cursor: "pointer",
                            zIndex: 4,
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                            pointerEvents: "auto", // Allow pointer events for the button
                        }}
                        onClick={() => handleRemoveZone(z.id)}
                        title="Remove zone"
                    >
                        <X size={16} className="m-auto" />
                    </button>
                </div>
            ));

    // Render current zone (not yet confirmed)
    const renderCurrentZone = () => {
        if (!currentZone || currentZone.page !== pageNumber) return null;
        return (
            <div
                style={{
                    position: "absolute",
                    left: currentZone.x - currentZone.width / 2,
                    top: currentZone.y - currentZone.height / 2,
                    width: currentZone.width,
                    height: currentZone.height,
                    border: "2px dashed #f59e42",
                    background: "rgba(245,158,66,0.1)",
                    zIndex: 1,
                }}
            >
                <div style={{ position: "absolute", left: 0, right: 0, bottom: -40, display: "flex", justifyContent: "center", gap: 8 }}>
                    <button
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                        onClick={handleConfirmZone}
                    >
                        Confirm
                    </button>
                    <button
                        className="px-3 py-1 bg-gray-300 text-black rounded"
                        onClick={() => handleRemoveZone()}
                    >
                        Remove
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center py-6 mt-20">
                {pdfUrl && (
                    <div className="w-full max-w-3xl flex flex-col items-center">
                        <div className="mb-2 flex items-center gap-2">
                            <button
                                className={`px-4 py-2 rounded ${selecting ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}
                                onClick={handleToggleSelect}
                                disabled={!!currentZone}
                            >
                                {selecting ? "Cancel Selection" : "Select a Zone"}
                            </button>
                        </div>
                        <div
                            ref={pdfWrapperRef}
                            style={{
                                position: "relative",
                                width: "100%",
                                margin: "0 auto",
                                cursor: selecting && !currentZone ? "crosshair" : "default",
                                background: "#fff",
                            }}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                        >
                            <Document
                              file={pdfUrl}
                              onLoadSuccess={onDocumentLoadSuccess}
                              onLoadError={error => alert('Failed to load PDF: ' + error.message)}
                              loading={<div className="text-center py-8">Loading PDF...</div>}
                            >
                              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                                <Page
                                  pageNumber={pageNumber}
                                  width={pageWidth}
                                  renderAnnotationLayer={false}
                                  renderTextLayer={false}
                                />
                              </div>
                            </Document>
                            {/* Zones */}
                            {renderZones()}
                            {renderCurrentZone()}
                            {numPages && (
                              <div className="flex items-center justify-between mt-4 w-full max-w-3xl">
                                <button 
                                  type="button" 
                                  disabled={pageNumber <= 1} 
                                  onClick={previousPage}
                                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed min-w-[calc(100%/5)]"
                                >
                                  Previous
                                </button>
                                
                                <span className="text-sm">
                                  Page {pageNumber} of {numPages}
                                </span>
                                
                                <button 
                                  type="button" 
                                  disabled={pageNumber >= numPages} 
                                  onClick={nextPage}
                                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed min-w-[calc(100%/5)]"
                                >
                                  Next
                                </button>
                              </div>
                            )}
                        </div>
                        {canFinish && (
                            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded">
                                Finish
                            </button>
                        )}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default BubbleSelect;