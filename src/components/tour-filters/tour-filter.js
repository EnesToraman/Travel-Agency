import { useState } from 'react';

import { Grid, Container, Input } from "@mui/material";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './tour-filter.css'

const TourFilter = () => {

    const [participants, setParticipants] = useState(2);

    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState(new Date());

    const incrementParticipants = () => {
        if (participants < 12) {
            setParticipants(participants + 1);
        }
    }

    const decrementParticipants = () => {
        if (participants > 1) {
            setParticipants(participants - 1);
        }
    }

    const handleStartDate = (newStartDate) => {
        setStartDate(newStartDate);
    }

    const handleEndDate = (newEndDate) => {
        setEndDate(newEndDate);
    }

    return (
        <Container>
            <Grid container className="filter-bar">
                <Grid container className="filter-element" xs={12} md={2}>
                    <Grid className="filter-element-picker" xs={12}>
                        <CitySelection />
                    </Grid>
                    <Grid className="filter-element-label" xs={12}>
                        CITY
                    </Grid>
                </Grid>
                <Grid container className="filter-element" xs={12} md={2}>
                    <Grid className="filter-element-picker" xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} className="date-picker">
                            <Stack spacing={3} className="date-picker">
                                <DesktopDatePicker
                                    className="date-picker"
                                    disablePast
                                    inputFormat="dd/MM/yyyy"
                                    value={startDate}
                                    onChange={handleStartDate}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </Grid>
                    <Grid className="filter-element-label" xs={12}>
                        START DATE
                    </Grid>
                </Grid>
                <Grid container className="filter-element" xs={12} md={2}>
                    <Grid className="filter-element-picker" xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} className="date-picker">
                            <Stack spacing={3} className="date-picker">
                                <DesktopDatePicker
                                    className="date-picker"
                                    disablePast
                                    inputFormat="dd/MM/yyyy"
                                    value={endDate}
                                    onChange={handleEndDate}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                    </Grid>
                    <Grid className="filter-element-label" xs={12}>
                        END DATE
                    </Grid>
                </Grid>
                <Grid container className="filter-element" xs={12} md={2}>
                    <Grid className="filter-element-picker" xs={12}>
                        <button>
                            <FontAwesomeIcon onClick={decrementParticipants} className="participant-icon" icon={faMinusCircle} />
                        </button>
                        <span>{participants}</span>
                        <button>
                            <FontAwesomeIcon onClick={incrementParticipants} className="participant-icon" icon={faPlusCircle} />
                        </button>
                    </Grid>
                    <Grid className="filter-element-label" xs={12}>
                        PARTICIPANTS
                    </Grid>
                </Grid>
                <Grid container className="filter-element" xs={12} md={2}>
                    <FontAwesomeIcon className="logo" size="2x" icon={faCaretRight} />
                    FIND TOURS
                </Grid>
            </Grid>
        </Container>
    );
}

export default TourFilter;

const CitySelection = () => {

    const [city, setCity] = useState("");

    const handleSetCity = (selection) => {
        setCity(selection.target.value);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl className="city-picker-form">
                <Select 
                    value={city}
                    onChange={handleSetCity}
                    displayEmpty
                >
                    <MenuItem value="">Amsterdam</MenuItem>
                    <MenuItem value={10}>İstanbul</MenuItem>
                    <MenuItem value={20}>Ljubljana</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}