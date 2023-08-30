import React from "react";

const PageBanner = ({children}) => {
	return (
		<div className=" bg-creamBg  h-[20vh] lg:h-[40vh] flex items-center justify-center text-darkBg">
			<h1 className="text-2xl lg:text-5xl text-center font-bold font-family text-greenText  mt-10 lg:mt-14">
				{children}
			</h1>
		</div>
	);
};

export default PageBanner;
