import React from "react";

const NewsSkeleton = () => {
	return (
		<>
			<div
				role="status"
				class="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse  md:p-6 "
			>
				<div class="flex items-center justify-between w-full">
					<div className="w-full">
						<div class="h-3 bg-gray-300 rounded-full  w-full mb-2"></div>
						<div class="w-full h-2 bg-gray-200 rounded-full "></div>
						<div class="w-20 h-2 my-2 bg-gray-200 rounded-full "></div>
						<div class="w-14 h-5 mt-3 bg-gray-200 rounded-full "></div>
					</div>
				</div>
				<div class="flex items-center justify-between w-full">
					<div className="w-full">
						<div class="h-3 bg-gray-300 rounded-full w-full mb-2"></div>
						<div class="w-full h-2 bg-gray-200 rounded-full "></div>
						<div class="w-20 h-2 my-2 bg-gray-200 rounded-full "></div>
						<div class="w-14 h-5 mt-3 bg-gray-200 rounded-full "></div>
					</div>
				</div>
				<div class="flex items-center justify-between w-full">
					<div className="w-full">
						<div class="h-3 bg-gray-300 rounded-full w-full mb-2"></div>
						<div class="w-full h-2 bg-gray-200 rounded-full "></div>
						<div class="w-20 h-2 my-2 bg-gray-200 rounded-full "></div>
						<div class="w-14 h-5 mt-3 bg-gray-200 rounded-full "></div>
					</div>
				</div>
				<div class="flex items-center justify-between w-full">
					<div className="w-full">
						<div class="h-3 bg-gray-300 rounded-full w-full mb-2"></div>
						<div class="w-full h-2 bg-gray-200 rounded-full "></div>
						<div class="w-20 h-2 my-2 bg-gray-200 rounded-full "></div>
						<div class="w-14 h-5 mt-3 bg-gray-200 rounded-full "></div>
					</div>
				</div>

			

				

				<span class="sr-only">Loading...</span>
			</div>
		</>
	);
};

export default NewsSkeleton;
