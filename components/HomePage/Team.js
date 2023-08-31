import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { baseURL, baseUrl } from "../../url";
import { useRouter } from "next/router";
import { useCollection } from "../Context/ContextData";
import MemberScaleton from "../SharedPages/Scaleton/MemberScaleton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay,Navigation } from "swiper";

const Team = () => {
	const { teams, teamLoading } = useCollection();

	if (teamLoading) {
		return (
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
				<MemberScaleton />
				<MemberScaleton />
				<MemberScaleton />
				<MemberScaleton />
			</div>
		);
	}

	if (!teamLoading && teams?.length === 0) {
		return null;
	}

	return (
		<div className="text-darkBg bg-white  py-10 px-5 ">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-2xl lg:text-4xl font-semibold text-start mb-6">
					Our Researchers
				</h1>
			</div>


			<div className="max-w-7xl mx-auto px-5 lg:px-0   ">
				<Swiper
					slidesPerView={3}
					slidesPerGroup={1}
					loop={true}
					grabCursor={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: true,
					}}
					navigation={true}
					Pagination={true}
					breakpoints={{
						210: {
							slidesPerView: 1,
						},
						299: {
							slidesPerView: 1,
							spaceBetween: 10,
						},

						640: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					}}
					modules={[Autoplay, Navigation, Pagination]}
					className="mySwiper  mb-10 mt-6 "
				>
					{teams?.map((team) => (
						<SwiperSlide key={team._id}>
							{" "}
							<MemberCard team={team} />
						</SwiperSlide>
					))}
				</Swiper>
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
		<div className="mb-10 w-full">
			<div className="team_card  ">
				<div className="team_img team_img_slider">
					<img src={`${baseUrl}/${memberImg}`} alt={memberName} className="" />
				</div>

				<div className="team_info shadow-lg ">
					<h2 className="font-semibold">{memberName}</h2>
					<p className="text-sm lg:text-base">{memberDesi}</p>
				</div>
			</div>
		</div>
	);
};
