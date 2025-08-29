import { Button } from "@/components/ui/button";
import { FileText, Users, Zap } from "lucide-react";

const kanjiCloud = [
	{ k: "翻", top: "12%", left: "6%", size: "2.2rem", color: "rgba(168,85,247,.22)", delay: "0s" },
	{ k: "漫", top: "22%", left: "14%", size: "1.9rem", color: "rgba(236,72,153,.20)", delay: "1.2s" },
	{ k: "本", top: "14%", left: "22%", size: "2.3rem", color: "rgba(251,146,60,.19)", delay: "2.4s" },
	{ k: "語", top: "28%", left: "30%", size: "2rem", color: "rgba(139,92,246,.22)", delay: "1.8s" },
	{ k: "文", top: "18%", left: "38%", size: "2.1rem", color: "rgba(59,130,246,.18)", delay: "3.2s" },
	{ k: "字", top: "24%", left: "46%", size: "1.9rem", color: "rgba(236,72,153,.20)", delay: ".6s" },
	{ k: "道", top: "16%", left: "54%", size: "2.2rem", color: "rgba(147,51,234,.20)", delay: "2.8s" },
	{ k: "読", top: "36%", left: "18%", size: "1.7rem", color: "rgba(34,197,94,.22)", delay: "4s" },
	{ k: "書", top: "44%", left: "34%", size: "2rem", color: "rgba(251,146,60,.20)", delay: "1.4s" },
	{ k: "話", top: "40%", left: "50%", size: "1.85rem", color: "rgba(96,165,250,.26)", delay: "3.6s" },
	{ k: "頁", top: "48%", left: "60%", size: "1.9rem", color: "rgba(168,85,247,.16)", delay: "2.6s" },
	{ k: "訳", top: "40%", left: "68%", size: "1.8rem", color: "rgba(236,72,153,.22)", delay: ".9s" },
	{ k: "学", top: "46%", left: "76%", size: "1.9rem", color: "rgba(34,197,94,.20)", delay: "4.4s" },
	{ k: "作", top: "64%", left: "14%", size: "1.75rem", color: "rgba(96,165,250,.18)", delay: "2s" },
	{ k: "品", top: "72%", left: "26%", size: "2rem", color: "rgba(147,51,234,.20)", delay: "3.9s" },
	{ k: "画", top: "68%", left: "38%", size: "1.85rem", color: "rgba(251,146,60,.22)", delay: "2.3s" },
	{ k: "像", top: "78%", left: "52%", size: "2rem", color: "rgba(236,72,153,.15)", delay: "4.8s" },
	{ k: "章", top: "70%", left: "64%", size: "1.8rem", color: "rgba(34,197,94,.22)", delay: "1.7s" },
	{ k: "部", top: "74%", left: "74%", size: "1.9rem", color: "rgba(59,130,246,.20)", delay: "3.1s" },
	{ k: "集", top: "70%", left: "84%", size: "1.7rem", color: "rgba(147,51,234,.24)", delay: ".4s" },
];

// Kanji rain generation
const rainKanjiChars = "翻漫本語文字道読書話頁訳学作品画像章部集".split("");
const rainPalette = [
	"rgba(168,85,247,0.28)",
	"rgba(236,72,153,0.28)",
	"rgba(251,146,60,0.28)",
	"rgba(96,165,250,0.30)",
	"rgba(34,197,94,0.26)",
	"rgba(147,51,234,0.30)",
];

function randomSequence(min = 28, max = 46) {
	const len = Math.floor(Math.random() * (max - min + 1)) + min;
	let out = "";
	for (let i = 0; i < len; i++) {
		out += rainKanjiChars[Math.floor(Math.random() * rainKanjiChars.length)] + (i < len - 1 ? "\n" : "");
	}
	return out;
}

const rainColumns = Array.from({ length: 22 }, (_, i) => {
	const baseLeft = (i / 22) * 100;
	const jitter = (Math.random() - 0.5) * 3.5;
	return {
		content: randomSequence(),
		left: `${Math.min(95, Math.max(0, baseLeft + jitter))}%`, // clamp réduit à 95% pour éviter l'accumulation bord droit
		animationDelay: `${-Math.random() * 18}s`,
		animationDuration: `${12 + Math.random() * 16}s`,
		fontSize: `${12 + Math.random() * 18}px`,
		color: rainPalette[Math.floor(Math.random() * rainPalette.length)],
		fontWeight: Math.random() < 0.25 ? 700 : 500,
		textShadow: Math.random() < 0.5 ? "0 0 6px rgba(255,255,255,0.25)" : "0 0 4px rgba(255,255,255,0.18)",
	};
});

const HeroSection = () => {
	return (
		<section className="kanji-boost hero-bg hero-fade-bottom relative min-h-screen flex items-center justify-center py-32 px-4 overflow-hidden">
			{/* Glow layers */}
			<div className="hero-glow" aria-hidden="true" />

			{/* Kanji rain full background */}
			<div className="hero-kanji-rain" aria-hidden="true">
				{rainColumns.map((col, i) => (
					<span
						key={i}
						className="column"
						style={{
							left: col.left,
							animationDelay: col.animationDelay,
							animationDuration: col.animationDuration,
							fontSize: col.fontSize,
							color: col.color,
							fontWeight: col.fontWeight as any,
							textShadow: col.textShadow,
						}}
					>
						{col.content}
					</span>
				))}
			</div>

			{/* Floating kanji cloud (foreground) */}
			<div className="hero-kanji" aria-hidden="true">
				{kanjiCloud.map(({ k, top, left, size, color, delay }, i) => (
					<span
						key={i}
						style={{ top, left, fontSize: size, color, animationDelay: delay }}
					>
						{k}
					</span>
				))}
			</div>

			<div className="container mx-auto text-center relative z-10">
				<div className="max-w-5xl mx-auto">
					<div className="fade-in mb-12">
						<h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight select-none leading-tight">
							<span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
								TRADOKU
							</span>
						</h1>
						<p className="text-2xl md:text-4xl text-gray-700 mb-10 font-light tracking-tight">
							Plateforme collaborative de traduction de mangas
						</p>
						<div className="flex flex-wrap items-center justify-center gap-8 text-xl text-gray-700 mb-14">
							<div className="flex items-center gap-2">
								<span className="text-3xl">
									<img
										src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Books.png"
										alt="Books"
										width="32"
										height="32"
									/>
								</span>
								<span className="font-semibold">Webtoon</span>
							</div>
							<div className="w-2 h-2 bg-purple-400 rounded-full" />
							<div className="flex items-center gap-2">
								<span className="text-3xl">
									<img
										src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Map%20of%20Japan.png"
										alt="Map of Japan"
										width="32"
										height="32"
									/>
								</span>
								<span className="font-semibold">Mangas</span>
							</div>
							<div className="w-2 h-2 bg-pink-400 rounded-full" />
							<div className="flex items-center gap-2">
								<span className="text-3xl">📄</span>
								<span className="font-semibold">PDF</span>
							</div>
						</div>
					</div>

					<div className="text-2xl text-gray-800 mb-20 max-w-3xl mx-auto leading-relaxed">
						<div className="manga-panel p-10 shadow-xl relative bg-white/90 backdrop-blur-sm border border-black/10">
							<p>
								<span className="font-semibold text-purple-600">
									Traduisez collaborativement
								</span>{" "}
								vos mangas et webtoons favoris avec notre plateforme dédiée. Nous ne
								publions pas les œuvres — nous vous donnons les{" "}
								<span className="font-semibold text-pink-600">outils de traduction</span> pour
								créer vos propres versions et les exporter où vous le souhaitez.
							</p>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
						<Button
							size="lg"
							className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 transition-colors text-white rounded-2xl font-bold shadow-xl focus-visible:ring-4 focus-visible:ring-purple-300/40"
						>
							<span className="mr-3">🚀</span>
							Commencer à traduire
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="text-xl px-12 py-6 border-2 border-gray-200 bg-white/70 backdrop-blur-sm hover:bg-white/80 text-gray-700 rounded-2xl font-bold shadow-md flex items-center gap-2 focus-visible:ring-4 focus-visible:ring-purple-300/40"
						>
							<span className="mr-2">🛠️</span>
							Découvrir nos outils
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
						{[
							{ icon: <FileText className="h-10 w-10 text-purple-600" />, title: "Upload PDF", subtitle: "Simple & rapide" },
							{ icon: <Users className="h-10 w-10 text-pink-600" />, title: "Communauté", subtitle: "Traduction collaborative" },
							{ icon: <Zap className="h-10 w-10 text-orange-500" />, title: "IA intégrée", subtitle: "Traduction assistée" }
						].map((stat, index) => (
							<div key={index} className="text-center p-8 bg-white/85 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 hover:shadow-2xl transition-shadow duration-300">
								<div className="flex items-center justify-center mb-4">{stat.icon}</div>
								<p className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{stat.title}</p>
								<p className="text-lg text-gray-600">{stat.subtitle}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
				<div className="w-8 h-14 border-2 border-purple-300/70 rounded-full flex justify-center items-start bg-white/60 backdrop-blur-sm shadow-inner">
					<div className="w-2 h-4 bg-purple-400 rounded-full mt-3 animate-bounce" />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
