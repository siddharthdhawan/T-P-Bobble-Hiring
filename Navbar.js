import React, {Component} from 'react'

class NavBar extends Component {

    render() {
        return (
            <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a class="navbar-brand col-md-10 col-lg-10 mr-0 px-3" text-align = "center">XYZ Ltd.</a>
                {/* <button class="navbar-toggler position-absolute d-md-none collapsed" data-toggle="collapse" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                
            </nav>
        );
    }
}

export default NavBar;