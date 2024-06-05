import { notFound } from "next/navigation";
import { createSlug } from "@/utils/slug";
import Image from "next/image";
import fs from "fs/promises";
import path from "node:path";

async function getPostData(slug) {
	const data = await fs.readFile(
		path.resolve("./public", "data/data.json"),
		"utf-8"
	);
	const posts = JSON.parse(data);

	// Find the post with the matching slug (created from title)
	const post = posts.find((post) => createSlug(post.title) === slug);
	if (!post) {
		return notFound();
	}
	return post;
}

export async function generateMetadata({ params }) {
	const post = await getPostData(params.slug);
	return {
		title: `${post.title} - My Blog`,
		description: post.description,
	};
}

export default async function BlogPostPage({ params }) {
	const post = await getPostData(params.slug);

	return (
		<>
			<article className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-4">{post.title}</h1>
				<p className="text-gray-500 mb-2">
					By {post.author} on {post.date}
				</p>
				{/* Conditional content rendering */}
				{post.content ? (
					<p>{post.content}</p> // Render content if available
				) : (
					<div className="flex flex-col items-center">
						<p className="text-center mb-4">
							There is no text for now, here is a tall picture of
							&quot;{post.title}&quot;.
						</p>
						<Image
							src={`https://source.unsplash.com/800x1200?${encodeURIComponent(
								post.title
							)}`}
							alt={post.title}
							width={800}
							height={1200}
							className="rounded-lg shadow-md"
						/>
					</div>
				)}
			</article>
		</>
	);
}
