import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "My Blog",
	description: "A blog about stuff.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
