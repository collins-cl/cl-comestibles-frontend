import React from 'react'
import "../Picks/Picks.css"
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'
import image4 from '../Assets/image4.jpg'
import image5 from '../Assets/image9.jpg'

function Picks() {
  return (
    <div className='picks'>
        <div className="pickscontainer">
            <div className="picks-1">
                <img src={image1} alt="" />
            </div>
            <div className="picks-1">
                <img src={image2} alt="" />
            </div>
            <div className="picks-1">
                <img src={image3} alt="" />
            </div>
            <div className="picks-1">
                <img src={image4} alt="" />
            </div>
            <div className="picks-1">
                <img src={image5} alt="" />
            </div>
        </div>

        <div className="picks-text">
            OUR PICKS FOR YOU
        </div>
    </div>
  )
}

export default Picks