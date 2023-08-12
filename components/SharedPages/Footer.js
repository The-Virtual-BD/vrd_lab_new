import { Footer } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterD = () => {
	const getYear = new Date().getFullYear();
	return (
		<div className="mt-5 text-darkBg ">
			<footer>
				<div className="w-full ">
					<div className="bg-creamBg">
						<div className="flex flex-col lg:flex-row items-center gap-10 px-5 lg:px-0 py-5 max-w-7xl mx-auto">
							<div className="w-full lg:w-2/6">
								<h2 className="text-xl lg:text-3xl  font-bold text-red-700">
									Digital Cardiology <br /> Research Group
								</h2>
								<p className=" text-sm lg:text-base  mt-4">
									Labora is a creative & powerful medical and laboratory site
									template that suits all your business needs.
								</p>
							</div>

							<div className="w-full lg:w-4/6 flex flex-col lg:flex-row items-start justify-between gap-5 ">
								<div className="flex items-start justify-start lg:justify-between gap-10 w-full lg:w-1/2">
									<div>
										<Footer.Title title="Quick Links" />
										<Footer.LinkGroup col>
											<Link href="/researchers" className="hover:underline">
												Our Researchers
											</Link>
											<Link href="/publications" className="hover:underline">
												Publications
											</Link>
											<Link href="/projects" className="hover:underline">
												Past Projects
											</Link>
											<Link href="/news" className="hover:underline">
												Latest News
											</Link>
										</Footer.LinkGroup>
									</div>

									<div>
										<Footer.Title title="Useful Links" />
										<Footer.LinkGroup col>
											<Link href="/contacts" className="hover:underline">
												Contact Us
											</Link>
											<Link href="/publications" className="hover:underline">
												Conference Article
											</Link>
											<Link href="/publications" className="hover:underline">
												Journal Article
											</Link>
										</Footer.LinkGroup>
									</div>
								</div>

								<div className="w-full lg:w-1/2 flex items-start justify-start lg:justify-center">
									<div>
										<Footer.Title title="Follow Us" />
										<Footer.LinkGroup row className="gap-3">
											<Footer.Link href="#">
												<div className="h-9 w-9 bg-red-700 hover:bg-red-500 cursor-pointer text-white  rounded-full flex items-center justify-center text-lg">
													<BsFacebook />
												</div>
											</Footer.Link>

											<Footer.Link href="#">
												<div className="h-9 w-9 bg-red-700 hover:bg-red-500 cursor-pointer text-white  rounded-full flex items-center justify-center text-lg">
													<BsInstagram />
												</div>
											</Footer.Link>

											<Footer.Link href="#">
												<div className="h-9 w-9 bg-red-700 hover:bg-red-500 cursor-pointer text-white  rounded-full flex items-center justify-center text-lg">
													<BsTwitter />
												</div>
											</Footer.Link>
										</Footer.LinkGroup>
									</div>
								</div>
							</div>
						</div>
					</div>

					<hr />

					<div className=" bg-darkBg text-white py-2 text-sm">
						<p className=" px-5 lg:px-0 text-center  max-w-7xl mx-auto">
							&copy; {getYear} - Digital Cardiology Research Group Developed by{" "}
							<span className="font-bold hover:text-red-500 hover:underline">
								<Link href={"https://thevirtualbd.com/"}>The Virtual BD</Link>
							</span>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default FooterD;