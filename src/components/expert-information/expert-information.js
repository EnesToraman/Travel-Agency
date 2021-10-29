import { Grid, Container } from "@mui/material";
import expertphoto1 from '../../images/expertphoto1.png';
import expertphoto2 from '../../images/expertphoto2.png';
import expertphoto3 from '../../images/expertphoto3.png';
import expertphoto4 from '../../images/expertphoto4.png';
import expertphoto5 from '../../images/expertphoto5.png';
import expertphoto6 from '../../images/expertphoto6.png';

import './expert-information.css'

const ExpertInformation = () => {
    return (
        <Container>
            <Grid container>
                <Grid lg={4} className="information-area">
                    <Grid className="information-title" lg={12}>
                        Learn with Top Experts All Over the Globe
                    </Grid>
                    <Grid className="information-list" lg={12}>
                        <ul>
                            <li>Uncover hidden histories with PhD and MA level experts</li>
                            <li>Craft the perfect day with a private guide</li>
                            <li>Enjoy supplemental online learning with live-taught courses</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid container lg={8} className="information-area-images">
                    <Grid xs={3} lg={3} className="expert-photo">
                        <img
                            src={expertphoto1}
                            alt="view"
                        />
                    </Grid>
                    <Grid xs={3} lg={3} className="expert-photo">
                        <img
                            src={expertphoto2}
                            alt="view"
                        />
                    </Grid>
                    <Grid xs={3} lg={3} className="expert-photo">
                        <img
                            src={expertphoto3}
                            alt="view"
                        />
                    </Grid>
                    <Grid xs={3} lg={3} className="expert-photo">
                        <img
                            src={expertphoto4}
                            alt="view"
                        />
                    </Grid>
                    <Grid xs={3} lg={3} className="expert-photo">
                        <img
                            src={expertphoto5}
                            alt="view"
                        />
                    </Grid>
                    <Grid xs={3} lg={3} className="expert-photo">
                        <img
                            src={expertphoto6}
                            alt="view"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ExpertInformation;