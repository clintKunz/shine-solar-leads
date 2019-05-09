import React from 'react';

function Drawer() {
    return(
        <section className="drawer">
            <div className="drawer-title">
                <h1>LuminaryCXM</h1>
                <i class="fas fa-bars" style={{color: '#7B8C99'}}></i>
            </div>
            <div className="drawer-profile">
                <div className="pic-name-status">
                    <img src="https://lh4.googleusercontent.com/-7XZ1oglkwk4/AAAAAAAAAAI/AAAAAAAAAYE/XP49iTIBL3M/photo.jpg" alt="profile picture"/>
                    <div className="name-status">
                        <h5>Clint Kunz</h5>
                        <div>Available</div>
                    </div>
                </div>
                <i class="fas fa-ellipsis-h" style={{color: '#7B8C99'}}></i>
            </div>
        </section>
    )
}

export default Drawer;