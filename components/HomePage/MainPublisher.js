import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const MainPublisher = () => {
	return (
		<div className="bg-white text-darkBg ">
			<div className="max-w-7xl mx-auto py-14 px-5 lg:px-0">
				<h3 className="text-lg lg:text-xl font-bold  pb-10 text-center">
					Labora is the United States based medical laboratory, medicine, and
					vaccine company with over{" "}
					<span className="text-red-700">35 years of experience</span> focusing
					on value medicine and a vaccine to provide quality needs.
				</h3>

				<div className="flex flex-col lg:flex-row items-center gap-10">
					<img
						src="/assets/photo1.jpg"
						className="h-full w-full lg:w-1/2 rounded-md"
					/>

					<div className=" w-full lg:w-1/2">
						<h1 className=" text-2xl lg:text-3xl font-bold mb-3 text-center lg:text-start">
							WELCOME TO LABORA LABORATORY INC.
						</h1>
						<h3 className="text-lg lg:text-xl font-bold my-2 text-center lg:text-start">
							Having a new name is just the beginning.
						</h3>
						<p className=" mt-4 mb-3 text-sm lg:text-base">
							Curabitur metus lorem, mollis sit amet ligula ac, efficitur
							sagittis justo. Morbi at ligula dictum sem tristique elementum.is
							ante, in venenatis lacus. Morbi hendrerit, sapien in aliquet
							venenatis, sem quam volutpa, ut sollicitudin ipsum lorem at lorem.
							Sed nisi velit, tincidunt sit amet tempus eu, rhoncus eget nisi.
							Fusce eget facilisis risus. Quisque ac sagittis ante, in venenatis
							lacus. Morbi hendrerit, sapien in aliquet venenatis, sem quam
							volutpat massa, ut sollicitudin ipsum lorem at lorem.
						</p>

						<Link
							href="/publications"
							class="inline-flex items-center text-base lg:text-xl font-bold py-2 gap-1 text-red-700 hover:text-red-500 "
						>
							View Our Publications
							<BsArrowRight className="text-xl" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPublisher;
