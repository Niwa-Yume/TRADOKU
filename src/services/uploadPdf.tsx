import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadPdf(file: File, userId: string, chapterId: string): Promise<{ data: any; error: any }> {
    if (file.type !== 'application/pdf') {
        return { data: null, error: 'Only PDF files are allowed.' };
    }

    const filePath = `pdfs/${userId}/${Date.now()}_${file.name}`;

    const { data, error } = await supabase.storage
        .from('pdfs')
        .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false,
            contentType: 'application/pdf',
        });

    if (!error && data) {
        // Get the public URL for the uploaded PDF
        const { data: publicUrlData } = supabase.storage.from('pdfs').getPublicUrl(filePath);
        const pdfUrl = publicUrlData.publicUrl;

        // Insert a new PDF entry into the database
        const { data: dbData, error: dbError } = await supabase
            .from('pdf')
            .insert([
                {
                    pdf_url: pdfUrl,
                    pdf_chapter: chapterId,
                    pdf_uploader: userId,
                },
            ]);

        return { data: { storage: data, db: dbData }, error: error || dbError };
    }

    return { data, error };
}