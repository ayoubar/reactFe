import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Navbar extends Component {


    static defaultProps = {
        title:'default title',
        logo:"default logo",
    }

    static propTypes = {
        title:PropTypes.string.isRequired,
    }
   
    render() {
        const { title, logo } = this.props
        return (
          <header>
                    <nav className="navbar navbar-expand-lg navbar-dark primary-color" style={{ backgroundColor: 'blue'}}>

                    <a className="navbar-brand" href="#">
                
                     {title}

                    <img src={logo} height="30" alt=""  className="ml-3"/>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="basicExampleNav">

                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                        </ul>
                    
                        <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                        </form>
                    </div>

                    </nav>
          </header>
        )
    }
}



export default Navbar;