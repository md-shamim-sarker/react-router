import React from 'react';
import {NavLink} from 'react-router-dom';

const style = {
    display: "flex",
    justifyContent: "center",
    gap: '1rem',
    fontSize: '2rem'
};

const Header = () => {
    return (
        <div style={style}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
        </div>
    );
};

export default Header;