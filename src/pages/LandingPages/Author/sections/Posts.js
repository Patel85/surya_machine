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

// Surya Machines React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Surya Machines React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import screwConveyor from "assets/products/screwConveyor.jpg";
import hammerMil from "assets/products/hammerMil.jpg";
import grindingElevator from "assets/products/grindingElevator.jpg";
import hopper from "assets/products/hopper.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Check our Latest Product
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={screwConveyor}
              title="Screw Conveyor"
              description="In the realm of material handling, the screw conveyor stands out as a reliable and versatile solution for efficiently transporting bulk materials. With its simple yet effective design, the screw conveyor has revolutionized industrial processes across a wide range of industries, including agriculture, mining, manufacturing, and construction. In this blog, we will delve into the world of screw conveyors, exploring their functionality, applications, and the benefits they bring to material handling operations."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={hammerMil}
              title="Hammer Mill"
              description="In the world of industrial grinding, the hammer mill stands tall as a powerful and versatile machine. With its robust design and high-speed operation, the hammer mill plays a pivotal role in various industries, including agriculture, mining, biomass, and food processing. In this blog, we will explore the capabilities, applications, and benefits of the mighty hammer mill, highlighting its significance in industrial grinding operations."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={grindingElevator}
              title="Grinding Elevator"
              description="In the realm of industrial processes, grinding elevators play a crucial role in the efficient and effective processing of materials. These powerful machines provide a reliable solution for elevating, transporting, and grinding various substances, serving diverse industries such as mining, construction, manufacturing, and agriculture. In this blog, we will explore the essential role of grinding elevators, their benefits, and their impact on industrial operations."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={hopper}
              title="Hopper"
              description="In a world of innovation and technological advancements, hover machines have emerged as a fascinating and revolutionary solution for transportation and beyond. These futuristic devices, which harness the power of hovercraft technology, have captured the imagination of many and are paving the way for a new era of mobility. In this blog, we will delve into the captivating world of hover machines, exploring their capabilities, applications, and the exciting possibilities they hold for the future."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
