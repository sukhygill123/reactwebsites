import React from "react";
import car from './images/images.jpeg'
const About = ()=>{
    return(
        <>
            <div className="text-center" >
                <h1 className="text-uppercase">I am About Page</h1>
            </div>
            
            <div className="align-items-md-start" >
                <img src={car}/>
            </div>
           
        </>
    )
}
export default About; 