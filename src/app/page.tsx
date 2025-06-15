import Link from "next/link";

export default function Home() {
	const menuItems = [
		{
			title: "Blog",
			href: "/blog",
			icon: "📝",
			gradient: "from-blue-500 to-purple-600"
		},
		{
			title: "Products",
			href: "/products",
			icon: "📦",
			gradient: "from-green-500 to-teal-600"
		},
		{
			title: "Shop",
			href: "/shop",
			icon: "🛒",
			gradient: "from-purple-500 to-pink-600"
		},
		{
			title: "Game",
			href: "/game",
			icon: "🎮",
			gradient: "from-orange-500 to-red-600"
		}
	];

	return (
		<div className="fixed inset-0 overflow-hidden">
			{/* 背景画像 */}
			<div 
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('/wild_riki.jpg')" // ここに画像パスを設定
				}}
			/>
			
			{/* メニューグリッド */}
			<div className="relative h-full w-full grid grid-cols-2 grid-rows-2">
				{menuItems.map((item, index) => (
					<Link
						key={index}
						href={item.href}
						className="relative group overflow-hidden"
					>
						{/* 背景（通常時は透過、ホバー時に不透明） */}
						<div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
						
						{/* コンテンツ */}
						<div className="relative w-full h-full flex flex-col items-center justify-center p-8 transition-all duration-300">
							<div className="text-6xl md:text-7xl lg:text-8xl mb-4 transform transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
								{item.icon}
							</div>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 drop-shadow-lg">
								{item.title}
							</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}