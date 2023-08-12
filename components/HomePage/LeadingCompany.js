import React from "react";

const LeadingCompany = () => {
	return (
		<div className="bg-creamBg text-darkBg">
			<div className="flex flex-col lg:flex-row items-center gap-10 py-10">
				<img src="/assets/cover-2.png" alt="hear-cover" className=" w-full lg:w-1/2 rounded-r-md" />

				<div className=" w-full lg:w-1/2 p-5">
					<h1 className="text-2xl lg:text-3xl font-bold mb-5">
						We Are Trusted By World&apos;s Leading Companies
					</h1>
					<div className="flex flex-col lg:flex-row items-center justify-between gap-5">
						<div className="w-full lg:w-1/2 ">
                            <h3 className="text-xl font-semibold my-2 mb-3">Innovation By Design Awards</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

						<div  className="w-full lg:w-1/2">
                            <h3 className="text-xl font-semibold my-2 mb-3">Innovation By Design Awards</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeadingCompany;
