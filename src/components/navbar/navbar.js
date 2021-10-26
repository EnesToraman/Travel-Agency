import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import { faStaylinked } from '@fortawesome/free-brands-svg-icons';
import Typography from '@mui/material/Typography';
import { IconButton, Button, Grid } from '@mui/material';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container } from '@mui/material';
import mountains from '../../images/mountains.jpg'
import lake from '../../images/lake.jpg'
import budapest from '../../images/budapest.jpg'
import { Card } from '@mui/material';

import './navbar.css'

const Navbar = () => {

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <ToolBar>
                <IconButton disableRipple className="icon-button">
                </IconButton>
                <Typography variant="h6">
                    Sneety
                </Typography>
            </ToolBar>
        );
    };

    return (
        <div className="background-image-div">
            <div>
                <img
                    className="background-image"
                    src={lake}
                    alt="view"
                />
            </div>
            <Container>
                <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                    <ToolBar className="toolbar">
                        <Grid container spacing={1} className="grid">
                            <Grid container columnSpacing={1} md={6} lg={6}>
                                <Grid className="menu-element" item md={1} lg={1} >
                                    <FontAwesomeIcon className="logo" size="2x" icon={faStaylinked} />
                                </Grid>
                                <Grid className="menu-element" item md={1} lg={1} >
                                    <Typography variant="h6" className="company-name">
                                        Sneety
                                    </Typography>
                                </Grid>
                                <Grid className="menu-element" item md={2} lg={1} >
                                </Grid>
                                <Grid className="menu-element" item md={2} lg={2} >
                                    Cities
                                    <FontAwesomeIcon className="caret-down" icon={faCaretDown} />
                                </Grid>
                                <Grid className="menu-element" item md={2} lg={2}>
                                    Interests
                                    <FontAwesomeIcon className="caret-down" icon={faCaretDown} />
                                </Grid>
                                <Grid className="menu-element" item md={4} lg={4}>
                                    Context Learning
                                    <FontAwesomeIcon className="caret-down" icon={faCaretDown} />
                                </Grid>
                            </Grid>
                            <Grid container className="menu-right" md={6} lg={6}>
                                <Grid className="menu-element" item md={2} lg={2} >
                                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                                    Search
                                </Grid>
                                <Grid className="menu-element" item md={2} lg={2}>
                                    Log In
                                </Grid>
                                <Grid className="menu-element" item md={2} lg={2}>
                                    Sign Up
                                </Grid>
                            </Grid>
                        </Grid>
                    </ToolBar>
                </AppBar>
            </Container>
            <Grid className="motto" lg={12}>
                <Typography variant="h2" style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
                    The World is Waiting. <br />
                    Travel with Sneety.
                </Typography>
            </Grid>
        </div>
    );
}

export default Navbar;
