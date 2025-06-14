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
		<div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
			<main className="max-w-4xl mx-auto">
				<div className="text-center mb-16">
					<h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
						Gyakuoni
					</h1>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
				</div>
				
				<div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
					{menuItems.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className="group relative overflow-hidden"
						>
							<div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
								{/* Gradient overlay on hover */}
								<div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
								
								{/* Content */}
								<div className="relative z-10 text-center">
									<div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
										{item.icon}
									</div>
									<h2 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
										{item.title}
									</h2>
								</div>

								{/* Animated border */}
								<div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{padding: '2px'}}>
									<div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl"></div>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Floating particles effect */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
					<div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
					<div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
				</div>
			</main>
		</div>
	);
}