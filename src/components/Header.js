import React from 'react';

const Header = () => {
    return (
        <div className = 'Header'>
            <button className = 'header_menu_button'>
                <i className="fa-solid fa-bars fa-4x"></i>
            </button>
            <div className='div-logo'>
                <h1 className = 'logo_title'>The Saddlebag</h1>
                <img className = 'logo' src = '/assets/chocoboyellooo.png' alt = ''/>
            </div>
            
        </div>
    );
}

export default Header;