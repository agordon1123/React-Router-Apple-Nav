import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Mac from './Mac';
import Pad from './Pad';
import Phone from './Phone';
import Watch from './Watch';
import TV from './TV';
import Music from './Music';
import Support from './Support';

const Nav = () => {
    return (
       <div>
           <ul className='nav'>
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
           <Route path='/mac' component={Mac} />
           <Route path='/pad' component={Pad} />
           <Route path='/phone' component={Phone} />
           <Route path='/watch' component={Watch} />
           <Route path='/tv' component={TV} />
           <Route path='/music' component={Music} />
           <Route path='/support' component={Support} />
       </div>
    )
}

export default Nav;