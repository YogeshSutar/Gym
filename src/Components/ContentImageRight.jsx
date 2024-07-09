import React, { useState } from 'react';
import '../Styles/ContentImageRight.css'
import '../Files/Contentimages.js'
import { contentimage } from '../Files/Contentimages.js'
import '../'
const ContentImageRight = () => {
    const [jsondata, setData] = useState(contentimage);
    // const [isHover, setIsHover] = useState(false)

    return (
        <>
            <h1 className='heading'> OUR STRANGHT </h1>
            {jsondata.map((jsondata, index) => {
                {console.log(index)}
                return (
                    <div className="container" style={{flexDirection: index%2 == 0 ? "row" : "row-reverse" }}>

                        {console.log("inner map")}
                        <div className="leftContent">
                            <h2 style={{ textAlign: "center", padding: "20px" }}>{jsondata.heading}</h2>
                            <p style={{ textAlign: "center", padding: "20px" }}>{jsondata.content}</p>
                        </div>


                        <div className='rightImage'>
                            <img src={jsondata.image} alt={jsondata.heading} />
                        </div>
                    </div>
                )
            })
            }
            <div className="secondContainer">
                <div className='imagediv'>
                    <img src="Images/arnold.jpg" alt="Arnold Photo" width={"100%"} />
                </div>
                <div className="rightContent">
                    <h1>Great Boday-Builder</h1>
                    <p>Fitness Gym is where I go to work out. It is the best gym of all for me. The equipment is new and well organized to help you train most effectively, The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym.<br />Fitness Gym is where I go to work out. It is the best gym of all for me. The equipment is new and well organized to help you train most effectively, The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym</p>
                </div>
            </div>
        </>
    )
}

export default ContentImageRight