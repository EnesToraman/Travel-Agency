import { Grid, Container } from "@mui/material";
import { Paper, Button } from '@material-ui/core'
import Carousel from "react-multi-carousel";
import crotia from "../../images/crotia.jpg"
import greekIslands from "../../images/greek-islands.jpg"
import mexicoCity from "../../images/mexico-city.jpg"
import newOrleans from "../../images/new-orleans.jpg"
import rome from "../../images/rome.jpg"
import newYork from "../../images/new-york.jpg"
import philadelphia from "../../images/philadelphia.jpg"
import washington from "../../images/washington.jpg"

import "react-multi-carousel/lib/styles.css";
import './carousel.css'

const CityCarousel = () => {

    return (
        <div className="carousel-area">
            <Container>
                <Grid container>
                    <Grid lg={6} className="carousel-area-title">
                        Travel With Sneety Across the Globe
                    </Grid>
                    <Grid lg={6} className="carousel-area-information">
                        <ul>
                            <li>Over 120 cities across 6 continents</li>
                            <li>The world's cultural and historical capitals</li>
                            <li>Skip the line and off-hours access to popular sites</li>
                            <li>Variety of tour durations, from half-day to 7-day plus</li>
                        </ul>
                    </Grid>
                    <Grid lg={12} className="carousel">
                        <Carousel responsive={responsive}>
                            {
                                items.map((item, index) => {
                                    return (
                                        <div>
                                            <Item item={item} key={index} />
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default CityCarousel;

function Item(props) {
    return (
        <div>
            <Grid lg={11} className="carousel-image">
                <img
                    src={props.item.image}
                    alt="view"
                />
            </Grid>
            <Grid lg={11} className="carousel-title">
                {props.item.name}
            </Grid>
        </div>
    )
}

const responsive = {
    LargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const items = [
    {
        name: "CROTIA",
        image: crotia,
    },
    {
        name: "MEXICO CITY",
        image: mexicoCity,
    },
    {
        name: "GREEK ISLANDS",
        image: greekIslands,
    },
    {
        name: "ROME",
        image: rome,
    },
    {
        name: "NEW ORLEANS",
        image: newOrleans,
    },
    {
        name: "NEW YORK",
        image: newYork,
    },
    {
        name: "PHILADELPHIA",
        image: philadelphia,
    },
    {
        name: "WASHINGTON",
        image: washington,
    },
]