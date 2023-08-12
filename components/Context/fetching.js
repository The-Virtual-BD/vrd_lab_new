import { baseUrl } from "../../url";

//Fetch Products
export const fetchProjects = async () => {
	const res = await fetch(`${baseUrl}/projects/all`);
	const data = await res.json();
	return data?.data;
};

//Fetch News
export const fetchNews = async () => {
	const res = await fetch(`${baseUrl}/news/all`);
	const data = await res.json();
	return data?.data;
};

//Fetch Teams
export const fetchTeams = async () => {
	const res = await fetch(`${baseUrl}/team/all`);
	const data = await res.json();
	return data?.data;
};

//Fetch Work
export const fetchPublications = async () => {
	const res = await fetch(`${baseUrl}/publications/all`);
	const data = await res.json();
	return data?.data;
};
