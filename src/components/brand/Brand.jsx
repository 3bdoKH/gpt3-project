import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';
const Brand = () => {
    return (
        <div className='gpt3__brands'>
            <div className="brands">
                <img src={google} alt="" />
                <img src={slack} alt="" />
                <img src={atlassian} alt="" />
                <img src={dropbox} alt="" />
                <img src={shopify} alt="" />
            </div>
        </div>
    )
}

export default Brand
