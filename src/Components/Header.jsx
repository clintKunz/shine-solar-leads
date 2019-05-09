import React from 'react';

function Header() {
    return(
        <div className="header">
            <div className="title-search">
                <div>
                    <i class="fas fa-list-ul"></i>
                    All Leads
                </div>
                <div className="search-field">
                    <i class="fas fa-search"></i>
                    <input 
                        type="text"
                        placeholder="Search Leads"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;