"use client";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import {usePathname} from "next/navigation";
import {JSX} from "react";

interface Props {
	path: string;
	text: string;
	icon?: JSX.Element;
}

export const ActiveLink = ({path, text, icon}: Props) => {
	const activeLink = usePathname();

	console.log(activeLink);

	return (
		<>
			<Link
				className={`${style.link} ${
					activeLink === path ? style["active-link"] : ""
				} flex gap-1 items-center`}
				href={path}
			>
				{icon}
				{text}
			</Link>
		</>
	);
};
