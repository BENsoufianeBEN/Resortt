import React, {Component} from 'react';
import logo4 from '../../images/logo4.PNG';
//import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default class navBar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">
                    <img
                        style={{
                        width: "70%"
                    }}
                        src={logo4}
                        alt="reservation"/>
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link to="/" className="nav-link"  style={{ FontFamily: "Verdana, Geneva, Tahoma, sans-serif"}}>Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/rooms" className="nav-link">Room</Link>
                        </li>
                        <li class="nav-item">
                        <a href="http://127.0.0.1:8000/register" className="nav-link" >Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        // <nav className="navbar">     
        //<div className="nav-center">         
        //<div className="nav-header">            
        // <Link to="/">                 
        //<img style={{ width:"70%" }} src={logo3} alt="reservation"/>            
        // </Link>
        // <button type="button" className="nav-btn" onClick={this.handleToggle}>                 
        //<FaAlignRight className="nav-icon"/>             
        //</button>         
        //</div>         
        //<ul className={this.state.isOpen ? "nav-links show-nav":"nav-links"}>             
        //<li>                 
        //<Link to="/">Home</Link>
        //</li>             
        //<li>                 
        //<Link to="/rooms">Room</Link>
        //</li>         
        //</ul>     
        //</div> 
        //</nav>

        )
    }

}
