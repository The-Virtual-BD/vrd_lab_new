import React from "react";
import PageBanner from "../SharedPages/PageBanner";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useCollection } from "../Context/ContextData";
import { baseUrl } from "../../url";
import { useRouter } from "next/router";
import CardScaleton from "../SharedPages/Scaleton/CardScaleton";

const Projects = () => {
	return (
		<div>
			<PageBanner>Projects</PageBanner>
			<div className="bg-white text-darkBg my-10">
				<CurrentProjects />
			</div>
		</div>
	);
};

export default Projects;

const CurrentProjects = () => {
	const { projects, projectsLoading } = useCollection();

	if (projectsLoading) {
		return (
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
			<CardScaleton />
			<CardScaleton />
			<CardScaleton />
			</div>
		);
	}

	const currentProject = projects?.filter(
		(cPro) => cPro.proCategory === "current"
	);
	const pastProject = projects?.filter((cPro) => cPro.proCategory === "past");

	if (!projectsLoading && currentProject?.length === 0) {
		return <p>No Current Projects Avaiable</p>;
	}

	if (!projectsLoading && pastProject?.length === 0) {
		return <p>No Past Projects Avaiable</p>;
	}

	//proCategory current past
	// console.log(projects);

	return (
		<div className="max-w-7xl mx-auto px-5 lg:px-0">
			{currentProject && (
				<div className="">
					<h2 className="text-start font-bold text-2xl lg:text-4xl mb-4">
						{" "}
						Current Projects
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center ">
						{currentProject.map((pro) => (
							<ProjectCard key={pro._id} pro={pro} />
						))}
					</div>
				</div>
			)}

			{pastProject && (
				<div className="mt-10">
					<h2 className="text-start font-bold text-2xl lg:text-4xl mb-4">
						{" "}
						Past Projects
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-center ">
						{pastProject.map((pro) => (
							<ProjectCard key={pro._id} pro={pro} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

const ProjectCard = ({ pro }) => {
	const router = useRouter();
	const { _id, proName, proCategory, proShDesc, proImg, proDesc } = pro;

	const handleProjectView = (id) => {
		router.push(`/projects/${id}`);
	};

	return (
		<>
			<div class="bg-fontclr  rounded-lg shadow-sm hover:shadow-lg w-full  h-full min-h-[440px] lg:min-h-[470px]  relative">
				<img
					className="rounded-t-lg h-[250px] w-full"
					src={`${baseUrl}/${proImg}`}
					alt={proName}
				/>

				<div class="p-3   h-full">
					<h5
						class="mb-2 cursor-pointer text-lg lg:text-2xl font-bold tracking-tight text-darkBg hover:text-primary "
						onClick={() => handleProjectView(_id)}
					>
						{proName.slice(0, 60)}
					</h5>

					<p class="mb-3 font-normal text-gray-700 text-sm lg:text-base">
						{proShDesc.slice(0, 150)}
					</p>

					<button
						onClick={() => handleProjectView(_id)}
						class="flex items-center px-3 lg:px-5 text-sm lg:text-base py-2 gap-1  font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary absolute bottom-3 "
					>
						Read more <BsArrowRight className="text-xl" />
					</button>
				</div>
			</div>
		</>
	);
};
