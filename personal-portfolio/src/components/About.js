//About Component
import React from "react";
import Jay from "../assets/images/Jay.png"


const About = () => {
    return (
        <div>
            <avatar src={Jay}></avatar>
            <p>


                <b>Hi! I am Jonathan.
                    <br></br>
                    I am a University of Texas graduate with a Bachelors of Science in Nutrition. Hook 'em!
                    <br></br>
                    I am a current coding student with the University of Arizona, learning full-stack development!
                    <br></br>
                    I have worked with ADP for the past five years learning everything there is to know about payroll
                    and taxes!
                </b>


            </p>
        </div>
    );
};

export default About;