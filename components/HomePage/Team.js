import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { baseURL, baseUrl } from "../../url";
import { useRouter } from "next/router";
import { useCollection } from "../Context/ContextData";
import MemberScaleton from "../SharedPages/Scaleton/MemberScaleton";

const Team = () => {
	const { teams, teamLoading } = useCollection();

	if (teamLoading) {
		return (
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
				<MemberScaleton />
				<MemberScaleton />
				<MemberScaleton />
				<MemberScaleton />
			</div>
		);
	}
	if (!teamLoading && teams?.length === 0) {
		return <p>No Member Avaiable</p>;
	}

	return (
		<div className="text-darkBg bg-white  py-10 px-5 ">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-2xl lg:text-4xl font-semibold text-start mb-10">
					Our Research Group Members
				</h1>
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 mt-8 mb-16  max-w-7xl mx-auto">
				{teams
					?.map((team) => <MemberCard key={team._id} team={team} />)
					.slice(0, 4)}
			</div>

			<div className=" flex items-center justify-center">
				<Link
					href={"/researchers"}
					className=" bg-primary hover:bg-secondary text-sm lg:text-xl text-white  py-2 px-5 lg:px-8 rounded  flex items-center gap-1 text-center"
				>
					<span>VIEW ALL</span> <BsArrowRight />
				</Link>
			</div>
		</div>
	);
};

export default Team;

const MemberCard = ({ team }) => {
	const { _id, memberName, memberImg, memberDesi } = team;

	return (
		<div>
			<div className="team_card ">
				<div className="team_img">
					<img src={`${baseUrl}/${memberImg}`} alt={memberName} />
				</div>

				<div className="team_info">
					<h2 className="font-semibold">{memberName}</h2>
					<p className="text-sm lg:text-base">{memberDesi}</p>
				</div>
			</div>
		</div>
	);
};
