import React from "react";
import Layout from "../components/layout/layout";
import Section1 from "../components/homepage/sections/Section1";

const businesses = [
  {
    thumbnailImage: "/static/images/johns-bakery-thumb.png",
    displayName: "John's Bakery",
    shortDescription:
      "Located in the heart of East London. John's bakery bakes the freshest bread and pastries"
  },
  {
    thumbnailImage: "/static/images/fine-trims-thumb.png",
    displayName: "Fine Trims",
    shortDescription:
      "A barbershop like no other. We provide high-quality haircuts for all hair types. Our barbers are all qualified."
  },
  {
    thumbnailImage: "/static/images/dagenham-greens-thumb.png",
    displayName: "Dagenham Greens",
    shortDescription:
      "Vegan meals have never been easier due to the fresh fruit and vegetables home grown by Dagenham Greens"
  }
];

export default () => (
  <Layout>
    <Section1 businesses={businesses} />
    <div>Section 2</div>
    <div>Section 3</div>
    <div>Section 4</div>
  </Layout>
);
