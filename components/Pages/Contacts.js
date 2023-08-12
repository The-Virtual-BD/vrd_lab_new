import React from "react";
import PageBanner from "../SharedPages/PageBanner";
import { BsEnvelope, BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

const Contacts = () => {
	return (
		<div>
			<PageBanner>Contact Us</PageBanner>
			<div className="bg-white text-darkBg my-10">
				<div className="max-w-7xl mx-auto px-5 lg:px-0 ">
					<div className="flex flex-col lg:flex-row items-center justify-center gap-5 mb-10">

					{/* 	<div className="bg-creamBg text-darkBg  hover:text-white hover:bg-red-700 p-10 w-full lg:w-80  rounded-md border-l-8 border-red-700 duration-300 ease-linear shadow-lg">
							<div className="flex flex-col items-center justify-center gap-1">
								<BsEnvelope className="text-4xl mb-2" />
								<h2 className="text-lg font-semibold">Address</h2>
								<Link href={"/"}>221 Burwood Highway, Burwood, VIC 3125, Australia</Link>
							</div>
						</div> */}

						<div className="bg-creamBg text-darkBg  hover:text-white hover:bg-red-700 p-10 w-full lg:w-80  rounded-md border-l-8 border-red-700 duration-300 ease-linear shadow-lg">
							<div className="flex flex-col items-center justify-center gap-1">
								<BsEnvelope className="text-2xl lg:text-4xl mb-2" />
								<h2 className="text-base lg:text-lg font-semibold">Have any questions?</h2>
								<Link href={"mailto:shariful@deakin.edu.au"} className="text-sm lg:text-base">shariful@deakin.edu.au</Link>
							</div>
						</div>

						<div className="bg-creamBg text-darkBg  hover:text-white hover:bg-red-700 p-10 w-full lg:w-80  rounded-md border-l-8 border-red-700 duration-300 ease-linear shadow-lg">
							<div className="flex flex-col items-center justify-center gap-1">
								<BsWhatsapp className="text-2xl lg:text-4xl mb-2" />
								<h2 className="text-base lg:text-lg font-semibold">WhatsApp</h2>
								<Link href={"/"} className="text-sm lg:text-base">+91-7000012345</Link>
							</div>
						</div>

						<div className="bg-creamBg text-darkBg  hover:text-white hover:bg-red-700 p-10 w-full lg:w-80  rounded-md border-l-8 border-red-700 duration-300 ease-linear shadow-lg">
							<div className="flex flex-col items-center justify-center gap-1">
								<BsFillTelephoneFill className="text-2xl lg:text-4xl mb-2" />
								<h2 className="text-base lg:text-lg font-semibold">Call Me</h2>
								<Link href={'/'} className="text-sm lg:text-base">+1800-1234567890</Link>
							</div>
						</div>
					</div>

					<div >
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d468.32220673675255!2d145.11391478568547!3d-37.84897073716772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6405e6c022271%3A0x8a6e1fd3dbce81e1!2sFaculty%20of%20Health!5e0!3m2!1sen!2sbd!4v1690868495995!5m2!1sen!2sbd"
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
