/*
=========================================================
* Surya Machines React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Surya Machines React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Footer() {
  return (
    <MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <MKTypography variant="h6" textTransform="uppercase" mb={{ xs: 2, lg: 3 }}>
              Surya Machine
            </MKTypography>
            <Stack
              component="ul"
              direction="column"
              flexWrap="wrap"
              spacing={1}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography variant="button" fontWeight="bold" opacity={0.8}>
                  Email :
                </MKTypography>
                <MKTypography variant="button" fontWeight="regular" opacity={0.8}>
                  {` suryamachines01@gmail.com`}
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography variant="button" fontWeight="bold" opacity={0.8}>
                  Contact :
                </MKTypography>
                <MKTypography variant="button" fontWeight="regular" opacity={0.8}>
                  {` +91 8306653237`}
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography variant="button" fontWeight="bold" opacity={0.8}>
                  Address :
                </MKTypography>
                <MKTypography variant="button" fontWeight="regular" opacity={0.8}>
                  {` 183 + 184/2, GIDC Industrial Area, Raman Gamdi, Por, Vadodara, Gujarat 391243`}
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography variant="button" fontWeight="bold" opacity={0.8}>
                  Website :
                </MKTypography>
                <MKTypography variant="button" fontWeight="regular" opacity={0.8}>
                  {` www.suryamachines.in`}
                </MKTypography>
              </MKBox>
            </Stack>
            <MKTypography variant="button" opacity={0.8}>
              Copyright © <script>document.write(new Date().getFullYear())</script>2023
              www.suryamachines.in.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} ml="auto" textAlign={{ xs: "center", lg: "left" }}>
            <MKTypography variant="body1" fontWeight="bold" mb={6} sx={{ fontSize: "1.125rem" }}>
              {`Thank you for visiting our website and exploring our range of innovative solutions for
              material handling. At Aurya Machines, we believe in delivering excellence in every
              aspect of our business. As we strive to revolutionize the industry, we are reminded of
              the quote, 'The reward for getting on the stage is fame. The price of fame is you
              can't get off the stage.`}
            </MKTypography>
            <MKTypography
              component={Link}
              href="#dribbble"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-dribbble" />
            </MKTypography>
            <MKTypography
              component={Link}
              href="#twitter"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-twitter" />
            </MKTypography>
            <MKTypography
              component={Link}
              href="#pinterest"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
              mr={3}
            >
              <i className="fab fa-pinterest" />
            </MKTypography>
            <MKTypography
              component={Link}
              href="#github"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              opacity={0.5}
            >
              <i className="fab fa-github" />
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Footer;
