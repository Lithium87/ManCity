import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#98c5e9',
                    boxShadow: 'none',
                    padding: '10px, 0',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <Toolbar styles={{display: 'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                            LOGO
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;