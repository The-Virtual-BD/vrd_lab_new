import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
	return (
		<div>
			<div className="slider-bg flex items-center justify-center text-white ">
				<div className="container mx-auto text-center px-5 lg:px-0">
					<h1 className="text-2xl lg:text-6xl font-bold text-white mb-4 max-w-5xl mx-auto">
						Welcome to The VRD Research Lab
					</h1>
					<p className="text-white mb-8 max-w-4xl mx-auto text-sm lg:text-base">
						Our group focuses on the intersection of wearable devices,
						artificial intelligence, and sensors to advance the field of digital
						health and cardiology. Our goal is to create innovative solutions
						that can improve the lives of people and make healthcare more
						accessible, efficient, and effective
					</p>

					<div className=" flex items-center justify-center">
						<Link
							href={"/projects"}
							className="bg-primary hover:bg-secondary text-sm lg:text-xl text-white font-semibold py-2 px-5 lg:px-8 rounded  flex items-center gap-1 text-center"
						>
							<span>Let&apos;s Explore</span> <BsArrowRight />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
