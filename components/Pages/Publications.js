import React from "react";
import PageBanner from "../SharedPages/PageBanner";
import { publicationsData } from "../SharedPages/staticData";
import { BsArrowRight, BsDot } from "react-icons/bs";
import Link from "next/link";
import { useCollection } from "../Context/ContextData";
import NewsSkeleton from "../SharedPages/Scaleton/NewsSkeleton";

const Publications = () => {
	return (
		<div>
			<PageBanner>Our Publications</PageBanner>
			<JournalArticale />
			<Articale />
		</div>
	);
};

export default Publications;

const Articale = () => {
	const { publications, publicationsLoading } = useCollection();
	// console.log(publications);

	const findConfArticale = publications?.filter(
		(confArt) => confArt.publiCategory === "conference"
	);

	if (publicationsLoading) {
		return (
			<div className=" max-w-7xl mx-auto">
				<NewsSkeleton />
			</div>
		);
	}

	if (!publicationsLoading && findConfArticale?.length === 0) {
		return null;
	}

	return (
		<div className="bg-white text-darkBg  px-5 lg:px-0 max-w-7xl mx-auto">
			<h2 className="text-start font-bold text-xl lg:text-2xl ">
				{" "}
				Conference Articles
			</h2>
			<div>
				{findConfArticale?.map((data) => (
					<div key={data?._id} className="py-2 flex items-start gap-1">
						<div>
							<BsDot className="text-xl font-bold" />
						</div>
						<div>
							<div
								className="text-labelclr"
								dangerouslySetInnerHTML={{ __html: data?.publicationsDesc }}
							/>

							<Link
								href={data?.publicationsLink}
								class="inline-flex items-center font-bold  pb-2 gap-1  text-center text-primary hover:underline text-sm lg:text-base"
							>
								Read more <BsArrowRight className="text-xl" />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const JournalArticale = () => {
	const { publications, publicationsLoading } = useCollection();
	// console.log(publications);

	const findJourArticale = publications?.filter(
		(confArt) => confArt.publiCategory === "journal"
	);
	const findBooksArticale = publications?.filter(
		(confArt) => confArt.publiCategory === "book"
	);
	const findBooksChapArticale = publications?.filter(
		(confArt) => confArt.publiCategory === "bookC"
	);

	/* if (!publicationsLoading && findJourArticale?.length === 0) {
		return null;
	} */

	return (
		<div className="bg-white text-darkBg  px-5 lg:px-0 max-w-7xl mx-auto mt-5">

			{findBooksArticale?.length !== 0 && (
				<div>
					<h2 className="text-start font-bold text-xl lg:text-2xl">
						{" "}
						Books
					</h2>
					<div>
						{findBooksArticale?.map((data) => (
							<PublicationCard key={data._id} data={data} />
						))}
					</div>
				</div>
			)}

			{findJourArticale?.length !== 0 && (
				<div>
					<h2 className="text-start font-bold text-xl lg:text-2xl">
						{" "}
						Journal Articles
					</h2>
					<div>
						{findJourArticale?.map((data) => (
							<PublicationCard key={data._id} data={data} />
						))}
					</div>
				</div>
			)}

			{findBooksChapArticale?.length !== 0 && (
				<div>
					<h2 className="text-start font-bold text-xl lg:text-2xl">
						{" "}
						Book Chapters
					</h2>
					<div>
						{findBooksChapArticale?.map((data) => (
							<PublicationCard key={data._id} data={data} />
						))}
					</div>
				</div>
			)}

			{/* {findJourArticale?.length !== 0 && (
				<div>
					<h2 className="text-start font-bold text-xl lg:text-2xl">
						{" "}
						Journal Article
					</h2>
					<div>
						{findJourArticale?.map((data) => (
							<PublicationCard key={data._id} data={data} />
						))}
					</div>
				</div>
			)} */}

			
		</div>
	);
};

const PublicationCard = ({ data }) => {
	return (
		<div key={data?._id} className="py-2 flex items-start gap-3">
			<div>
				<BsDot className="text-xl font-bold" />
			</div>
			<div>
				<div
					className="text-labelclr"
					dangerouslySetInnerHTML={{ __html: data?.publicationsDesc }}
				/>

				<Link
					href={data?.publicationsLink}
					class="inline-flex items-center font-bold  pb-2 gap-1  text-center text-primary hover:underline text-sm lg:text-base"
				>
					Read more <BsArrowRight className="text-xl" />
				</Link>
			</div>
		</div>
	);
};
