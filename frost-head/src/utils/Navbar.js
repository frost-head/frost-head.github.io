import React from 'react';
import Links from './links';

function Navbar(props){
    return (<div className="w-screen flex justify-between bg-black/25 py-2 px-24 items-baseline backdrop-blur-sm fixed z-10 top-0">
        <h1 className='text-3xl font-semibold'>
            Frost Head
        </h1>
        <div className="navlinks flex-row  flex justify-evenly w-1/2">
            
            <Links text='Get to Know'/>
            <Links text='Experties'/>
            <Links text='Youtube'/>
            <Links text='Dark Mode'/>        

        </div>
    </div>);

}

export default Navbar