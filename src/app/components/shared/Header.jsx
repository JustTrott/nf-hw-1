import Link from "next/link";

function Header() {
	return (
		<header className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
			<div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
				<Link href="/" className="text-xl font-bold">
					My Blog
				</Link>

				<nav className="mt-2 sm:mt-0">
					<ul className="flex space-x-4">
						<li>
							<Link href="/" className="hover:underline">
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" className="hover:underline">
								About
							</Link>
						</li>
						<li>
							<Link href="/blog" className="hover:underline">
								Blog
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
