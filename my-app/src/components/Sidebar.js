import React from "react";
import css from './css/Sidebar.module.css';


function Sidebar() {
    return (
        <div className={css.sidebar}>
            <a href="#." target="_blank" alt="Link to my photos">MyPhotos</a>
            <a href="#." target="_blank" alt="Link to my illustrations">My Illustrations</a>
            <a href="#." target="_blank" alt="Link to my paintings">My Paintings</a>
        </div>
    )
}

export default Sidebar;