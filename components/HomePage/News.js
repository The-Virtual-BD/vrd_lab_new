import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { newsData } from "../SharedPages/staticData";
import { useCollection } from "../Context/ContextData";
import { useRouter } from "next/router";
import moment from "moment";
import NewsSkeleton from "../SharedPages/Scaleton/NewsSkeleton";

const News = () => {
	const { news, newsLoading } = useCollection();
	const router = useRouter();
	// console.log(news);

	const sortNews = news?.reverse();

	if (newsLoading) {
		return (
			<div className=" max-w-7xl mx-auto">
				<div role="status" class="space-y-2.5 animate-pulse max-w-lg">
					<div class="flex items-center w-full space-x-2">
						<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
					</div>
					<div class="flex items-center w-full space-x-2 max-w-[480px]">
						<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
					</div>
					<div class="flex items-center w-full space-x-2 max-w-[400px]">
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
						<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
					</div>
					<div class="flex items-center w-full space-x-2 max-w-[480px]">
						<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
					</div>
					<div class="flex items-center w-full space-x-2 max-w-[440px]">
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
						<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
					</div>
					<div class="flex items-center w-full space-x-2 max-w-[360px]">
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
						<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
						<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
					</div>
					<span class="sr-only">Loading...</span>
				</div>
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
		<div className="bg-white text-darkBg ">
			<div className="max-w-7xl mx-auto py-10 px-5 lg:px-0">
				<h2 className="text-3xl lg:text-4xl font-semibold text-start mb-10">
					{" "}
					News & Events
				</h2>

				<div className="flex flex-col lg:flex-row items-center gap-5">
					<div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-5  ">
						{sortNews
							.map((data) => (
								<div
									key={data._id}
									className=" w-full lg:w-80 h-full lg:h-[250px] overflow-hidden"
								>
									<h2
										className="text-primary hover:text-secondary text-xl lg:text-2xl font-semibold mb-3 cursor-pointer"
										onClick={() => handleNewsView(data?._id)}
									>
										{data.newsTitle.slice(0, 50)}
									</h2>

									<p className="text-sm lg:text-base mb-1">
										{data.newsShDesc.slice(0, 150)}
									</p>

									<p className="font-semibold">
										<span>Posted on </span>{" "}
										{moment(data?.createdAt).format("MMM D, YYYY")}
									</p>

									<button
										onClick={() => handleNewsView(data?._id)}
										class="inline-flex items-center font-bold  py-2 gap-1  text-center text-primary hover:text-secondary text-sm lg:text-base"
									>
										Read more <BsArrowRight className="text-xl" />
									</button>
								</div>
							))
							.slice(0, 3)}
					</div>

					<div className="w-full lg:w-1/4 bg-primary text-white p-5  flex flex-col justify-center rounded-sm h-[250px]">
						<h2 className="text-xl lg:text-2xl font-bold">
							Best Paper Award Winner Year 2022
						</h2>
						<p className="text-base lg:text-lg py-3">
							From Human-Centric Intelligent Systems, Springer Journal
						</p>
						<Link
							href="https://www.springer.com/journal/44230/updates/24020244"
							class="inline-flex items-center font-bold  text-base py-2 gap-1  "
						>
							Read more <BsArrowRight className="text-xl" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
