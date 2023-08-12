import { createContext, useContext } from "react";
import React from 'react';
import { useQuery } from "react-query";
import { fetchNews, fetchProjects, fetchPublications, fetchTeams } from "./fetching";

export const AppContext = createContext();


const DataCollection = ({children}) => {
	const { data: projects, isLoading: projectsLoading } = useQuery("projects",fetchProjects);
	const { data: news, isLoading: newsLoading } = useQuery("news",fetchNews);
	const { data: teams, isLoading: teamLoading } = useQuery("teams",fetchTeams);
	const { data: publications, isLoading: publicationsLoading } = useQuery("publications",fetchPublications);

 

   const value = {projects,projectsLoading,news,newsLoading,teams,teamLoading,publications,publicationsLoading};
    //   console.log(projects,news)

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    
};

//Create Hooks for send data
export const useCollection = () => {
	const context = useContext(AppContext);
	return context;
};

export default DataCollection;