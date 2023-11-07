import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Frontend Mentor | QR code component",
	description: "Frontend Mentor QR code component challenge",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${outfit.className} bg-lightGray min-h-screen flex justify-center items-center`}
			>
				{children}
			</body>
		</html>
	);
}
