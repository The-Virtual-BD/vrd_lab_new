import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const MainPublisher = () => {
	return (
		<div className="bg-white text-darkBg ">
			<div className="max-w-7xl mx-auto py-8 px-5 lg:px-0">
				<h3 className="text-base lg:text-lg font-bold  pb-10 text-center">
					Our laboratory is a hub of innovation, where the spirit of exploration
					thrives. Through 
					<span className="text-primary">  collaborative efforts and a multidisciplinary approach,
						
					</span>{" "}
					we aim to unravel the mysteries of science and technology, paving the
					way for advancements that will shape the future.
				</h3>

				<div className="flex flex-col lg:flex-row items-center gap-8">
					<img
						src="/assets/photo1.jpg"
						className="h-full w-full lg:w-1/2 rounded-md"
					/>

					<div className=" w-full lg:w-1/2">
						<h1 className=" text-2xl lg:text-3xl font-bold mb-3 text-center lg:text-start">
							WELCOME TO VRD Research Lab
						</h1>
						<h3 className="text-lg lg:text-xl font-bold my-2 text-center lg:text-start">
							We do research for innovations.
						</h3>
						<p className=" mt-4 mb-3 text-sm lg:text-base">
							VRD Research Lab is a pioneering hub that stands at the crossroads
							of biomedical engineering, data science, and expert systems,
							forming a vibrant nexus where innovative ideas converge and
							cutting-edge research unfolds. What sets VRD Research Lab apart is
							its holistic approach, encompassing wearable devices, electronic
							health records, and the Internet of Things (IoT), all harnessed to
							devise comprehensive healthcare solutions that prioritize both
							efficiency and confidentiality.
						</p>

						<Link
							href="/contacts"
							class="inline-flex items-center text-base lg:text-xl font-bold py-2 gap-1 text-primary hover:text-secondary "
						>
							Let&apos;s Talk
							<BsArrowRight className="text-xl" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPublisher;
