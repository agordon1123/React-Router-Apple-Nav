// import React from 'react';
// import appleData from '../data';

// const SubNav = () => {

//     return (        
//         <div className='sub-nav-component-wrapper'>
//             {appleData.map(apple => {
//                 apple.subLinks.map(sub => {
//                     return <img src={sub.img} />;
//                 });
//             })}
//         </div>
//     )
// }

// export default SubNav;

import React from 'react';

const SubNav = props => {

    return (        
        <div className='sub-nav-component-wrapper'>
            {props.subLinks.map(apple => (
                <div>
                    <img src={apple.img} alt={apple.name} />
                    <p>{apple.name}</p>
                </div>
            ))}
        </div>
    )
}

export default SubNav;