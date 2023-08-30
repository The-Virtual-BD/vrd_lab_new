import React from "react";
import PageBanner from "../SharedPages/PageBanner";
import {
	BsEnvelope,
	BsFillTelephoneFill,
	BsTelephone,
	BsWhatsapp,
} from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import Link from "next/link";

const Contacts = () => {
	return (
		<div>
			<PageBanner>Contact Us</PageBanner>
			<div className="bg-white text-darkBg my-10">
				<div className="max-w-7xl mx-auto px-5 lg:px-0 ">
					<div className="flex flex-col lg:flex-row items-center justify-center gap-5 mb-10">
						<div className="bg-creamBg text-darkBg  hover:text-white hover:bg-primary p-5 w-full lg:w-80 h-48  rounded-md border-l-8 border-primary duration-300 ease-linear shadow-lg">
							<div className="flex flex-col items-center justify-center gap-1 text-center">
								<BiLocationPlus className="text-4xl mb-2" />
								<h2 className="text-lg font-semibold">Address</h2>
								<Link href={"https://goo.gl/maps/A5cRHZLFLP6ypPPQ9"}>
									Home 315, Road 3, Phase 2, Sonadanga R/A, Khulna 9100,
									Bangladesh
								</Link>
							</div>
						</div>

						{/* <div className="bg-creamBg text-darkBg  hover:text-white hover:bg-primary p-10 w-full lg:w-80  rounded-md border-l-8 border-primary duration-300 ease-linear shadow-lg">
							<div className="flex flex-col items-center justify-center gap-1">
								<BsWhatsapp className="text-2xl lg:text-4xl mb-2" />
								<h2 className="text-base lg:text-lg font-semibold">WhatsApp</h2>
								<Link href={"/"} className="text-sm lg:text-base">
									+91-7000012345
								</Link>
							</div>
						</div> */}

						<div className="bg-creamBg text-darkBg  hover:text-white hover:bg-primary p-5 w-full lg:w-80 h-48   rounded-md border-l-8 border-primary duration-300 ease-linear shadow-lg">
							<div className="flex flex-col items-center justify-center gap-1">
								<BsEnvelope className="text-2xl lg:text-4xl mb-2" />
								<h2 className="text-base lg:text-lg font-semibold">
									Have any questions?
								</h2>
								<Link
									href={"mailto:contact@vrdlab.com"}
									className="text-sm lg:text-base"
								>
									contact@vrdlab.com
								</Link>

								<Link
									href={"mailto:mehedihassan@ieee.org"}
									className="text-sm lg:text-base"
								>
									mehedihassan@ieee.org
								</Link>
							</div>
						</div>

						<div className="bg-creamBg text-darkBg  hover:text-white hover:bg-primary p-5 w-full lg:w-80 h-48   rounded-md border-l-8 border-primary duration-300 ease-linear shadow-lg">
							<div className="flex flex-col items-center justify-center gap-1">
								<BsWhatsapp className="text-2xl lg:text-4xl mb-2" />
								<h2 className="text-base lg:text-lg font-semibold">WhatsApp</h2>
								<Link
									href={"tel:+8801902624501"}
									className="text-sm lg:text-base"
								>
									+880 1902 624 501
								</Link>
							</div>
						</div>
					</div>

					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58841.307728924396!2d89.47147462167968!3d22.8179574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9bd89294df9f%3A0xf7219ca732219803!2sThe%20Virtual%20BD!5e0!3m2!1sen!2sbd!4v1691904476922!5m2!1sen!2sbd"
							height="450"
							allowfullscreen=""
							loading="lazy"
							className="w-full rounded-md"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
