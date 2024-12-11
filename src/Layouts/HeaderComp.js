import React from 'react'
import './external.css'
import '../assests/logo2.jpg';
import commonData from "../shared/constant/ConstantData";

const HeaderComp = () => {
    return (
    <div className='headerbox'>
        <div className='logo'>
            <img src="/assests/logo2.jpg" alt='logo'/>
            <h2><strong><i>SS JEWELLERS</i></strong></h2>     
        </div>
    </div>
    )
}

export default HeaderComp
