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
            <div className="filter-new-lead">
                <div className="filters">
                    <div className="active-filter">
                        <div>
                            <div className="status">Status</div>
                            <div>Appointment Scheduled</div>
                        </div>
                        <i class="fas fa-times"></i>
                    </div>
                    <div className="new-filter">
                        <i class="fas fa-plus"></i>
                        FILTER
                    </div>
                </div>
                <div className="new-lead">
                    <i class="fas fa-plus"></i>
                    New Lead
                </div>
            </div>
        </div>
    )
}

export default Header;