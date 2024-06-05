export const metadata = {
	title: "About - My Blog",
	description: "About the blog and its creators.",
};

export default function About() {
	return (
		<main className="flex flex-col min-h-screen">
			<div className="container mx-auto px-4 py-8 flex-grow">
				<h1 className="text-3xl font-bold mb-4">About Us</h1>
				<p>
					This is just some blog from some cool people at nFactorial
					school.
				</p>
			</div>
		</main>
	);
}
