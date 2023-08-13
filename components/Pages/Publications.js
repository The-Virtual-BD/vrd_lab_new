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
			<Articale />
			<JournalArticale />
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
		return null
	}

	return (
		<div className="bg-white text-darkBg pt-5 lg:pt-10 pb-2 px-5 lg:px-0 max-w-7xl mx-auto">
			<h2 className="text-start font-bold text-3xl mb-4">
				{" "}
				Conference Article
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

	if (!publicationsLoading && findJourArticale?.length === 0) {
		return null
	}
	return (
		<div className="bg-white text-darkBg pt-3 pb-5 px-5 lg:px-0 max-w-7xl mx-auto">
			<h2 className="text-start font-bold text-3xl mb-4"> Journal Article</h2>

			<div>
				{findJourArticale?.map((data) => (
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
				))}
			</div>
		</div>
	);
};
