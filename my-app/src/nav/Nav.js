import React, {Component} from 'react';

const Nav = ({handleDisplayMode}) => {
    return (
        <nav>
            <span>Blue Orange</span>
            <span onClick={() => { handleDisplayMode('info') }}>About</span>
            <span onClick={() => { handleDisplayMode('list') }}>List</span>
        </nav>
    )
}


export default Nav