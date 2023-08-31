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
				className="fixed w-full top-0  shadow-lg py-1 z-50 navbar-menu  "
			>
				<Navbar.Brand href="/" className="navbar-logo">
					<img
						src="/assets/logo.svg"
						className="mr-3 w-full  h-10 lg:h-12"
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
						className={`text-base md:text-base lg:text-xl pl-2 md:pl-0 lg:pl-0  font-semibold nav-menu ${
							location.pathname === "/" ? "active" : ""
						}`}
					>
						Home
					</Link>

					<Link
						href="/researchers"
						className={`text-base md:text-base lg:text-xl pl-2 md:pl-0 lg:pl-0   font-semibold nav-menu ${
							location.pathname === "/researchers" ? "active" : ""
						}`}
					>
						Researchers
					</Link>

					<Link
						href="/projects"
						className={`text-base md:text-base lg:text-xl pl-2 md:pl-0 lg:pl-0   font-semibold nav-menu ${
							location.pathname === "/projects" ? "active" : ""
						}`}
					>
						Projects
					</Link>

					<Link
						href="/publications"
						className={`text-base md:text-base lg:text-xl pl-2 md:pl-0 lg:pl-0   font-semibold nav-menu ${
							location.pathname === "/publications" ? "active" : ""
						}`}
					>
						Publications
					</Link>

					<Link
						href="/news"
						className={`text-base md:text-base lg:text-xl pl-2 md:pl-0 lg:pl-0   font-semibold nav-menu ${
							location.pathname === "/news" ? "active" : ""
						}`}
					>
						News
					</Link>

					<Link
						href="/contacts"
						className={`text-base md:text-base lg:text-xl pl-2 md:pl-0 lg:pl-0 pb-2 md:pb-0  font-semibold nav-menu ${
							location.pathname === "/contacts" ? "active" : ""
						}`}
					>
						Contacts
					</Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
