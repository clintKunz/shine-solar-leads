import React from 'react';

function Drawer() {
    return(
        <section className="drawer">
            <div className="drawer-title">
                <h1>Luminary<span style={{color: '#17c4f1'}}>CXM</span></h1>
                <i class="fas fa-bars"></i>
            </div>
            <div className="drawer-profile">
                <div className="pic-name-status">
                    <img src="https://lh4.googleusercontent.com/-7XZ1oglkwk4/AAAAAAAAAAI/AAAAAAAAAYE/XP49iTIBL3M/photo.jpg" alt="profile picture"/>
                    <div className="name-status">
                        <h5>Clint Kunz</h5>
                        <div>Available</div>
                    </div>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <div className="drawer-navigation">
                <div>
                    <i class="fas fa-home"></i>
                    Home
                </div>
                <div>
                    <i class="fas fa-bullseye"></i> 
                    My Pipe
                </div>
                <div>
                    <i class="fas fa-user-friends"></i>
                    Bucket
                </div>
                <div>
                    <i class="fas fa-list-ul"></i>
                    All Leads
                </div>
                <div>
                    <i class="fas fa-search"></i>
                    Monitoring
                </div>
                <div>
                    <i class="fas fa-chart-line"></i>
                    Analytics
                </div>
            </div>
            <div className="drawer-campaign-admin-settings">
                <div>
                    <i class="fas fa-map-signs"></i>
                    CAMPAIGNS
                </div>
                <i class="fas fa-angle-down"></i>
            </div>
            <div className="drawer-campaign-admin-settings">
                <div>
                    <i class="fas fa-users-cog"></i>
                    ADMIN
                </div>
                <i class="fas fa-angle-down"></i>
            </div>
            <div className="drawer-campaign-admin-settings">
                <div>
                    <i class="fas fa-cog"></i>
                    SETTINGS
                </div>
            </div>
        </section>
    )
}

export default Drawer;