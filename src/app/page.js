import Image from "next/image";
import Link from "next/link";
import { createSlug } from "@/utils/slug";
import fs from "fs/promises";

export default async function Home() {
	var posts;
	try {
		const res = await fetch("/data/data.json");
		posts = await res.json();
	} catch (error) {
		console.error(error);
		const data = await fs.readFile("public/data/data.json", "utf-8");
		posts = JSON.parse(data);
	}
	// Find the featured post (assuming ID 1 is always the featured post)
	const featuredPost = posts.find((post) => post.id === 1);

	if (!featuredPost) {
		return <p>No featured post found.</p>; // Handle the case where there's no post with ID 1
	}

	return (
		<main className="flex flex-col min-h-screen">
			<section className="container mx-auto px-4 py-8 flex-grow">
				<h1 className="text-4xl font-bold mb-6 text-center">
					Featured Post
				</h1>
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="relative h-96">
						<Image
							src={`https://source.unsplash.com/random/1200x900?${encodeURIComponent(
								featuredPost.title
							)}`}
							alt={featuredPost.title}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="p-6">
						<Link href={`/blog/${createSlug(featuredPost.title)}`}>
							<h2 className="text-2xl font-semibold mb-4">
								{featuredPost.title}
							</h2>
						</Link>
						<p className="text-gray-600 mb-4">
							{featuredPost.description}
						</p>
						<Link
							href={`/blog/${createSlug(featuredPost.title)}`}
							className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
						>
							Read More
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
