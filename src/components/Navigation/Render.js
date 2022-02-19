import React, { useState } from 'react';
import Navigation from "../Navigation/Navigation";
import About from "../About/About";
import Contact from "../Contact/Contact";
import AllProjects from "../ProjectArea/Project";

export default function PortfolioState() {
    const [currentPage, setCurrentPage] = useState('About');


    const pageRender = () => {

        if (currentPage === 'About') {
            return <About></About>
        }
        if (currentPage === 'AllProjects') {
            return <AllProjects></AllProjects>
        }
        if (currentPage === 'Contact') {
            return <Contact></Contact>
        }
    };

    const pageChange = (page) => setCurrentPage(page);

    return (
        <div>
           
        <Navigation currentPage={currentPage} pageChange={pageChange}></Navigation>
    
        {pageRender()}
        </div>
    )

}