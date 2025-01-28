import {
	AccessibilityIcon,
	HomeIcon,
	PencilIcon,
	PersonIcon,
	SquirrelIcon,
} from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import {ActiveLink} from "@/components";

const navItems = [
	{
		path: "/about",
		text: "About",
		icon: <AccessibilityIcon />,
	},
	{
		path: "/contact",
		text: "Contact",
		icon: <PersonIcon />,
	},
	{
		path: "/edit",
		text: "Edit",
		icon: <PencilIcon />,
	},
	{
		path: "/princing",
		text: "Princing",
		icon: <SquirrelIcon />,
	},
];

export const Navbar = () => {
	return (
		<nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded ">
			<span className="hover:bg-slate-300 transition duration-300 ease-in-out rounded">
				{" "}
				<Link href="/" className="flex gap-1  items-center ">
					<HomeIcon />
					Home
				</Link>
			</span>
			<ul className="flex gap-4 bg-slate-700">
				{navItems?.map((navItem) => (
					<li key={navItem.path}>
						<ActiveLink
							path={navItem.path}
							text={navItem.text}
							icon={navItem.icon}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};
