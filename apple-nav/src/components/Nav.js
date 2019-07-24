import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import appleData from '../data';

import SubNav from './SubNav';


const Nav = props => {
    return (
       <div className='nav'>
           {console.log('appleData[0].subLinks', appleData[0].subLinks)}
           {console.log(appleData[0].subLinks[0].img)}
           {console.log('appleData', appleData)}

           <img src="https://img.icons8.com/ios/22/ffffff/mac-os.png" />

           {appleData.map(apple => {
                return <NavLink to={apple.name} subLinks={apple.subLinks} className='navLink'>{apple.name}</NavLink>
            })}

            <img src="https://img.icons8.com/ios/22/ffffff/search--v1.png" />
            <img src="https://img.icons8.com/ios/22/ffffff/shopping-cart.png" />

            {appleData.map(apple => {
                return <Route path={`/${apple.name}`} render={(props) => (
                    <SubNav 
                    {...props}
                    subLinks={apple.subLinks}
                    appleData={appleData}
                    />
                )} />
            })}
       </div>
    )
}

export default Nav;