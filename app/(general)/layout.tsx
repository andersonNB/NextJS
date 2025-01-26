import {Navbar} from "@/components";

export default function GeneralLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="bg-gray-500">
			GeneralLayout
			<Navbar />
			{children}
		</div>
	);
}
