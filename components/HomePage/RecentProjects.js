import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useCollection } from "../Context/ContextData";
import { baseUrl } from "../../url";
import { useRouter } from "next/router";
import CardScaleton from "../SharedPages/Scaleton/CardScaleton";

const RecentProjects = () => {
	const { projects, projectsLoading } = useCollection();
	const router = useRouter();

	if (projectsLoading) {
		return (
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
				<CardScaleton />
				<CardScaleton />
				<CardScaleton />
			</div>
		);
	}

	if (!projectsLoading && projects?.length === 0) {
		return <p>No Past Projects Avaiable</p>;
	}

	const sorProject = [...projects]?.reverse();

	const handleProjectView = (id) => {
		router.push(`/projects/${id}`);
	};

	return (
		<div className="py-10 bg-creamBg text-darkBg mt-10">
			<div className="my-5 mb-10 max-w-7xl mx-auto px-5 lg:px-0">
				<h2 className="text-3xl lg:text-4xl font-semibold text-start">
					Our Recent Projects
				</h2>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center max-w-7xl mx-auto px-5 lg:px-0 overflow-hidden">
				{sorProject
					.map((pub) => (
						<div
							key={pub?._id}
							class=" bg-fontclr  rounded-lg shadow-sm hover:shadow-lg w-full  h-full min-h-[440px] lg:min-h-[470px]  relative"
						>
							<img
								className="rounded-t-lg h-[250px] w-full"
								src={`${baseUrl}/${pub?.proImg}`}
								alt={pub?.proName}
							/>

							<div class="p-3  h-full">
								<h5
									class="mb-2 cursor-pointer text-lg lg:text-2xl font-bold tracking-tight text-darkBg hover:text-primary "
									onClick={() => handleProjectView(_id)}
								>
									{pub?.proName.slice(0, 60)}
								</h5>

								<p class="mb-3 font-normal text-gray-700 text-sm lg:text-base">
									{pub?.proShDesc.slice(0, 150)}
								</p>

								<button
									onClick={() => handleProjectView(pub?._id)}
									class="flex items-center px-3 lg:px-5 text-sm lg:text-base py-2 gap-1  font-medium text-center text-white rounded-lg bg-primary hover:bg-secondary absolute bottom-3"
								>
									Read more <BsArrowRight className="text-xl" />
								</button>
							</div>
						</div>
					))
					.slice(0, 3)}
			</div>

			<div className=" flex items-center justify-center mt-10">
				<Link
					href={"/projects"}
					className=" bg-primary hover:bg-secondary text-sm lg:text-xl text-white  py-2 px-5 lg:px-8 rounded  flex items-center gap-1 text-center"
				>
					<span>VIEW ALL</span> <BsArrowRight />
				</Link>
			</div>

			
		</div>
	);
};

export default RecentProjects;
