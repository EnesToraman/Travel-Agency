import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import { faStaylinked } from '@fortawesome/free-brands-svg-icons';
import Typography from '@mui/material/Typography';
import { IconButton, Button, Grid } from '@mui/material';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Container } from '@mui/material';
import lake from '../../images/lake.jpg';

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
                                    <div className="cities">
                                        <FontAwesomeIcon className="caret-up" size="2x" icon={faCaretUp} />
                                        <Cities />
                                    </div>
                                </Grid>
                                <Grid className="menu-element" item md={2} lg={2}>
                                    Interests
                                    <FontAwesomeIcon className="caret-down" icon={faCaretDown} />
                                    <div className="interests">
                                        <FontAwesomeIcon className="caret-up" size="2x" icon={faCaretUp} />
                                        <Interests />
                                    </div>
                                </Grid>
                                <Grid className="menu-element" item md={4} lg={4}>
                                    Context Learning
                                    <FontAwesomeIcon className="caret-down" icon={faCaretDown} />
                                    <div className="context-learning">
                                        <FontAwesomeIcon className="caret-up" size="2x" icon={faCaretUp} />
                                        <ContextLearning />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container className="menu-right" md={6} lg={6}>
                                <Grid className="menu-element" item md={2} lg={2} >
                                    <input className="search-bar" placeholder="Search for city, tour name, etc."/>
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

const Cities = () => {
    return (
        <Container>
            <Grid container>
                <Grid xs={12}>
                    Amsterdam
                </Grid>
                <Grid xs={12}>
                    İstanbul
                </Grid>
                <Grid xs={12}>
                    Ljubljana
                </Grid>
                <Grid xs={12}>
                    Barcelona
                </Grid>
                <Grid xs={12}>
                    İstanbul
                </Grid>
                <Grid xs={12}>
                    Ljubljana
                </Grid>
                <Grid xs={12}>
                    Barcelona
                </Grid>
                <Grid xs={12}>
                    İstanbul
                </Grid>
                <Grid xs={12}>
                    Ljubljana
                </Grid>
                <Grid xs={12}>
                    Barcelona
                </Grid>
            </Grid>
        </Container>
    );
}

const Interests = () => {
    return (
        <Container>
            <Grid container>
                <Grid xs={12}>
                    Full Day Private Tours
                </Grid>
                <Grid xs={12}>
                    Colosseum
                </Grid>
                <Grid xs={12}>
                    Art and Museums
                </Grid>
                <Grid xs={12}>
                    Cuisine
                </Grid>
                <Grid xs={12}>
                    History
                </Grid>
                <Grid xs={12}>
                    Orientation
                </Grid>
            </Grid>
        </Container>
    );
}

const ContextLearning = () => {
    return (
        <Container>
            <Grid container>
                <Grid xs={12}>
                    Upcoming Seminars
                </Grid>
                <Grid xs={12}>
                    Upcoming Courses
                </Grid>
                <Grid xs={12}>
                    Virtual Tours
                </Grid>
            </Grid>
        </Container>
    );
}
