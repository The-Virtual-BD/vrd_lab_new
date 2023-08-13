import React, { useEffect, useState } from "react";
import PageBanner from "../SharedPages/PageBanner";
import { useRouter } from "next/router";
import { baseUrl } from "../../url";

const ProjectDetails = () => {
	return (
		<div>
			<PageBanner>Project Details</PageBanner>
			<Details />
		</div>
	);
};

export default ProjectDetails;

const Details = () => {
	const router = useRouter();
	const { id } = router.query;
	const [sinWork, setSinWork] = useState({});

	useEffect(() => {
		fetch(`${baseUrl}/projects/${id}`)
			.then((res) => res.json())
			.then((data) => setSinWork(data));
	}, [id]);

	// console.log(sinWork);

	if (!sinWork) {
		return <p>Loading...</p>;
	}
	// const { _id, proName, proCategory, proShDesc, proImg, proDesc } = sinWork;

	return (
		<div className="bg-white text-darkBg">
			<div className="max-w-7xl mx-auto px-5 lg:px-0 py-10">
				<h1 className="text-xl lg:text-3xl font-bold text-primary">
					{sinWork?.proName}
				</h1>
				<h3 className=" text-sm lg:text-lg mb-3">{sinWork?.proShDesc}</h3>

				<div className="my-3">
					<img
						src={`${baseUrl}/${sinWork?.proImg}`}
						alt={sinWork?.proName}
						className="w-full h-full lg:h-[500px] rounded-md"
					/>
				</div>

				<div
					className="text-labelclr text-sm lg:text-base"
					dangerouslySetInnerHTML={{ __html: sinWork?.proDesc }}
				/>
			</div>
		</div>
	);
};
