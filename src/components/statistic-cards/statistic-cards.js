import { useState } from 'react';
import { Container, Grid } from '@mui/material';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import './statistic-cards.css'

const StatisticCards = () => {

    const [isSensorActive, setIsSensorActive] = useState(true);

    const [focus, setFocus] = useState(false)

    const handleSensorActivity = () => {
        if (isSensorActive) {
            setIsSensorActive(false);
        }
    }

    return (
        <Container>
            <Grid container className="statistic-cards">
                <Grid container lg={3} className="statistic-cards-col">
                    <Grid xs={12} lg={12} className="statistic-cards-col-number">
                        <CountUp
                            start={focus ? 0 : null}
                            end={120}
                            duration={2}
                            redraw={true}
                            suffix= " +"
                        >
                            {({ countUpRef }) => (
                                <VisibilitySensor onChange={(isVisible) => {
                                    if (isVisible) { setFocus(true); }
                                }}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </Grid>
                    <Grid xs={12} lg={12} className="statistic-cards-col-title">
                        CITIES
                    </Grid>
                </Grid>
                <Grid container lg={3} className="statistic-cards-col">
                    <Grid xs={12} lg={12} className="statistic-cards-col-number">
                        <CountUp
                            start={focus ? 0 : null}
                            end={1500}
                            duration={2}
                            separator="."
                            redraw={true}
                            suffix= " +"
                        >
                            {({ countUpRef }) => (
                                <VisibilitySensor onChange={(isVisible) => {
                                    if (isVisible) { setFocus(true); }
                                }}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </Grid>
                    <Grid xs={12} lg={12} className="statistic-cards-col-title">
                        TOURS
                    </Grid>
                </Grid>
                <Grid container lg={3} className="statistic-cards-col">
                    <Grid xs={12} lg={12} className="statistic-cards-col-number">
                        <CountUp
                            start={focus ? 0 : null}
                            end={10000}
                            duration={2}
                            separator="."
                            redraw={true}
                            suffix= " +"
                        >
                            {({ countUpRef }) => (
                                <VisibilitySensor onChange={(isVisible) => {
                                    if (isVisible) { setFocus(true); }
                                }}>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </Grid>
                    <Grid xs={12} lg={12} className="statistic-cards-col-title">
                        TRAVELERS
                    </Grid>
                </Grid>
                
            </Grid>
        </Container>
    );
}

export default StatisticCards;