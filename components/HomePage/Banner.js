import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
	return (
		<div>
			<div className="slider-bg flex items-center justify-center text-white ">
				<div className="max-w-7xl mx-auto text-center px-5 lg:px-0">
					<h1 className="text-2xl lg:text-6xl font-bold text-white mb-4 w-full lg:max-w-5xl mx-auto">
						Welcome to VRD Research Lab
					</h1>
					<p className="text-white mb-8 max-w-4xl mx-auto text-xs md:text-sm lg:text-base">
					At the convergence of artificial intelligence, computational biology, and neuroscience, our team is dedicated to propelling the frontiers of digital health and cardiology. Our mission centers on crafting inventive solutions to enhance lives, ensuring healthcare becomes more attainable, streamlined, and impactful.
					</p>

					<div className=" flex items-center justify-center">
						<Link
							href={"/publications"}
							className="bg-primary hover:bg-secondary text-sm lg:text-xl text-white font-semibold py-2 px-3 lg:px-8 rounded  flex items-center gap-1 text-center"
						>
							<span>Our Publications</span> <BsArrowRight />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
