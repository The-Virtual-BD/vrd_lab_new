import React from "react";
import PageBanner from "../SharedPages/PageBanner";
import Team from "../HomePage/Team";
import { membersData } from "../SharedPages/staticData";
import { useRouter } from "next/router";
import { useCollection } from "../Context/ContextData";
import { baseUrl } from "../../url";
import MemberScaleton from "../SharedPages/Scaleton/MemberScaleton";

const Researchers = () => {
	return (
		<div>
			<PageBanner>Our Research Group Members</PageBanner>
			<ResearchTeam />
		</div>
	);
};

export default Researchers;

const ResearchTeam = () => {
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
		return <p>No Member Available Avaiable</p>;
	}

	const leadershipMember = teams?.filter(
		(leader) => leader.memberCategory === "Leadership"
	);
	const teamMember = teams?.filter(
		(teamMember) => teamMember.memberCategory === "Team Members"
	);
	const alumniMember = teams?.filter(
		(alumni) => alumni.memberCategory === "Alumni"
	);

	const phdMember = teams?.filter(
		(phd) => phd.memberCategory === "PhD Students"
	);
	const visitingMember = teams?.filter(
		(visiting) => visiting.memberCategory === "Visiting Scholars"
	);
	const collabaratorsMember = teams?.filter(
		(collaborators) => collaborators.memberCategory === "Collaborators"
	);

	// console.log(teams);

	return (
		<div className=" px-5  bg-white text-darkBg">
			<div className="mb-10  max-w-7xl mx-auto ">
				{leadershipMember && (
					<div className="my-10">
						<h2 className="text-start font-bold text-xl lg:text-3xl mb-2">
							Leadership
						</h2>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10 ">
							{leadershipMember?.map((team) => (
								<MemberCard key={team.id} team={team} />
							))}
						</div>
					</div>
				)}

				{teamMember && (
					<div className="mt-10 lg:mt-20">
						<h2 className="text-start font-bold text-xl lg:text-3xl mb-2">
							Team Members
						</h2>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10 ">
							{teamMember?.map((team) => (
								<MemberCard key={team.id} team={team} />
							))}
						</div>
					</div>
				)}

				{alumniMember && (
					<div className="mt-10 lg:mt-20">
						<h2 className="text-start font-bold text-xl lg:text-3xl mb-2">
							Alumni
						</h2>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10 ">
							{alumniMember?.map((team) => (
								<MemberCard key={team.id} team={team} />
							))}
						</div>
					</div>
				)}

				{phdMember && (
					<div className="mt-10 lg:mt-20">
						<h2 className="text-start font-bold text-xl lg:text-3xl mb-2">
							PhD Students
						</h2>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10 ">
							{phdMember?.map((team) => (
								<MemberCard key={team.id} team={team} />
							))}
						</div>
					</div>
				)}

				{visitingMember && (
					<div className="mt-10 lg:mt-20">
						<h2 className="text-start font-bold text-xl lg:text-3xl mb-2">
							Visiting Scholars
						</h2>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10 ">
							{visitingMember?.map((team) => (
								<MemberCard key={team.id} team={team} />
							))}
						</div>
					</div>
				)}

				{collabaratorsMember && (
					<div className="mt-10 lg:mt-20 mb-20">
						<h2 className="text-start font-bold text-xl lg:text-3xl mb-2">
							Collaborators
						</h2>
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10 ">
							{collabaratorsMember?.map((team) => (
								<MemberCard key={team.id} team={team} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

const MemberCard = ({ team }) => {
	const router = useRouter();
	const { _id, memberName, memberImg, memberDesi } = team;
	
	return (
		<div>
			<div className="team_card " >
				<div className="team_img">
					<img src={`${baseUrl}/${memberImg}`} alt={memberName} />
				</div>

				<div className="team_info">
					<h2 className="font-semibold ">{memberName}</h2>
					<p className="text-sm lg:text-base">{memberDesi}</p>
				</div>
			</div>
		</div>
	);
};
