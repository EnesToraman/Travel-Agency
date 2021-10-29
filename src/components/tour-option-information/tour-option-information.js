import { Grid, Container } from "@mui/material";
import tour1 from '../../images/tour1.jpg'
import tour2 from '../../images/tour2.jpg'

import './tour-option-information.css'

const TourOptionInformation = () => {
    return (
        <div className="tour-option-information">
            <Container>
                <Grid container>
                    <Grid container lg={6}>
                        <Grid lg={5} className="tour-option-image">
                            <img
                                src={tour1}
                                alt="view"
                            />
                        </Grid>
                        <Grid lg={5} className="tour-option-image">
                            <img
                                src={tour2}
                                alt="view"
                            />
                        </Grid>
                    </Grid>
                    <Grid lg={6} className="tour-information-area">
                        <Grid lg={12} className="tour-information-title">
                            Guided Tours to Fit Any Time or Budget
                        </Grid>
                        <Grid lg={12} className="tour-information-list">
                            <ul>
                                <li><b>Private tours</b> - limited exclusively to travelers in your party</li>
                                <li><b>Small group tours</b> - shared experiences with other curious travelers</li>
                                <li><b>Custom tours</b> - for something truly bespoke</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default TourOptionInformation;