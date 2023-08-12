import React from "react";

const PageBanner = ({children}) => {
	return (
		<div className=" bg-creamBg  h-[30vh] lg:h-[40vh] flex items-center justify-center text-darkBg">
			<h1 className="text-3xl lg:text-6xl text-center font-bold font-family text-greenText  mt-14">
				{children}
			</h1>
		</div>
	);
};

export default PageBanner;
