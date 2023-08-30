import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const LeadingCompany = () => {
	return (
		<div className="bg-creamBg text-darkBg">
			<div className="flex flex-col lg:flex-row items-center gap-10 py-10">
				<img
					src="/assets/cover-2.png"
					alt="hear-cover"
					className=" w-full lg:w-1/2 rounded-r-md"
				/>

				<div className=" w-full lg:w-1/2 p-5">
					<h1 className="text-2xl lg:text-3xl font-bold mb-5 text-start">
						Fostering Global Collaborations for Advancing Healthcare Innovation
						Across Borders
					</h1>
					<div className="flex items-center justify-between gap-5">
						<p className=" mt-4 mb-3 text-sm lg:text-base">
							At VRD Research Lab, our collaborations know no borders. Together
							with our global network of partners, we are forging a new era of
							healthcare innovation that transcends traditional boundaries,
							propelling us toward a future where technology and research unite
							to enhance human well-being across the globe.
						</p>
					</div>

					<Link
						href="/researchers"
						class="inline-flex items-center text-base lg:text-xl font-bold py-2 gap-1 text-primary hover:text-secondary "
					>
						 Our Researchers
						<BsArrowRight className="text-xl" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LeadingCompany;
