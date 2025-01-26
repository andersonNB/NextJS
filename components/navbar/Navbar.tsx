import Link from "next/link";
import React from "react";

export const Navbar = () => {
	return (
		<nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded ">
			<span className="hover:bg-slate-300 transition duration-300 ease-in-out rounded">
				{" "}
				<Link href="/">Home</Link>
			</span>
			<ul className="flex gap-4 bg-slate-700">
				<li>
					<Link href="/about">About</Link>{" "}
				</li>
				<li>
					<Link href="/contact">Contact</Link>{" "}
				</li>
				<li>
					<Link href="/edit">Edit</Link>{" "}
				</li>
				<li>
					<Link href="/princing">Princing</Link>{" "}
				</li>
			</ul>
		</nav>
	);
};
