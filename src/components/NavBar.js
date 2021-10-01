import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'; 

export class NavBar extends Component {
    /*static propTypes = {

    }*/

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link class="navbar-brand" to="/"><strong>DailyNews</strong></Link>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/business">Business</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                       
                        <li class="nav-item ">
                            <Link class="nav-link" to="/health">Health</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/science">Science</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link" to="/technology">Technology</Link>
                        </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
