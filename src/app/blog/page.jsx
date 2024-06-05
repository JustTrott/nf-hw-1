// "use client";

import Image from "next/image";
import Link from "next/link";
import { createSlug } from "@/utils/slug";
import fs from "fs/promises";

export const metadata = {
	title: "Blog Posts - My Blog",
	description: "A collection of blog posts.",
};

export default async function Blog() {
	const data = await fs.readFile("public/data/data.json", "utf-8");
	const posts = JSON.parse(data);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{posts.map((post) => (
					<div
						key={post.id}
						className="bg-white rounded-lg shadow-md overflow-hidden"
					>
						<Link href={`/blog/${createSlug(post.title)}`}>
							<div className="relative h-48">
								<Image
									src={`https://source.unsplash.com/random/800x600?${encodeURIComponent(
										post.title
									)}`} // Use post title as seed for randomness
									alt={post.title}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									style={{ objectFit: "cover" }}
								/>
							</div>
							<div className="p-4">
								<h2 className="text-xl font-semibold mb-2">
									{post.title}
								</h2>
								<p className="text-gray-600">
									{post.description}
								</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
