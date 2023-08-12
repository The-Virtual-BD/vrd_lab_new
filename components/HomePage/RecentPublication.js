import React from "react";
import { publication } from "../../public/allData";
import { BsArrowRight } from 'react-icons/bs';
import Link from "next/link";

const RecentPublication = () => {
	return (
		<div className="py-10 bg-creamBg text-darkBg mt-10">

			<div className="my-5 mb-10 max-w-7xl mx-auto px-5 lg:px-0">
				<h2 className="text-3xl lg:text-4xl font-semibold text-start">
					Our Recent Publications
				</h2>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center max-w-7xl mx-auto px-5 lg:px-0">
				{publication.map((pub) => (
					<div key={pub.id} className=" w-full shadow-lg ">
						<div class=" bg-fontclr  rounded-lg shadow-sm hover:shadow-lg ">
							<a href="#">
								<img
									className="rounded-t-lg h-[250px] w-full"
									src={pub.img}
									alt=""
								/>
							</a>

							<div class="p-5">
								<a href="#">
									<h5 class="mb-2 text-lg lg:text-2xl font-bold tracking-tight text-darkBg hover:text-red-700 ">
										Noteworthy technology acquisitions 2021
									</h5>
								</a>

								<p class="mb-3 font-normal text-gray-700 text-sm lg:text-base">
									Here are the biggest enterprise technology acquisitions of
									2021 so far, in reverse chronological order.
								</p>

								<Link
									href="/"
									class="inline-flex items-center px-3 lg:px-5 text-sm lg:text-base py-2 gap-1  font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-500 "
								>
									Read more <BsArrowRight className="text-xl"/>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentPublication;
