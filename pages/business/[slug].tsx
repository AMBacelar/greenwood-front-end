import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import { gql } from '@apollo/client';

import imageUrl from 'utils/imageUrl';
// import { initializeApollo } from '../../lib/apolloClient';

import Layout from '../../components/Layout/layout';
import Header from '../../components/businessDetailsPage/Header';
import Contact from '../../components/businessDetailsPage/Contact';

const businesses = [
  {
    address: 'New House, Nebo Estate, Ystrad CF41 7QP',
    ariaLabel: 'Dagenham Greens',
    avatarImage: '/dagenham-greens-avatar.jpeg',
    businessImage: '/dagenham-greens.jpeg',
    contacts: {
      telephone: ['+44 4837 827283'],
      fax: ['+44 8239 398398'],
      email: ['dagenhamgreens@gmail.com'],
    },
    coordinates: '51.540819, 0.148192',
    descriptionShort:
      'Vegan meals have never been easier due to the fresh fruit and vegetables home grown by Dagenham Greens',
    descriptionLong:
      'Vegan meals has never been easier due to the fresh fruit and vegetables home grown by Dagenham greens. All fruits and vegetables are hand picked every day to ensure customers get value for their money.',
    displayName: 'Dagenham Greens',
    featuredReview: {
      rating: 4.5,
      datePosted: 1234567890,
      helpfulCount: 6500,
      authorAvatar: '/dagenham-greens-thumb.jpeg',
      reviewBody:
        "Absolutely delicious fruits and vegetables. I'm also very impressed with the customer service. The staff really do well to help you figure out what you want and for an affordable price. I'm very happy, I'll be recommending this to all my friends.",
    },
    headerImage: '/dagenham-greens-header.jpeg',
    rating: 4.7,
    slug: 'dagenham-greens',
    thumbnailImage: '/dagenham-greens-thumb.jpeg',
    verified: true,
  },
];

export const GET_BUSINESS_QUERY = gql`
  query getBusiness {
    Business {
      businessId
      bannerImage
      bannerColour
      name
      description
      gallery
    }
  }
`;

export type Contact = {
  telephone: string[];
  fax: string[];
  email: string[];
};

export type Review = {
  rating: number;
  datePosted: string;
  helpfulCount: number;
  authorAvatar: string;
  reviewBody: string;
};

interface Props {
  business: {
    address: string;
    ariaLabel: string;
    avatarImage: string;
    businessImage: string;
    contacts: Contact;
    coordinates: string;
    descriptionShort: string;
    descriptionLong: string;
    displayName: string;
    featuredReview: Review;
    headerColour: string;
    headerImage: string;
    rating: number;
    slug: string;
    thumbnailImage: string;
    verified: boolean;
  };
}

const Page: NextPage<Props, any> = (props) => {
  const { business } = props;
  return (
    <Layout
      title={business.displayName}
      description={business.descriptionShort}
      image={imageUrl(business.thumbnailImage)}
    >
      <Header
        avatarImage={imageUrl(business.avatarImage)}
        businessImage={imageUrl(business.businessImage)}
        descriptionLong={business.descriptionLong}
        displayName={business.displayName}
        headerColour={business.headerColour}
        headerImage={imageUrl(business.headerImage)}
        rating={business.rating}
        thumbnailImage={imageUrl(business.thumbnailImage)}
        verified={business.verified}
      />
      <Contact address={business.address} contacts={business.contacts} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (_context) => {
  // const apolloClient = initializeApollo();

  // const result = await apolloClient.query({
  //   query: GET_BUSINESS_QUERY,
  //   variables: {},
  // });

  // Pass data to the page via props
  return {
    props: {
      business: businesses[0],
      // initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Page;
