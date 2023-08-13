import React, { useEffect, useState } from "react";
import PageBanner from "../SharedPages/PageBanner";
import { useRouter } from "next/router";
import { baseUrl } from "../../url";
import moment from "moment";

const NewsDetails = () => {
	return (
		<div>
			<PageBanner>News Details</PageBanner>
			<Details />
		</div>
	);
};

export default NewsDetails;

const Details = () => {
	const router = useRouter();
	const { id } = router.query;
	const [sinWork, setSinWork] = useState({});

	useEffect(() => {
		fetch(`${baseUrl}/news/${id}`)
			.then((res) => res.json())
			.then((data) => setSinWork(data));
	}, [id]);

	console.log(sinWork);

	if (!sinWork) {
		return null;
	}

	return (
		<div className="bg-white text-darkBg">
			<div className="max-w-7xl mx-auto px-5 lg:px-0 py-10">
				<h1 className="text-xl lg:text-3xl font-bold text-primary">
					{sinWork?.newsTitle}
				</h1>

				<p className=" text-sm lg:text-base mt-0 mb-2">
					<span>Posted On </span>{" "}
					{moment(sinWork?.createdAt).format("MMM D, YYYY")}
				</p>

				<h3 className=" text-base lg:text-lg mb-3">{sinWork?.newsShDesc}</h3>

				<div>
					<iframe
						title="video-player"
						// width="720"
						height="440"
						src={sinWork?.newsvdoLink}
						frameBorder="0"
						allowFullScreen
						className="w-full rounded-md "
					></iframe>
				</div>

				<div
					className="text-labelclr text-sm lg:text-base mt-4"
					dangerouslySetInnerHTML={{ __html: sinWork?.newsDesc }}
				/>
			</div>
		</div>
	);
};
