import { Container, Grid } from "@material-ui/core";

import "./footer.css"

const Footer = () => {
    return (
        <div className="footer-area">
            <Container>
                <Grid container>
                    <Grid lg={2}>
                        <Grid className="footer-col-title">
                            COMPANY
                        </Grid>
                        <Grid>
                            <li>Our Story</li>
                            <li>Our Guides</li>
                            <li>Working with Sneety</li>
                            <li>Press</li>
                            <li>View All Cities</li>
                        </Grid>
                    </Grid>
                    <Grid lg={2}>
                        <Grid className="footer-col-title">
                            PROGRAMS
                        </Grid>
                        <Grid>
                            <li>Sustainable Tourism</li>
                            <li>Refer a Friend for $50</li>
                        </Grid>
                    </Grid>
                    <Grid lg={2}>
                        <Grid className="footer-col-title">
                            RESOURCES
                        </Grid>
                        <Grid>
                            <li>In Sneety Blog</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                            <li>Gift Cards</li>
                            <li>Agent Login</li>
                            <li>Expert Portal</li>
                        </Grid>
                    </Grid>
                    <Grid lg={2} ></Grid>
                    <Grid lg={4} className="newsletter-area">
                        <Grid className="footer-col-title">
                            NEWSLETTER
                        </Grid>
                        <Grid className="newsletter-information">
                            Occasional travel insights and ideas delivered to your inbox.
                        </Grid>
                        <Grid className="email-box-grid">
                            <input className="email-box" placeholder="YOUR EMAIL" />
                            <button>SIGN UP</button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Footer;
