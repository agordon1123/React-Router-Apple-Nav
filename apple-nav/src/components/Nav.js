import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import appleData from '../data';

import SubNav from './SubNav';


const Nav = () => {
    return (
       <div className='nav'>
           {console.log(appleData[0].subLinks)}
           {console.log(appleData[0].subLinks[0].img)}

           <img src="https://img.icons8.com/ios/22/ffffff/mac-os.png" />

           {appleData.map(apple => {
                return <NavLink to={apple.name} className='navLink'>{apple.name}</NavLink>
            })}

            <img src="https://img.icons8.com/ios/22/ffffff/search--v1.png" />
            <img src="https://img.icons8.com/ios/22/ffffff/shopping-cart.png" />

            <SubNav />

            <Route to={appleData.name} />

           {/* <ul className='nav'>
               <NavLink to='/'>
                   <img src="https://img.icons8.com/ios/22/000000/mac-os.png" />
               </NavLink>
               <NavLink to='/mac' className='navLink'>Mac</NavLink>
               <NavLink to='/pad' className='navLink'>iPad</NavLink>
               <NavLink to='/phone' className='navLink'>iPhone</NavLink>
               <NavLink to='watch' className='navLink'>Watch</NavLink>
               <NavLink to='/tv' className='navLink'>TV</NavLink>
               <NavLink to='/music' className='navLink'>Music</NavLink>
               <NavLink to='/support' className='navLink'>Support</NavLink>
               <img src="https://img.icons8.com/ios/22/000000/search--v1.png" />
               <img src="https://img.icons8.com/ios/22/000000/shopping-cart.png" />
           </ul>
           <Route path='/' />
           <Route path='/mac' exact render={props => <SubNav {...props} appleData={appleData} />} />
           <Route path='/pad' />
           <Route path='/phone' />
           <Route path='/watch' />
           <Route path='/tv' />
           <Route path='/music' />
           <Route path='/support' /> */}
       </div>
    )
}

export default Nav;