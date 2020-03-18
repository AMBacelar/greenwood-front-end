import React from "react";
import Layout from "../components/layout/layout";
import Section1 from "../components/homepage/sections/Section1";
import Section2 from "../components/homepage/sections/Section2";

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
const featuredBlog = {
  bgImage: "/static/images/blogPostImage.png",
  dateCreated: 12345,
  url: "/a",
  title: "Fresh Stock on Aisle 5",
  blogText: `How many black owned supermarkets have you seen at the end of your road? Not many? Well say hello to Shade's Hypermarket! A brand new supermarket chain bringing you fresh delicious groceries for a family affordable price. \nCEO and founder, Shade Okumaya has spent the last 3 years researching, planning and developing her new business. "There were a lot of sleepless nights. I had to build everything from scratch. I've always taken a keen interest in the food industry market, and realised there weren't many black owned markets in my city. Seeing this gap in the market gave be the push to pursue". \nShade's Hypermarket is based in Tottenham Hale, right in the heart of the borough. With a fresh....`
};

export default () => (
  <Layout>
    <Section1 businesses={businesses} />
    <Section2 featuredBlog={featuredBlog} />
    <div>Section 3</div>
    <div>Section 4</div>
  </Layout>
);
