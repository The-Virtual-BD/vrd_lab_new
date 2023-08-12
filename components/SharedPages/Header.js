import React from "react";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
	const location = useRouter();
	console.log(location.pathname === "/");

	return (
		<div className="">
			<Navbar
				rounded={true}
				className="fixed w-full top-0  shadow-lg py-1 z-50 "
			>
				<Navbar.Brand href="/">
					<img
						src="/assets/logo.svg"
						className="mr-3 w-full h-16"
						alt=" Logo"
					/>

					{/* <h1 className="font-semibold text-lg lg:text-xl text-red-700 capitalize text-center">
						Digital Cardiology <br /> Research Group
					</h1> */}
				</Navbar.Brand>

				<Navbar.Toggle />

				<Navbar.Collapse>
					<Link
						href="/"
						className={`text-lg lg:text-xl pl-2 lg:pl-0  font-semibold nav-menu ${
							location.pathname === "/" ? "active" : ""
						}`}
					>
						Home
					</Link>

					<Link
						href="/researchers"
						className={`text-lg lg:text-xl pl-2 lg:pl-0   font-semibold nav-menu ${
							location.pathname === "/researchers" ? "active" : ""
						}`}
					>
						Our Researchers
					</Link>

					<Link
						href="/projects"
						className={`text-lg lg:text-xl pl-2 lg:pl-0   font-semibold nav-menu ${
							location.pathname === "/projects" ? "active" : ""
						}`}
					>
						Projects
					</Link>

					<Link
						href="/publications"
						className={`text-lg lg:text-xl pl-2 lg:pl-0   font-semibold nav-menu ${
							location.pathname === "/publications" ? "active" : ""
						}`}
					>
						Publications
					</Link>

					<Link
						href="/news"
						className={`text-lg lg:text-xl pl-2 lg:pl-0   font-semibold nav-menu ${
							location.pathname === "/news" ? "active" : ""
						}`}
					>
						News
					</Link>

					<Link
						href="/contacts"
						className={`text-lg lg:text-xl pl-2 lg:pl-0 pb-2  font-semibold nav-menu ${
							location.pathname === "/contacts" ? "active" : ""
						}`}
					>
						Contact Us
					</Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
