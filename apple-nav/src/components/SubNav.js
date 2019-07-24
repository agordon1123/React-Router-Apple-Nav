import React from 'react';

const SubNav = (props) => {
    console.log('props', props.appleData)

    return (        
        <div className='sub-nav-component-wrapper'>
            {props.appleData.map(apple => {
                console.log(apple.subLinks)
                apple.subLinks.map(product => {
                    console.log('product.img', product.img)
                    return <img src={product.img} />,
                    <p>{product.name}</p>
                })
                })
            }
            <p>I'm in the subnav!</p>
        </div>
    )
}

export default SubNav;