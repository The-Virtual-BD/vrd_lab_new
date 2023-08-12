import React from "react";
import Banner from "./Banner";
import RecentPublication from "./RecentPublication";
import MainPublisher from "./MainPublisher";
import LeadingCompany from "./LeadingCompany";
import News from "./News";
import Team from "./Team";
import Head from "next/head";
import RecentProjects from "./RecentProjects";

const Home = () => {
	return (
		<>
		<Head>
			<title>Digital Cardiology Research Group </title>
		</Head>
		<div>
			
			<Banner />
			<MainPublisher />
			<LeadingCompany />
			<News />
			<RecentProjects />
			{/* <RecentPublication /> */}
			<Team />
		</div>
		</>
	);
};

export default Home;
