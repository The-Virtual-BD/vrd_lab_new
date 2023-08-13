import React from "react";
import PageBanner from "../SharedPages/PageBanner";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useCollection } from "../Context/ContextData";
import moment from "moment/moment";
import { useRouter } from "next/router";
import NewsSkeleton from "../SharedPages/Scaleton/NewsSkeleton";

const News = () => {
	return (
		<div className="bg-white text-darkBg">
			<PageBanner>News & Events</PageBanner>
			<NewsPage />
		</div>
	);
};

export default News;

const NewsPage = () => {
	const { news, newsLoading } = useCollection();
	const router = useRouter();
	console.log(news);

	const sortNews = news?.reverse();

	if (newsLoading) {
		return (
			<div className=" max-w-7xl mx-auto">
				<NewsSkeleton />
			</div>
		);
	}

	if (!newsLoading && news?.length === 0) {
		return <p>No News Avaiable</p>;
	}

	const handleNewsView = (id) => {
		router.push(`/news/${id}`);
	};

	return (
		<div className="max-w-7xl mx-auto px-5 lg:px-0 my-10">
			<div className=" flex flex-col gap-5">
				{sortNews?.map((data) => (
					<div key={data._id} className=" w-full">
						<h2
							className="text-darkBg hover:text-primary text-xl lg:text-2xl font-semibold mb-1 cursor-pointer"
							onClick={() => handleNewsView(data?._id)}
						>
							{data?.newsTitle}
						</h2>
						<p className="text-sm lg:text-base">{data?.newsShDesc}</p>
						<p className="font-semibold">
							<span>Posted on </span>{" "}
							{moment(data?.createdAt).format("MMM D, YYYY")}
						</p>

						<button
							onClick={() => handleNewsView(data?._id)}
							class="inline-flex items-center font-bold  py-1 gap-1  text-center text-primary hover:underline text-sm lg:text-base"
						>
							Read more <BsArrowRight className="text-xl" />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
