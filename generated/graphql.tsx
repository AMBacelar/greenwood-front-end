import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};









export type _AddAddressContactPayload = {
  __typename?: '_AddAddressContactPayload';
  /** Field for the Contact node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the Address node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Address>;
};

export type _AddBusinessCategoriesPayload = {
  __typename?: '_AddBusinessCategoriesPayload';
  /** Field for the Business node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Business>;
  /** Field for the BusinessCategory node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<BusinessCategory>;
};

export type _AddBusinessCategoryBusinessesPayload = {
  __typename?: '_AddBusinessCategoryBusinessesPayload';
  /** Field for the Business node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Business>;
  /** Field for the BusinessCategory node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<BusinessCategory>;
};

export type _AddBusinessContactPayload = {
  __typename?: '_AddBusinessContactPayload';
  /** Field for the Business node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Business>;
  /** Field for the Contact node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Contact>;
};

export type _AddBusinessManagedByPayload = {
  __typename?: '_AddBusinessManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Business node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Business>;
};

export type _AddBusinessReferencesPayload = {
  __typename?: '_AddBusinessReferencesPayload';
  /** Field for the ContentMeta node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ContentMeta>;
  /** Field for the Business node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Business>;
};

export type _AddBusinessReviewsPayload = {
  __typename?: '_AddBusinessReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Business node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Business>;
};

export type _AddContactAddressPayload = {
  __typename?: '_AddContactAddressPayload';
  /** Field for the Contact node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the Address node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Address>;
};

export type _AddContactSocialsPayload = {
  __typename?: '_AddContactSocialsPayload';
  /** Field for the Contact node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the SocialLink node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SocialLink>;
};

export type _AddContentGuestsPayload = {
  __typename?: '_AddContentGuestsPayload';
  /** Field for the User node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Content node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Content>;
};

export type _AddContentHostsPayload = {
  __typename?: '_AddContentHostsPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Content node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Content>;
};

export type _AddContentMetaContentPayload = {
  __typename?: '_AddContentMetaContentPayload';
  /** Field for the Content node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the ContentMeta node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<ContentMeta>;
};

export type _AddContentMetaPayload = {
  __typename?: '_AddContentMetaPayload';
  /** Field for the Content node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the ContentMeta node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<ContentMeta>;
};

export type _AddContentReviewsPayload = {
  __typename?: '_AddContentReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Content node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Content>;
};

export type _AddContentSeriesPayload = {
  __typename?: '_AddContentSeriesPayload';
  /** Field for the Content node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _AddEventGuestsPayload = {
  __typename?: '_AddEventGuestsPayload';
  /** Field for the User node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Event node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Event>;
};

export type _AddEventManagedByPayload = {
  __typename?: '_AddEventManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Event node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Event>;
};

export type _AddEventReviewsPayload = {
  __typename?: '_AddEventReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Event node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Event>;
};

export type _AddEventSeriesPayload = {
  __typename?: '_AddEventSeriesPayload';
  /** Field for the Event node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _AddEventVenuePayload = {
  __typename?: '_AddEventVenuePayload';
  /** Field for the Event node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Venue node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _AddressFilter = {
  addressId?: Maybe<Scalars['ID']>;
  addressId_contains?: Maybe<Scalars['ID']>;
  addressId_ends_with?: Maybe<Scalars['ID']>;
  addressId_in?: Maybe<Array<Scalars['ID']>>;
  addressId_not?: Maybe<Scalars['ID']>;
  addressId_not_contains?: Maybe<Scalars['ID']>;
  addressId_not_ends_with?: Maybe<Scalars['ID']>;
  addressId_not_in?: Maybe<Array<Scalars['ID']>>;
  addressId_not_starts_with?: Maybe<Scalars['ID']>;
  addressId_starts_with?: Maybe<Scalars['ID']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine1_contains?: Maybe<Scalars['String']>;
  addressLine1_ends_with?: Maybe<Scalars['String']>;
  addressLine1_in?: Maybe<Array<Scalars['String']>>;
  addressLine1_not?: Maybe<Scalars['String']>;
  addressLine1_not_contains?: Maybe<Scalars['String']>;
  addressLine1_not_ends_with?: Maybe<Scalars['String']>;
  addressLine1_not_in?: Maybe<Array<Scalars['String']>>;
  addressLine1_not_starts_with?: Maybe<Scalars['String']>;
  addressLine1_starts_with?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  addressLine2_contains?: Maybe<Scalars['String']>;
  addressLine2_ends_with?: Maybe<Scalars['String']>;
  addressLine2_in?: Maybe<Array<Scalars['String']>>;
  addressLine2_not?: Maybe<Scalars['String']>;
  addressLine2_not_contains?: Maybe<Scalars['String']>;
  addressLine2_not_ends_with?: Maybe<Scalars['String']>;
  addressLine2_not_in?: Maybe<Array<Scalars['String']>>;
  addressLine2_not_starts_with?: Maybe<Scalars['String']>;
  addressLine2_starts_with?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<_AddressFilter>>;
  contact?: Maybe<_ContactFilter>;
  contact_in?: Maybe<Array<_ContactFilter>>;
  contact_not?: Maybe<_ContactFilter>;
  contact_not_in?: Maybe<Array<_ContactFilter>>;
  location?: Maybe<_Neo4jPointInput>;
  location_distance?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_gt?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_gte?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_lt?: Maybe<_Neo4jPointDistanceFilter>;
  location_distance_lte?: Maybe<_Neo4jPointDistanceFilter>;
  location_not?: Maybe<_Neo4jPointInput>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_AddressFilter>>;
  postCode?: Maybe<Scalars['String']>;
  postCode_contains?: Maybe<Scalars['String']>;
  postCode_ends_with?: Maybe<Scalars['String']>;
  postCode_in?: Maybe<Array<Scalars['String']>>;
  postCode_not?: Maybe<Scalars['String']>;
  postCode_not_contains?: Maybe<Scalars['String']>;
  postCode_not_ends_with?: Maybe<Scalars['String']>;
  postCode_not_in?: Maybe<Array<Scalars['String']>>;
  postCode_not_starts_with?: Maybe<Scalars['String']>;
  postCode_starts_with?: Maybe<Scalars['String']>;
  showAddress?: Maybe<Scalars['Boolean']>;
  showAddress_not?: Maybe<Scalars['Boolean']>;
};

export type _AddressInput = {
  addressId: Scalars['ID'];
};

export enum _AddressOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  AddressIdAsc = 'addressId_asc',
  AddressIdDesc = 'addressId_desc',
  AddressLine1Asc = 'addressLine1_asc',
  AddressLine1Desc = 'addressLine1_desc',
  AddressLine2Asc = 'addressLine2_asc',
  AddressLine2Desc = 'addressLine2_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  PostCodeAsc = 'postCode_asc',
  PostCodeDesc = 'postCode_desc',
  ShowAddressAsc = 'showAddress_asc',
  ShowAddressDesc = 'showAddress_desc'
}

export type _AddReviewUserPayload = {
  __typename?: '_AddReviewUserPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Review>;
};

export type _AddSeriesContentPayload = {
  __typename?: '_AddSeriesContentPayload';
  /** Field for the Content node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _AddSeriesEventsPayload = {
  __typename?: '_AddSeriesEventsPayload';
  /** Field for the Event node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _AddSeriesManagedByPayload = {
  __typename?: '_AddSeriesManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Series node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _AddSeriesReviewsPayload = {
  __typename?: '_AddSeriesReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Series node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _AddSocialLinkContactPayload = {
  __typename?: '_AddSocialLinkContactPayload';
  /** Field for the Contact node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the SocialLink node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SocialLink>;
};

export type _AddUserContactPayload = {
  __typename?: '_AddUserContactPayload';
  /** Field for the User node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Contact node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Contact>;
};

export type _AddUserReferencesPayload = {
  __typename?: '_AddUserReferencesPayload';
  /** Field for the ContentMeta node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ContentMeta>;
  /** Field for the User node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _AddUserReviewsPayload = {
  __typename?: '_AddUserReviewsPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Review>;
};

export type _AddVenueContactPayload = {
  __typename?: '_AddVenueContactPayload';
  /** Field for the Venue node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Venue>;
  /** Field for the Contact node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Contact>;
};

export type _AddVenueEventsPayload = {
  __typename?: '_AddVenueEventsPayload';
  /** Field for the Event node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Venue node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _AddVenueManagedByPayload = {
  __typename?: '_AddVenueManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Venue node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _AddVenueReviewsPayload = {
  __typename?: '_AddVenueReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Venue node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _ArticleCategoryFilter = {
  AND?: Maybe<Array<_ArticleCategoryFilter>>;
  key?: Maybe<Scalars['String']>;
  key_contains?: Maybe<Scalars['String']>;
  key_ends_with?: Maybe<Scalars['String']>;
  key_in?: Maybe<Array<Scalars['String']>>;
  key_not?: Maybe<Scalars['String']>;
  key_not_contains?: Maybe<Scalars['String']>;
  key_not_ends_with?: Maybe<Scalars['String']>;
  key_not_in?: Maybe<Array<Scalars['String']>>;
  key_not_starts_with?: Maybe<Scalars['String']>;
  key_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_ArticleCategoryFilter>>;
  value?: Maybe<Scalars['String']>;
  value_contains?: Maybe<Scalars['String']>;
  value_ends_with?: Maybe<Scalars['String']>;
  value_in?: Maybe<Array<Scalars['String']>>;
  value_not?: Maybe<Scalars['String']>;
  value_not_contains?: Maybe<Scalars['String']>;
  value_not_ends_with?: Maybe<Scalars['String']>;
  value_not_in?: Maybe<Array<Scalars['String']>>;
  value_not_starts_with?: Maybe<Scalars['String']>;
  value_starts_with?: Maybe<Scalars['String']>;
};

export type _ArticleCategoryInput = {
  key: Scalars['String'];
};

export enum _ArticleCategoryOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  KeyAsc = 'key_asc',
  KeyDesc = 'key_desc',
  ValueAsc = 'value_asc',
  ValueDesc = 'value_desc'
}

export type _ArticleFilter = {
  AND?: Maybe<Array<_ArticleFilter>>;
  articleId?: Maybe<Scalars['ID']>;
  articleId_contains?: Maybe<Scalars['ID']>;
  articleId_ends_with?: Maybe<Scalars['ID']>;
  articleId_in?: Maybe<Array<Scalars['ID']>>;
  articleId_not?: Maybe<Scalars['ID']>;
  articleId_not_contains?: Maybe<Scalars['ID']>;
  articleId_not_ends_with?: Maybe<Scalars['ID']>;
  articleId_not_in?: Maybe<Array<Scalars['ID']>>;
  articleId_not_starts_with?: Maybe<Scalars['ID']>;
  articleId_starts_with?: Maybe<Scalars['ID']>;
  articleImage?: Maybe<Scalars['String']>;
  articleImage_contains?: Maybe<Scalars['String']>;
  articleImage_ends_with?: Maybe<Scalars['String']>;
  articleImage_in?: Maybe<Array<Scalars['String']>>;
  articleImage_not?: Maybe<Scalars['String']>;
  articleImage_not_contains?: Maybe<Scalars['String']>;
  articleImage_not_ends_with?: Maybe<Scalars['String']>;
  articleImage_not_in?: Maybe<Array<Scalars['String']>>;
  articleImage_not_starts_with?: Maybe<Scalars['String']>;
  articleImage_starts_with?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  body_contains?: Maybe<Scalars['String']>;
  body_ends_with?: Maybe<Scalars['String']>;
  body_in?: Maybe<Array<Scalars['String']>>;
  body_not?: Maybe<Scalars['String']>;
  body_not_contains?: Maybe<Scalars['String']>;
  body_not_ends_with?: Maybe<Scalars['String']>;
  body_not_in?: Maybe<Array<Scalars['String']>>;
  body_not_starts_with?: Maybe<Scalars['String']>;
  body_starts_with?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Float']>;
  dateCreated_gt?: Maybe<Scalars['Float']>;
  dateCreated_gte?: Maybe<Scalars['Float']>;
  dateCreated_in?: Maybe<Array<Scalars['Float']>>;
  dateCreated_lt?: Maybe<Scalars['Float']>;
  dateCreated_lte?: Maybe<Scalars['Float']>;
  dateCreated_not?: Maybe<Scalars['Float']>;
  dateCreated_not_in?: Maybe<Array<Scalars['Float']>>;
  OR?: Maybe<Array<_ArticleFilter>>;
  summary?: Maybe<Scalars['String']>;
  summary_contains?: Maybe<Scalars['String']>;
  summary_ends_with?: Maybe<Scalars['String']>;
  summary_in?: Maybe<Array<Scalars['String']>>;
  summary_not?: Maybe<Scalars['String']>;
  summary_not_contains?: Maybe<Scalars['String']>;
  summary_not_ends_with?: Maybe<Scalars['String']>;
  summary_not_in?: Maybe<Array<Scalars['String']>>;
  summary_not_starts_with?: Maybe<Scalars['String']>;
  summary_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  url_contains?: Maybe<Scalars['String']>;
  url_ends_with?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Scalars['String']>>;
  url_not?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_not_ends_with?: Maybe<Scalars['String']>;
  url_not_in?: Maybe<Array<Scalars['String']>>;
  url_not_starts_with?: Maybe<Scalars['String']>;
  url_starts_with?: Maybe<Scalars['String']>;
};

export type _ArticleInput = {
  articleId: Scalars['ID'];
};

export enum _ArticleOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  ArticleIdAsc = 'articleId_asc',
  ArticleIdDesc = 'articleId_desc',
  ArticleImageAsc = 'articleImage_asc',
  ArticleImageDesc = 'articleImage_desc',
  BodyAsc = 'body_asc',
  BodyDesc = 'body_desc',
  DateCreatedAsc = 'dateCreated_asc',
  DateCreatedDesc = 'dateCreated_desc',
  SummaryAsc = 'summary_asc',
  SummaryDesc = 'summary_desc',
  TitleAsc = 'title_asc',
  TitleDesc = 'title_desc',
  UrlAsc = 'url_asc',
  UrlDesc = 'url_desc'
}

export type _BusinessCategoryFilter = {
  AND?: Maybe<Array<_BusinessCategoryFilter>>;
  businessCategoryId?: Maybe<Scalars['ID']>;
  businessCategoryId_contains?: Maybe<Scalars['ID']>;
  businessCategoryId_ends_with?: Maybe<Scalars['ID']>;
  businessCategoryId_in?: Maybe<Array<Scalars['ID']>>;
  businessCategoryId_not?: Maybe<Scalars['ID']>;
  businessCategoryId_not_contains?: Maybe<Scalars['ID']>;
  businessCategoryId_not_ends_with?: Maybe<Scalars['ID']>;
  businessCategoryId_not_in?: Maybe<Array<Scalars['ID']>>;
  businessCategoryId_not_starts_with?: Maybe<Scalars['ID']>;
  businessCategoryId_starts_with?: Maybe<Scalars['ID']>;
  businesses?: Maybe<_BusinessFilter>;
  businesses_every?: Maybe<_BusinessFilter>;
  businesses_in?: Maybe<Array<_BusinessFilter>>;
  businesses_none?: Maybe<_BusinessFilter>;
  businesses_not?: Maybe<_BusinessFilter>;
  businesses_not_in?: Maybe<Array<_BusinessFilter>>;
  businesses_single?: Maybe<_BusinessFilter>;
  businesses_some?: Maybe<_BusinessFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_BusinessCategoryFilter>>;
};

export type _BusinessCategoryInput = {
  businessCategoryId: Scalars['ID'];
};

export enum _BusinessCategoryOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  BusinessCategoryIdAsc = 'businessCategoryId_asc',
  BusinessCategoryIdDesc = 'businessCategoryId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _BusinessFilter = {
  AND?: Maybe<Array<_BusinessFilter>>;
  bannerColour?: Maybe<Scalars['String']>;
  bannerColour_contains?: Maybe<Scalars['String']>;
  bannerColour_ends_with?: Maybe<Scalars['String']>;
  bannerColour_in?: Maybe<Array<Scalars['String']>>;
  bannerColour_not?: Maybe<Scalars['String']>;
  bannerColour_not_contains?: Maybe<Scalars['String']>;
  bannerColour_not_ends_with?: Maybe<Scalars['String']>;
  bannerColour_not_in?: Maybe<Array<Scalars['String']>>;
  bannerColour_not_starts_with?: Maybe<Scalars['String']>;
  bannerColour_starts_with?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Scalars['String']>;
  bannerImage_contains?: Maybe<Scalars['String']>;
  bannerImage_ends_with?: Maybe<Scalars['String']>;
  bannerImage_in?: Maybe<Array<Scalars['String']>>;
  bannerImage_not?: Maybe<Scalars['String']>;
  bannerImage_not_contains?: Maybe<Scalars['String']>;
  bannerImage_not_ends_with?: Maybe<Scalars['String']>;
  bannerImage_not_in?: Maybe<Array<Scalars['String']>>;
  bannerImage_not_starts_with?: Maybe<Scalars['String']>;
  bannerImage_starts_with?: Maybe<Scalars['String']>;
  businessId?: Maybe<Scalars['ID']>;
  businessId_contains?: Maybe<Scalars['ID']>;
  businessId_ends_with?: Maybe<Scalars['ID']>;
  businessId_in?: Maybe<Array<Scalars['ID']>>;
  businessId_not?: Maybe<Scalars['ID']>;
  businessId_not_contains?: Maybe<Scalars['ID']>;
  businessId_not_ends_with?: Maybe<Scalars['ID']>;
  businessId_not_in?: Maybe<Array<Scalars['ID']>>;
  businessId_not_starts_with?: Maybe<Scalars['ID']>;
  businessId_starts_with?: Maybe<Scalars['ID']>;
  categories?: Maybe<_BusinessCategoryFilter>;
  categories_every?: Maybe<_BusinessCategoryFilter>;
  categories_in?: Maybe<Array<_BusinessCategoryFilter>>;
  categories_none?: Maybe<_BusinessCategoryFilter>;
  categories_not?: Maybe<_BusinessCategoryFilter>;
  categories_not_in?: Maybe<Array<_BusinessCategoryFilter>>;
  categories_single?: Maybe<_BusinessCategoryFilter>;
  categories_some?: Maybe<_BusinessCategoryFilter>;
  contact?: Maybe<_ContactFilter>;
  contact_in?: Maybe<Array<_ContactFilter>>;
  contact_not?: Maybe<_ContactFilter>;
  contact_not_in?: Maybe<Array<_ContactFilter>>;
  dateCreated?: Maybe<Scalars['Float']>;
  dateCreated_gt?: Maybe<Scalars['Float']>;
  dateCreated_gte?: Maybe<Scalars['Float']>;
  dateCreated_in?: Maybe<Array<Scalars['Float']>>;
  dateCreated_lt?: Maybe<Scalars['Float']>;
  dateCreated_lte?: Maybe<Scalars['Float']>;
  dateCreated_not?: Maybe<Scalars['Float']>;
  dateCreated_not_in?: Maybe<Array<Scalars['Float']>>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  displayImage_contains?: Maybe<Scalars['String']>;
  displayImage_ends_with?: Maybe<Scalars['String']>;
  displayImage_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not?: Maybe<Scalars['String']>;
  displayImage_not_contains?: Maybe<Scalars['String']>;
  displayImage_not_ends_with?: Maybe<Scalars['String']>;
  displayImage_not_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not_starts_with?: Maybe<Scalars['String']>;
  displayImage_starts_with?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Scalars['String']>>;
  gallery_contains?: Maybe<Array<Scalars['String']>>;
  gallery_ends_with?: Maybe<Array<Scalars['String']>>;
  gallery_not?: Maybe<Array<Scalars['String']>>;
  gallery_not_contains?: Maybe<Array<Scalars['String']>>;
  gallery_not_ends_with?: Maybe<Array<Scalars['String']>>;
  gallery_not_starts_with?: Maybe<Array<Scalars['String']>>;
  gallery_starts_with?: Maybe<Array<Scalars['String']>>;
  managedBy?: Maybe<_UserFilter>;
  managedBy_every?: Maybe<_UserFilter>;
  managedBy_in?: Maybe<Array<_UserFilter>>;
  managedBy_none?: Maybe<_UserFilter>;
  managedBy_not?: Maybe<_UserFilter>;
  managedBy_not_in?: Maybe<Array<_UserFilter>>;
  managedBy_single?: Maybe<_UserFilter>;
  managedBy_some?: Maybe<_UserFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_BusinessFilter>>;
  references?: Maybe<_ContentMetaFilter>;
  references_every?: Maybe<_ContentMetaFilter>;
  references_in?: Maybe<Array<_ContentMetaFilter>>;
  references_none?: Maybe<_ContentMetaFilter>;
  references_not?: Maybe<_ContentMetaFilter>;
  references_not_in?: Maybe<Array<_ContentMetaFilter>>;
  references_single?: Maybe<_ContentMetaFilter>;
  references_some?: Maybe<_ContentMetaFilter>;
  reviews?: Maybe<_ReviewFilter>;
  reviews_every?: Maybe<_ReviewFilter>;
  reviews_in?: Maybe<Array<_ReviewFilter>>;
  reviews_none?: Maybe<_ReviewFilter>;
  reviews_not?: Maybe<_ReviewFilter>;
  reviews_not_in?: Maybe<Array<_ReviewFilter>>;
  reviews_single?: Maybe<_ReviewFilter>;
  reviews_some?: Maybe<_ReviewFilter>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
};

export type _BusinessInput = {
  businessId: Scalars['ID'];
};

export enum _BusinessOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  AvgStarsAsc = 'avgStars_asc',
  AvgStarsDesc = 'avgStars_desc',
  BannerColourAsc = 'bannerColour_asc',
  BannerColourDesc = 'bannerColour_desc',
  BannerImageAsc = 'bannerImage_asc',
  BannerImageDesc = 'bannerImage_desc',
  BusinessIdAsc = 'businessId_asc',
  BusinessIdDesc = 'businessId_desc',
  DateCreatedAsc = 'dateCreated_asc',
  DateCreatedDesc = 'dateCreated_desc',
  DescriptionAsc = 'description_asc',
  DescriptionDesc = 'description_desc',
  DisplayImageAsc = 'displayImage_asc',
  DisplayImageDesc = 'displayImage_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  SlugAsc = 'slug_asc',
  SlugDesc = 'slug_desc'
}

export type _ContactFilter = {
  address?: Maybe<_AddressFilter>;
  address_every?: Maybe<_AddressFilter>;
  address_in?: Maybe<Array<_AddressFilter>>;
  address_none?: Maybe<_AddressFilter>;
  address_not?: Maybe<_AddressFilter>;
  address_not_in?: Maybe<Array<_AddressFilter>>;
  address_single?: Maybe<_AddressFilter>;
  address_some?: Maybe<_AddressFilter>;
  AND?: Maybe<Array<_ContactFilter>>;
  contactId?: Maybe<Scalars['ID']>;
  contactId_contains?: Maybe<Scalars['ID']>;
  contactId_ends_with?: Maybe<Scalars['ID']>;
  contactId_in?: Maybe<Array<Scalars['ID']>>;
  contactId_not?: Maybe<Scalars['ID']>;
  contactId_not_contains?: Maybe<Scalars['ID']>;
  contactId_not_ends_with?: Maybe<Scalars['ID']>;
  contactId_not_in?: Maybe<Array<Scalars['ID']>>;
  contactId_not_starts_with?: Maybe<Scalars['ID']>;
  contactId_starts_with?: Maybe<Scalars['ID']>;
  email?: Maybe<Array<Scalars['String']>>;
  email_contains?: Maybe<Array<Scalars['String']>>;
  email_ends_with?: Maybe<Array<Scalars['String']>>;
  email_not?: Maybe<Array<Scalars['String']>>;
  email_not_contains?: Maybe<Array<Scalars['String']>>;
  email_not_ends_with?: Maybe<Array<Scalars['String']>>;
  email_not_starts_with?: Maybe<Array<Scalars['String']>>;
  email_starts_with?: Maybe<Array<Scalars['String']>>;
  OR?: Maybe<Array<_ContactFilter>>;
  socials?: Maybe<_SocialLinkFilter>;
  socials_every?: Maybe<_SocialLinkFilter>;
  socials_in?: Maybe<Array<_SocialLinkFilter>>;
  socials_none?: Maybe<_SocialLinkFilter>;
  socials_not?: Maybe<_SocialLinkFilter>;
  socials_not_in?: Maybe<Array<_SocialLinkFilter>>;
  socials_single?: Maybe<_SocialLinkFilter>;
  socials_some?: Maybe<_SocialLinkFilter>;
  telephone?: Maybe<Array<Scalars['String']>>;
  telephone_contains?: Maybe<Array<Scalars['String']>>;
  telephone_ends_with?: Maybe<Array<Scalars['String']>>;
  telephone_not?: Maybe<Array<Scalars['String']>>;
  telephone_not_contains?: Maybe<Array<Scalars['String']>>;
  telephone_not_ends_with?: Maybe<Array<Scalars['String']>>;
  telephone_not_starts_with?: Maybe<Array<Scalars['String']>>;
  telephone_starts_with?: Maybe<Array<Scalars['String']>>;
};

export type _ContactInput = {
  contactId: Scalars['ID'];
};

export enum _ContactOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  ContactIdAsc = 'contactId_asc',
  ContactIdDesc = 'contactId_desc'
}

export type _ContentFilter = {
  AND?: Maybe<Array<_ContentFilter>>;
  contentId?: Maybe<Scalars['ID']>;
  contentId_contains?: Maybe<Scalars['ID']>;
  contentId_ends_with?: Maybe<Scalars['ID']>;
  contentId_in?: Maybe<Array<Scalars['ID']>>;
  contentId_not?: Maybe<Scalars['ID']>;
  contentId_not_contains?: Maybe<Scalars['ID']>;
  contentId_not_ends_with?: Maybe<Scalars['ID']>;
  contentId_not_in?: Maybe<Array<Scalars['ID']>>;
  contentId_not_starts_with?: Maybe<Scalars['ID']>;
  contentId_starts_with?: Maybe<Scalars['ID']>;
  displayImage?: Maybe<Scalars['String']>;
  displayImage_contains?: Maybe<Scalars['String']>;
  displayImage_ends_with?: Maybe<Scalars['String']>;
  displayImage_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not?: Maybe<Scalars['String']>;
  displayImage_not_contains?: Maybe<Scalars['String']>;
  displayImage_not_ends_with?: Maybe<Scalars['String']>;
  displayImage_not_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not_starts_with?: Maybe<Scalars['String']>;
  displayImage_starts_with?: Maybe<Scalars['String']>;
  guests?: Maybe<_UserFilter>;
  guests_every?: Maybe<_UserFilter>;
  guests_in?: Maybe<Array<_UserFilter>>;
  guests_none?: Maybe<_UserFilter>;
  guests_not?: Maybe<_UserFilter>;
  guests_not_in?: Maybe<Array<_UserFilter>>;
  guests_single?: Maybe<_UserFilter>;
  guests_some?: Maybe<_UserFilter>;
  hosts?: Maybe<_UserFilter>;
  hosts_every?: Maybe<_UserFilter>;
  hosts_in?: Maybe<Array<_UserFilter>>;
  hosts_none?: Maybe<_UserFilter>;
  hosts_not?: Maybe<_UserFilter>;
  hosts_not_in?: Maybe<Array<_UserFilter>>;
  hosts_single?: Maybe<_UserFilter>;
  hosts_some?: Maybe<_UserFilter>;
  meta?: Maybe<_ContentMetaFilter>;
  meta_every?: Maybe<_ContentMetaFilter>;
  meta_in?: Maybe<Array<_ContentMetaFilter>>;
  meta_none?: Maybe<_ContentMetaFilter>;
  meta_not?: Maybe<_ContentMetaFilter>;
  meta_not_in?: Maybe<Array<_ContentMetaFilter>>;
  meta_single?: Maybe<_ContentMetaFilter>;
  meta_some?: Maybe<_ContentMetaFilter>;
  OR?: Maybe<Array<_ContentFilter>>;
  release?: Maybe<_Neo4jDateTimeInput>;
  release_gt?: Maybe<_Neo4jDateTimeInput>;
  release_gte?: Maybe<_Neo4jDateTimeInput>;
  release_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  release_lt?: Maybe<_Neo4jDateTimeInput>;
  release_lte?: Maybe<_Neo4jDateTimeInput>;
  release_not?: Maybe<_Neo4jDateTimeInput>;
  release_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  reviews?: Maybe<_ReviewFilter>;
  reviews_every?: Maybe<_ReviewFilter>;
  reviews_in?: Maybe<Array<_ReviewFilter>>;
  reviews_none?: Maybe<_ReviewFilter>;
  reviews_not?: Maybe<_ReviewFilter>;
  reviews_not_in?: Maybe<Array<_ReviewFilter>>;
  reviews_single?: Maybe<_ReviewFilter>;
  reviews_some?: Maybe<_ReviewFilter>;
  series?: Maybe<_SeriesFilter>;
  series_every?: Maybe<_SeriesFilter>;
  series_in?: Maybe<Array<_SeriesFilter>>;
  series_none?: Maybe<_SeriesFilter>;
  series_not?: Maybe<_SeriesFilter>;
  series_not_in?: Maybe<Array<_SeriesFilter>>;
  series_single?: Maybe<_SeriesFilter>;
  series_some?: Maybe<_SeriesFilter>;
  summary?: Maybe<Scalars['String']>;
  summary_contains?: Maybe<Scalars['String']>;
  summary_ends_with?: Maybe<Scalars['String']>;
  summary_in?: Maybe<Array<Scalars['String']>>;
  summary_not?: Maybe<Scalars['String']>;
  summary_not_contains?: Maybe<Scalars['String']>;
  summary_not_ends_with?: Maybe<Scalars['String']>;
  summary_not_in?: Maybe<Array<Scalars['String']>>;
  summary_not_starts_with?: Maybe<Scalars['String']>;
  summary_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  url_contains?: Maybe<Scalars['String']>;
  url_ends_with?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Scalars['String']>>;
  url_not?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_not_ends_with?: Maybe<Scalars['String']>;
  url_not_in?: Maybe<Array<Scalars['String']>>;
  url_not_starts_with?: Maybe<Scalars['String']>;
  url_starts_with?: Maybe<Scalars['String']>;
};

export type _ContentInput = {
  contentId: Scalars['ID'];
};

export type _ContentMetaFilter = {
  AND?: Maybe<Array<_ContentMetaFilter>>;
  content?: Maybe<_ContentFilter>;
  content_in?: Maybe<Array<_ContentFilter>>;
  content_not?: Maybe<_ContentFilter>;
  content_not_in?: Maybe<Array<_ContentFilter>>;
  contentMetaId?: Maybe<Scalars['ID']>;
  contentMetaId_contains?: Maybe<Scalars['ID']>;
  contentMetaId_ends_with?: Maybe<Scalars['ID']>;
  contentMetaId_in?: Maybe<Array<Scalars['ID']>>;
  contentMetaId_not?: Maybe<Scalars['ID']>;
  contentMetaId_not_contains?: Maybe<Scalars['ID']>;
  contentMetaId_not_ends_with?: Maybe<Scalars['ID']>;
  contentMetaId_not_in?: Maybe<Array<Scalars['ID']>>;
  contentMetaId_not_starts_with?: Maybe<Scalars['ID']>;
  contentMetaId_starts_with?: Maybe<Scalars['ID']>;
  OR?: Maybe<Array<_ContentMetaFilter>>;
  role?: Maybe<Scalars['String']>;
  role_contains?: Maybe<Scalars['String']>;
  role_ends_with?: Maybe<Scalars['String']>;
  role_in?: Maybe<Array<Scalars['String']>>;
  role_not?: Maybe<Scalars['String']>;
  role_not_contains?: Maybe<Scalars['String']>;
  role_not_ends_with?: Maybe<Scalars['String']>;
  role_not_in?: Maybe<Array<Scalars['String']>>;
  role_not_starts_with?: Maybe<Scalars['String']>;
  role_starts_with?: Maybe<Scalars['String']>;
};

export type _ContentMetaInput = {
  contentMetaId: Scalars['ID'];
};

export enum _ContentMetaOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  ContentMetaIdAsc = 'contentMetaId_asc',
  ContentMetaIdDesc = 'contentMetaId_desc',
  RoleAsc = 'role_asc',
  RoleDesc = 'role_desc'
}

export enum _ContentOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  AvgStarsAsc = 'avgStars_asc',
  AvgStarsDesc = 'avgStars_desc',
  ContentIdAsc = 'contentId_asc',
  ContentIdDesc = 'contentId_desc',
  DisplayImageAsc = 'displayImage_asc',
  DisplayImageDesc = 'displayImage_desc',
  ReleaseAsc = 'release_asc',
  ReleaseDesc = 'release_desc',
  SummaryAsc = 'summary_asc',
  SummaryDesc = 'summary_desc',
  TitleAsc = 'title_asc',
  TitleDesc = 'title_desc',
  UrlAsc = 'url_asc',
  UrlDesc = 'url_desc'
}

export type _EventFilter = {
  AND?: Maybe<Array<_EventFilter>>;
  displayImage?: Maybe<Scalars['String']>;
  displayImage_contains?: Maybe<Scalars['String']>;
  displayImage_ends_with?: Maybe<Scalars['String']>;
  displayImage_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not?: Maybe<Scalars['String']>;
  displayImage_not_contains?: Maybe<Scalars['String']>;
  displayImage_not_ends_with?: Maybe<Scalars['String']>;
  displayImage_not_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not_starts_with?: Maybe<Scalars['String']>;
  displayImage_starts_with?: Maybe<Scalars['String']>;
  end?: Maybe<_Neo4jDateTimeInput>;
  end_gt?: Maybe<_Neo4jDateTimeInput>;
  end_gte?: Maybe<_Neo4jDateTimeInput>;
  end_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  end_lt?: Maybe<_Neo4jDateTimeInput>;
  end_lte?: Maybe<_Neo4jDateTimeInput>;
  end_not?: Maybe<_Neo4jDateTimeInput>;
  end_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  eventId?: Maybe<Scalars['ID']>;
  eventId_contains?: Maybe<Scalars['ID']>;
  eventId_ends_with?: Maybe<Scalars['ID']>;
  eventId_in?: Maybe<Array<Scalars['ID']>>;
  eventId_not?: Maybe<Scalars['ID']>;
  eventId_not_contains?: Maybe<Scalars['ID']>;
  eventId_not_ends_with?: Maybe<Scalars['ID']>;
  eventId_not_in?: Maybe<Array<Scalars['ID']>>;
  eventId_not_starts_with?: Maybe<Scalars['ID']>;
  eventId_starts_with?: Maybe<Scalars['ID']>;
  gallery?: Maybe<Array<Scalars['String']>>;
  gallery_contains?: Maybe<Array<Scalars['String']>>;
  gallery_ends_with?: Maybe<Array<Scalars['String']>>;
  gallery_not?: Maybe<Array<Scalars['String']>>;
  gallery_not_contains?: Maybe<Array<Scalars['String']>>;
  gallery_not_ends_with?: Maybe<Array<Scalars['String']>>;
  gallery_not_starts_with?: Maybe<Array<Scalars['String']>>;
  gallery_starts_with?: Maybe<Array<Scalars['String']>>;
  guests?: Maybe<_UserFilter>;
  guests_every?: Maybe<_UserFilter>;
  guests_in?: Maybe<Array<_UserFilter>>;
  guests_none?: Maybe<_UserFilter>;
  guests_not?: Maybe<_UserFilter>;
  guests_not_in?: Maybe<Array<_UserFilter>>;
  guests_single?: Maybe<_UserFilter>;
  guests_some?: Maybe<_UserFilter>;
  managedBy?: Maybe<_UserFilter>;
  managedBy_every?: Maybe<_UserFilter>;
  managedBy_in?: Maybe<Array<_UserFilter>>;
  managedBy_none?: Maybe<_UserFilter>;
  managedBy_not?: Maybe<_UserFilter>;
  managedBy_not_in?: Maybe<Array<_UserFilter>>;
  managedBy_single?: Maybe<_UserFilter>;
  managedBy_some?: Maybe<_UserFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_EventFilter>>;
  reviews?: Maybe<_ReviewFilter>;
  reviews_every?: Maybe<_ReviewFilter>;
  reviews_in?: Maybe<Array<_ReviewFilter>>;
  reviews_none?: Maybe<_ReviewFilter>;
  reviews_not?: Maybe<_ReviewFilter>;
  reviews_not_in?: Maybe<Array<_ReviewFilter>>;
  reviews_single?: Maybe<_ReviewFilter>;
  reviews_some?: Maybe<_ReviewFilter>;
  series?: Maybe<_SeriesFilter>;
  series_every?: Maybe<_SeriesFilter>;
  series_in?: Maybe<Array<_SeriesFilter>>;
  series_none?: Maybe<_SeriesFilter>;
  series_not?: Maybe<_SeriesFilter>;
  series_not_in?: Maybe<Array<_SeriesFilter>>;
  series_single?: Maybe<_SeriesFilter>;
  series_some?: Maybe<_SeriesFilter>;
  start?: Maybe<_Neo4jDateTimeInput>;
  start_gt?: Maybe<_Neo4jDateTimeInput>;
  start_gte?: Maybe<_Neo4jDateTimeInput>;
  start_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  start_lt?: Maybe<_Neo4jDateTimeInput>;
  start_lte?: Maybe<_Neo4jDateTimeInput>;
  start_not?: Maybe<_Neo4jDateTimeInput>;
  start_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  url?: Maybe<Scalars['String']>;
  url_contains?: Maybe<Scalars['String']>;
  url_ends_with?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Scalars['String']>>;
  url_not?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_not_ends_with?: Maybe<Scalars['String']>;
  url_not_in?: Maybe<Array<Scalars['String']>>;
  url_not_starts_with?: Maybe<Scalars['String']>;
  url_starts_with?: Maybe<Scalars['String']>;
  venue?: Maybe<_VenueFilter>;
  venue_in?: Maybe<Array<_VenueFilter>>;
  venue_not?: Maybe<_VenueFilter>;
  venue_not_in?: Maybe<Array<_VenueFilter>>;
};

export type _EventInput = {
  eventId: Scalars['ID'];
};

export enum _EventOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  AvgStarsAsc = 'avgStars_asc',
  AvgStarsDesc = 'avgStars_desc',
  DisplayImageAsc = 'displayImage_asc',
  DisplayImageDesc = 'displayImage_desc',
  EndAsc = 'end_asc',
  EndDesc = 'end_desc',
  EventIdAsc = 'eventId_asc',
  EventIdDesc = 'eventId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  StartAsc = 'start_asc',
  StartDesc = 'start_desc',
  UrlAsc = 'url_asc',
  UrlDesc = 'url_desc'
}

export type _GetbusinessByUserIdResponseFilter = {
  AND?: Maybe<Array<_GetbusinessByUserIdResponseFilter>>;
  ok?: Maybe<Scalars['Boolean']>;
  ok_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<_GetbusinessByUserIdResponseFilter>>;
};

export type _GetbusinessByUserIdResponseInput = {
  ok: Scalars['Boolean'];
};

export enum _GetbusinessByUserIdResponseOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  OkAsc = 'ok_asc',
  OkDesc = 'ok_desc'
}

export type _HomePageResponseFilter = {
  AND?: Maybe<Array<_HomePageResponseFilter>>;
  OR?: Maybe<Array<_HomePageResponseFilter>>;
};

export enum _HomePageResponseOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _LoginResponseFilter = {
  accessToken?: Maybe<Scalars['String']>;
  accessToken_contains?: Maybe<Scalars['String']>;
  accessToken_ends_with?: Maybe<Scalars['String']>;
  accessToken_in?: Maybe<Array<Scalars['String']>>;
  accessToken_not?: Maybe<Scalars['String']>;
  accessToken_not_contains?: Maybe<Scalars['String']>;
  accessToken_not_ends_with?: Maybe<Scalars['String']>;
  accessToken_not_in?: Maybe<Array<Scalars['String']>>;
  accessToken_not_starts_with?: Maybe<Scalars['String']>;
  accessToken_starts_with?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<_LoginResponseFilter>>;
  ok?: Maybe<Scalars['Boolean']>;
  ok_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<_LoginResponseFilter>>;
};

export type _LoginResponseInput = {
  accessToken: Scalars['String'];
};

export enum _LoginResponseOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  AccessTokenAsc = 'accessToken_asc',
  AccessTokenDesc = 'accessToken_desc',
  OkAsc = 'ok_asc',
  OkDesc = 'ok_desc'
}

export type _MergeAddressContactPayload = {
  __typename?: '_MergeAddressContactPayload';
  /** Field for the Contact node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the Address node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Address>;
};

export type _MergeBusinessCategoriesPayload = {
  __typename?: '_MergeBusinessCategoriesPayload';
  /** Field for the Business node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Business>;
  /** Field for the BusinessCategory node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<BusinessCategory>;
};

export type _MergeBusinessCategoryBusinessesPayload = {
  __typename?: '_MergeBusinessCategoryBusinessesPayload';
  /** Field for the Business node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Business>;
  /** Field for the BusinessCategory node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<BusinessCategory>;
};

export type _MergeBusinessContactPayload = {
  __typename?: '_MergeBusinessContactPayload';
  /** Field for the Business node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Business>;
  /** Field for the Contact node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Contact>;
};

export type _MergeBusinessManagedByPayload = {
  __typename?: '_MergeBusinessManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Business node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Business>;
};

export type _MergeBusinessReferencesPayload = {
  __typename?: '_MergeBusinessReferencesPayload';
  /** Field for the ContentMeta node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ContentMeta>;
  /** Field for the Business node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Business>;
};

export type _MergeBusinessReviewsPayload = {
  __typename?: '_MergeBusinessReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Business node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Business>;
};

export type _MergeContactAddressPayload = {
  __typename?: '_MergeContactAddressPayload';
  /** Field for the Contact node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the Address node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Address>;
};

export type _MergeContactSocialsPayload = {
  __typename?: '_MergeContactSocialsPayload';
  /** Field for the Contact node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the SocialLink node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SocialLink>;
};

export type _MergeContentGuestsPayload = {
  __typename?: '_MergeContentGuestsPayload';
  /** Field for the User node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Content node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Content>;
};

export type _MergeContentHostsPayload = {
  __typename?: '_MergeContentHostsPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Content node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Content>;
};

export type _MergeContentMetaContentPayload = {
  __typename?: '_MergeContentMetaContentPayload';
  /** Field for the Content node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the ContentMeta node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<ContentMeta>;
};

export type _MergeContentMetaPayload = {
  __typename?: '_MergeContentMetaPayload';
  /** Field for the Content node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the ContentMeta node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<ContentMeta>;
};

export type _MergeContentReviewsPayload = {
  __typename?: '_MergeContentReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Content node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Content>;
};

export type _MergeContentSeriesPayload = {
  __typename?: '_MergeContentSeriesPayload';
  /** Field for the Content node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _MergeEventGuestsPayload = {
  __typename?: '_MergeEventGuestsPayload';
  /** Field for the User node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Event node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Event>;
};

export type _MergeEventManagedByPayload = {
  __typename?: '_MergeEventManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Event node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Event>;
};

export type _MergeEventReviewsPayload = {
  __typename?: '_MergeEventReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Event node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Event>;
};

export type _MergeEventSeriesPayload = {
  __typename?: '_MergeEventSeriesPayload';
  /** Field for the Event node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _MergeEventVenuePayload = {
  __typename?: '_MergeEventVenuePayload';
  /** Field for the Event node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Venue node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _MergeReviewUserPayload = {
  __typename?: '_MergeReviewUserPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Review>;
};

export type _MergeSeriesContentPayload = {
  __typename?: '_MergeSeriesContentPayload';
  /** Field for the Content node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _MergeSeriesEventsPayload = {
  __typename?: '_MergeSeriesEventsPayload';
  /** Field for the Event node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _MergeSeriesManagedByPayload = {
  __typename?: '_MergeSeriesManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Series node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _MergeSeriesReviewsPayload = {
  __typename?: '_MergeSeriesReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Series node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _MergeSocialLinkContactPayload = {
  __typename?: '_MergeSocialLinkContactPayload';
  /** Field for the Contact node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the SocialLink node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SocialLink>;
};

export type _MergeUserContactPayload = {
  __typename?: '_MergeUserContactPayload';
  /** Field for the User node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Contact node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Contact>;
};

export type _MergeUserReferencesPayload = {
  __typename?: '_MergeUserReferencesPayload';
  /** Field for the ContentMeta node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ContentMeta>;
  /** Field for the User node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _MergeUserReviewsPayload = {
  __typename?: '_MergeUserReviewsPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Review>;
};

export type _MergeVenueContactPayload = {
  __typename?: '_MergeVenueContactPayload';
  /** Field for the Venue node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Venue>;
  /** Field for the Contact node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Contact>;
};

export type _MergeVenueEventsPayload = {
  __typename?: '_MergeVenueEventsPayload';
  /** Field for the Event node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Venue node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _MergeVenueManagedByPayload = {
  __typename?: '_MergeVenueManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Venue node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _MergeVenueReviewsPayload = {
  __typename?: '_MergeVenueReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Venue node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

/** Generated Date object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDate = {
  __typename?: '_Neo4jDate';
  day?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Date value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** Generated Date input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateInput = {
  day?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Date value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/date/#functions-date-create-string). */
  formatted?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** Generated DateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime';
  day?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) DateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

/** Generated DateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateTimeInput = {
  day?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) DateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/datetime/#functions-datetime-create-string). */
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

/** Generated LocalDateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime';
  day?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalDateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** Generated LocalDateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalDateTimeInput = {
  day?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalDateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localdatetime/#functions-localdatetime-create-string). */
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** Generated LocalTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime';
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
};

/** Generated LocalTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalTimeInput = {
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localtime/#functions-localtime-create-string). */
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
};

/** Generated Point object type for Neo4j [Spatial fields](https://grandstack.io/docs/graphql-spatial-types#using-point-in-queries). */
export type _Neo4jPoint = {
  __typename?: '_Neo4jPoint';
  crs?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

export type _Neo4jPointDistanceFilter = {
  distance: Scalars['Float'];
  point: _Neo4jPointInput;
};

/** Generated Point input object for Neo4j [Spatial field arguments](https://grandstack.io/docs/graphql-spatial-types/#point-query-arguments). */
export type _Neo4jPointInput = {
  crs?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  srid?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

/** Generated Time object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jTime = {
  __typename?: '_Neo4jTime';
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Time value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
};

/** Generated Time input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jTimeInput = {
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Time value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/time/#functions-time-create-string). */
  formatted?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
};

export type _RefreshTokenResponseFilter = {
  accessToken?: Maybe<Scalars['String']>;
  accessToken_contains?: Maybe<Scalars['String']>;
  accessToken_ends_with?: Maybe<Scalars['String']>;
  accessToken_in?: Maybe<Array<Scalars['String']>>;
  accessToken_not?: Maybe<Scalars['String']>;
  accessToken_not_contains?: Maybe<Scalars['String']>;
  accessToken_not_ends_with?: Maybe<Scalars['String']>;
  accessToken_not_in?: Maybe<Array<Scalars['String']>>;
  accessToken_not_starts_with?: Maybe<Scalars['String']>;
  accessToken_starts_with?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<_RefreshTokenResponseFilter>>;
  ok?: Maybe<Scalars['Boolean']>;
  ok_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<_RefreshTokenResponseFilter>>;
};

export type _RefreshTokenResponseInput = {
  accessToken: Scalars['String'];
};

export enum _RefreshTokenResponseOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  AccessTokenAsc = 'accessToken_asc',
  AccessTokenDesc = 'accessToken_desc',
  OkAsc = 'ok_asc',
  OkDesc = 'ok_desc'
}

export enum _RelationDirections {
  In = 'IN',
  Out = 'OUT'
}

export type _RemoveAddressContactPayload = {
  __typename?: '_RemoveAddressContactPayload';
  /** Field for the Contact node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the Address node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Address>;
};

export type _RemoveBusinessCategoriesPayload = {
  __typename?: '_RemoveBusinessCategoriesPayload';
  /** Field for the Business node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Business>;
  /** Field for the BusinessCategory node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<BusinessCategory>;
};

export type _RemoveBusinessCategoryBusinessesPayload = {
  __typename?: '_RemoveBusinessCategoryBusinessesPayload';
  /** Field for the Business node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Business>;
  /** Field for the BusinessCategory node this IN_BUSINESS_CATEGORY [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<BusinessCategory>;
};

export type _RemoveBusinessContactPayload = {
  __typename?: '_RemoveBusinessContactPayload';
  /** Field for the Business node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Business>;
  /** Field for the Contact node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Contact>;
};

export type _RemoveBusinessManagedByPayload = {
  __typename?: '_RemoveBusinessManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Business node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Business>;
};

export type _RemoveBusinessReferencesPayload = {
  __typename?: '_RemoveBusinessReferencesPayload';
  /** Field for the ContentMeta node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ContentMeta>;
  /** Field for the Business node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Business>;
};

export type _RemoveBusinessReviewsPayload = {
  __typename?: '_RemoveBusinessReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Business node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Business>;
};

export type _RemoveContactAddressPayload = {
  __typename?: '_RemoveContactAddressPayload';
  /** Field for the Contact node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the Address node this HAS_ADDRESS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Address>;
};

export type _RemoveContactSocialsPayload = {
  __typename?: '_RemoveContactSocialsPayload';
  /** Field for the Contact node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the SocialLink node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SocialLink>;
};

export type _RemoveContentGuestsPayload = {
  __typename?: '_RemoveContentGuestsPayload';
  /** Field for the User node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Content node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Content>;
};

export type _RemoveContentHostsPayload = {
  __typename?: '_RemoveContentHostsPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Content node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Content>;
};

export type _RemoveContentMetaContentPayload = {
  __typename?: '_RemoveContentMetaContentPayload';
  /** Field for the Content node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the ContentMeta node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<ContentMeta>;
};

export type _RemoveContentMetaPayload = {
  __typename?: '_RemoveContentMetaPayload';
  /** Field for the Content node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the ContentMeta node this HAS_META [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<ContentMeta>;
};

export type _RemoveContentReviewsPayload = {
  __typename?: '_RemoveContentReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Content node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Content>;
};

export type _RemoveContentSeriesPayload = {
  __typename?: '_RemoveContentSeriesPayload';
  /** Field for the Content node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _RemoveEventGuestsPayload = {
  __typename?: '_RemoveEventGuestsPayload';
  /** Field for the User node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Event node this APPEARS_IN [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Event>;
};

export type _RemoveEventManagedByPayload = {
  __typename?: '_RemoveEventManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Event node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Event>;
};

export type _RemoveEventReviewsPayload = {
  __typename?: '_RemoveEventReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Event node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Event>;
};

export type _RemoveEventSeriesPayload = {
  __typename?: '_RemoveEventSeriesPayload';
  /** Field for the Event node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _RemoveEventVenuePayload = {
  __typename?: '_RemoveEventVenuePayload';
  /** Field for the Event node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Venue node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _RemoveReviewUserPayload = {
  __typename?: '_RemoveReviewUserPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Review>;
};

export type _RemoveSeriesContentPayload = {
  __typename?: '_RemoveSeriesContentPayload';
  /** Field for the Content node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Content>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _RemoveSeriesEventsPayload = {
  __typename?: '_RemoveSeriesEventsPayload';
  /** Field for the Event node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Series node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _RemoveSeriesManagedByPayload = {
  __typename?: '_RemoveSeriesManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Series node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _RemoveSeriesReviewsPayload = {
  __typename?: '_RemoveSeriesReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Series node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Series>;
};

export type _RemoveSocialLinkContactPayload = {
  __typename?: '_RemoveSocialLinkContactPayload';
  /** Field for the Contact node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Contact>;
  /** Field for the SocialLink node this HAS_SOCIAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<SocialLink>;
};

export type _RemoveUserContactPayload = {
  __typename?: '_RemoveUserContactPayload';
  /** Field for the User node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Contact node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Contact>;
};

export type _RemoveUserReferencesPayload = {
  __typename?: '_RemoveUserReferencesPayload';
  /** Field for the ContentMeta node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<ContentMeta>;
  /** Field for the User node this META_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<User>;
};

export type _RemoveUserReviewsPayload = {
  __typename?: '_RemoveUserReviewsPayload';
  /** Field for the User node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Review node this WROTE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Review>;
};

export type _RemoveVenueContactPayload = {
  __typename?: '_RemoveVenueContactPayload';
  /** Field for the Venue node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Venue>;
  /** Field for the Contact node this HAS_CONTACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Contact>;
};

export type _RemoveVenueEventsPayload = {
  __typename?: '_RemoveVenueEventsPayload';
  /** Field for the Event node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Event>;
  /** Field for the Venue node this LOCATED_AT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _RemoveVenueManagedByPayload = {
  __typename?: '_RemoveVenueManagedByPayload';
  /** Field for the User node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<User>;
  /** Field for the Venue node this MANAGES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _RemoveVenueReviewsPayload = {
  __typename?: '_RemoveVenueReviewsPayload';
  /** Field for the Review node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  from?: Maybe<Review>;
  /** Field for the Venue node this REVIEWS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  to?: Maybe<Venue>;
};

export type _ReviewFilter = {
  AND?: Maybe<Array<_ReviewFilter>>;
  date?: Maybe<_Neo4jDateTimeInput>;
  date_gt?: Maybe<_Neo4jDateTimeInput>;
  date_gte?: Maybe<_Neo4jDateTimeInput>;
  date_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  date_lt?: Maybe<_Neo4jDateTimeInput>;
  date_lte?: Maybe<_Neo4jDateTimeInput>;
  date_not?: Maybe<_Neo4jDateTimeInput>;
  date_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  OR?: Maybe<Array<_ReviewFilter>>;
  reviewId?: Maybe<Scalars['ID']>;
  reviewId_contains?: Maybe<Scalars['ID']>;
  reviewId_ends_with?: Maybe<Scalars['ID']>;
  reviewId_in?: Maybe<Array<Scalars['ID']>>;
  reviewId_not?: Maybe<Scalars['ID']>;
  reviewId_not_contains?: Maybe<Scalars['ID']>;
  reviewId_not_ends_with?: Maybe<Scalars['ID']>;
  reviewId_not_in?: Maybe<Array<Scalars['ID']>>;
  reviewId_not_starts_with?: Maybe<Scalars['ID']>;
  reviewId_starts_with?: Maybe<Scalars['ID']>;
  stars?: Maybe<Scalars['Float']>;
  stars_gt?: Maybe<Scalars['Float']>;
  stars_gte?: Maybe<Scalars['Float']>;
  stars_in?: Maybe<Array<Scalars['Float']>>;
  stars_lt?: Maybe<Scalars['Float']>;
  stars_lte?: Maybe<Scalars['Float']>;
  stars_not?: Maybe<Scalars['Float']>;
  stars_not_in?: Maybe<Array<Scalars['Float']>>;
  text?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  user?: Maybe<_UserFilter>;
  user_in?: Maybe<Array<_UserFilter>>;
  user_not?: Maybe<_UserFilter>;
  user_not_in?: Maybe<Array<_UserFilter>>;
};

export type _ReviewInput = {
  reviewId: Scalars['ID'];
};

export enum _ReviewOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  DateAsc = 'date_asc',
  DateDesc = 'date_desc',
  ReviewIdAsc = 'reviewId_asc',
  ReviewIdDesc = 'reviewId_desc',
  StarsAsc = 'stars_asc',
  StarsDesc = 'stars_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc'
}

export type _SeriesFilter = {
  AND?: Maybe<Array<_SeriesFilter>>;
  content?: Maybe<_ContentFilter>;
  content_every?: Maybe<_ContentFilter>;
  content_in?: Maybe<Array<_ContentFilter>>;
  content_none?: Maybe<_ContentFilter>;
  content_not?: Maybe<_ContentFilter>;
  content_not_in?: Maybe<Array<_ContentFilter>>;
  content_single?: Maybe<_ContentFilter>;
  content_some?: Maybe<_ContentFilter>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  displayImage_contains?: Maybe<Scalars['String']>;
  displayImage_ends_with?: Maybe<Scalars['String']>;
  displayImage_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not?: Maybe<Scalars['String']>;
  displayImage_not_contains?: Maybe<Scalars['String']>;
  displayImage_not_ends_with?: Maybe<Scalars['String']>;
  displayImage_not_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not_starts_with?: Maybe<Scalars['String']>;
  displayImage_starts_with?: Maybe<Scalars['String']>;
  events?: Maybe<_EventFilter>;
  events_every?: Maybe<_EventFilter>;
  events_in?: Maybe<Array<_EventFilter>>;
  events_none?: Maybe<_EventFilter>;
  events_not?: Maybe<_EventFilter>;
  events_not_in?: Maybe<Array<_EventFilter>>;
  events_single?: Maybe<_EventFilter>;
  events_some?: Maybe<_EventFilter>;
  managedBy?: Maybe<_UserFilter>;
  managedBy_every?: Maybe<_UserFilter>;
  managedBy_in?: Maybe<Array<_UserFilter>>;
  managedBy_none?: Maybe<_UserFilter>;
  managedBy_not?: Maybe<_UserFilter>;
  managedBy_not_in?: Maybe<Array<_UserFilter>>;
  managedBy_single?: Maybe<_UserFilter>;
  managedBy_some?: Maybe<_UserFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_SeriesFilter>>;
  reviews?: Maybe<_ReviewFilter>;
  reviews_every?: Maybe<_ReviewFilter>;
  reviews_in?: Maybe<Array<_ReviewFilter>>;
  reviews_none?: Maybe<_ReviewFilter>;
  reviews_not?: Maybe<_ReviewFilter>;
  reviews_not_in?: Maybe<Array<_ReviewFilter>>;
  reviews_single?: Maybe<_ReviewFilter>;
  reviews_some?: Maybe<_ReviewFilter>;
  seriesId?: Maybe<Scalars['ID']>;
  seriesId_contains?: Maybe<Scalars['ID']>;
  seriesId_ends_with?: Maybe<Scalars['ID']>;
  seriesId_in?: Maybe<Array<Scalars['ID']>>;
  seriesId_not?: Maybe<Scalars['ID']>;
  seriesId_not_contains?: Maybe<Scalars['ID']>;
  seriesId_not_ends_with?: Maybe<Scalars['ID']>;
  seriesId_not_in?: Maybe<Array<Scalars['ID']>>;
  seriesId_not_starts_with?: Maybe<Scalars['ID']>;
  seriesId_starts_with?: Maybe<Scalars['ID']>;
};

export type _SeriesInput = {
  seriesId: Scalars['ID'];
};

export enum _SeriesOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  AvgStarsAsc = 'avgStars_asc',
  AvgStarsDesc = 'avgStars_desc',
  DescriptionAsc = 'description_asc',
  DescriptionDesc = 'description_desc',
  DisplayImageAsc = 'displayImage_asc',
  DisplayImageDesc = 'displayImage_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  SeriesIdAsc = 'seriesId_asc',
  SeriesIdDesc = 'seriesId_desc'
}

export type _SocialLinkFilter = {
  account?: Maybe<Scalars['String']>;
  account_contains?: Maybe<Scalars['String']>;
  account_ends_with?: Maybe<Scalars['String']>;
  account_in?: Maybe<Array<Scalars['String']>>;
  account_not?: Maybe<Scalars['String']>;
  account_not_contains?: Maybe<Scalars['String']>;
  account_not_ends_with?: Maybe<Scalars['String']>;
  account_not_in?: Maybe<Array<Scalars['String']>>;
  account_not_starts_with?: Maybe<Scalars['String']>;
  account_starts_with?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<_SocialLinkFilter>>;
  contact?: Maybe<_ContactFilter>;
  contact_in?: Maybe<Array<_ContactFilter>>;
  contact_not?: Maybe<_ContactFilter>;
  contact_not_in?: Maybe<Array<_ContactFilter>>;
  OR?: Maybe<Array<_SocialLinkFilter>>;
  platform?: Maybe<Scalars['String']>;
  platform_contains?: Maybe<Scalars['String']>;
  platform_ends_with?: Maybe<Scalars['String']>;
  platform_in?: Maybe<Array<Scalars['String']>>;
  platform_not?: Maybe<Scalars['String']>;
  platform_not_contains?: Maybe<Scalars['String']>;
  platform_not_ends_with?: Maybe<Scalars['String']>;
  platform_not_in?: Maybe<Array<Scalars['String']>>;
  platform_not_starts_with?: Maybe<Scalars['String']>;
  platform_starts_with?: Maybe<Scalars['String']>;
  socialLinkId?: Maybe<Scalars['ID']>;
  socialLinkId_contains?: Maybe<Scalars['ID']>;
  socialLinkId_ends_with?: Maybe<Scalars['ID']>;
  socialLinkId_in?: Maybe<Array<Scalars['ID']>>;
  socialLinkId_not?: Maybe<Scalars['ID']>;
  socialLinkId_not_contains?: Maybe<Scalars['ID']>;
  socialLinkId_not_ends_with?: Maybe<Scalars['ID']>;
  socialLinkId_not_in?: Maybe<Array<Scalars['ID']>>;
  socialLinkId_not_starts_with?: Maybe<Scalars['ID']>;
  socialLinkId_starts_with?: Maybe<Scalars['ID']>;
};

export type _SocialLinkInput = {
  socialLinkId: Scalars['ID'];
};

export enum _SocialLinkOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  AccountAsc = 'account_asc',
  AccountDesc = 'account_desc',
  PlatformAsc = 'platform_asc',
  PlatformDesc = 'platform_desc',
  SocialLinkIdAsc = 'socialLinkId_asc',
  SocialLinkIdDesc = 'socialLinkId_desc'
}

export type _UserFilter = {
  about?: Maybe<Scalars['String']>;
  about_contains?: Maybe<Scalars['String']>;
  about_ends_with?: Maybe<Scalars['String']>;
  about_in?: Maybe<Array<Scalars['String']>>;
  about_not?: Maybe<Scalars['String']>;
  about_not_contains?: Maybe<Scalars['String']>;
  about_not_ends_with?: Maybe<Scalars['String']>;
  about_not_in?: Maybe<Array<Scalars['String']>>;
  about_not_starts_with?: Maybe<Scalars['String']>;
  about_starts_with?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<_UserFilter>>;
  contact?: Maybe<_ContactFilter>;
  contact_in?: Maybe<Array<_ContactFilter>>;
  contact_not?: Maybe<_ContactFilter>;
  contact_not_in?: Maybe<Array<_ContactFilter>>;
  displayImage?: Maybe<Scalars['String']>;
  displayImage_contains?: Maybe<Scalars['String']>;
  displayImage_ends_with?: Maybe<Scalars['String']>;
  displayImage_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not?: Maybe<Scalars['String']>;
  displayImage_not_contains?: Maybe<Scalars['String']>;
  displayImage_not_ends_with?: Maybe<Scalars['String']>;
  displayImage_not_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not_starts_with?: Maybe<Scalars['String']>;
  displayImage_starts_with?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  displayName_contains?: Maybe<Scalars['String']>;
  displayName_ends_with?: Maybe<Scalars['String']>;
  displayName_in?: Maybe<Array<Scalars['String']>>;
  displayName_not?: Maybe<Scalars['String']>;
  displayName_not_contains?: Maybe<Scalars['String']>;
  displayName_not_ends_with?: Maybe<Scalars['String']>;
  displayName_not_in?: Maybe<Array<Scalars['String']>>;
  displayName_not_starts_with?: Maybe<Scalars['String']>;
  displayName_starts_with?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  familyName_contains?: Maybe<Scalars['String']>;
  familyName_ends_with?: Maybe<Scalars['String']>;
  familyName_in?: Maybe<Array<Scalars['String']>>;
  familyName_not?: Maybe<Scalars['String']>;
  familyName_not_contains?: Maybe<Scalars['String']>;
  familyName_not_ends_with?: Maybe<Scalars['String']>;
  familyName_not_in?: Maybe<Array<Scalars['String']>>;
  familyName_not_starts_with?: Maybe<Scalars['String']>;
  familyName_starts_with?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  forename_contains?: Maybe<Scalars['String']>;
  forename_ends_with?: Maybe<Scalars['String']>;
  forename_in?: Maybe<Array<Scalars['String']>>;
  forename_not?: Maybe<Scalars['String']>;
  forename_not_contains?: Maybe<Scalars['String']>;
  forename_not_ends_with?: Maybe<Scalars['String']>;
  forename_not_in?: Maybe<Array<Scalars['String']>>;
  forename_not_starts_with?: Maybe<Scalars['String']>;
  forename_starts_with?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  googleId_contains?: Maybe<Scalars['String']>;
  googleId_ends_with?: Maybe<Scalars['String']>;
  googleId_in?: Maybe<Array<Scalars['String']>>;
  googleId_not?: Maybe<Scalars['String']>;
  googleId_not_contains?: Maybe<Scalars['String']>;
  googleId_not_ends_with?: Maybe<Scalars['String']>;
  googleId_not_in?: Maybe<Array<Scalars['String']>>;
  googleId_not_starts_with?: Maybe<Scalars['String']>;
  googleId_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_UserFilter>>;
  references?: Maybe<_ContentMetaFilter>;
  references_every?: Maybe<_ContentMetaFilter>;
  references_in?: Maybe<Array<_ContentMetaFilter>>;
  references_none?: Maybe<_ContentMetaFilter>;
  references_not?: Maybe<_ContentMetaFilter>;
  references_not_in?: Maybe<Array<_ContentMetaFilter>>;
  references_single?: Maybe<_ContentMetaFilter>;
  references_some?: Maybe<_ContentMetaFilter>;
  reviews?: Maybe<_ReviewFilter>;
  reviews_every?: Maybe<_ReviewFilter>;
  reviews_in?: Maybe<Array<_ReviewFilter>>;
  reviews_none?: Maybe<_ReviewFilter>;
  reviews_not?: Maybe<_ReviewFilter>;
  reviews_not_in?: Maybe<Array<_ReviewFilter>>;
  reviews_single?: Maybe<_ReviewFilter>;
  reviews_some?: Maybe<_ReviewFilter>;
  userId?: Maybe<Scalars['ID']>;
  userId_contains?: Maybe<Scalars['ID']>;
  userId_ends_with?: Maybe<Scalars['ID']>;
  userId_in?: Maybe<Array<Scalars['ID']>>;
  userId_not?: Maybe<Scalars['ID']>;
  userId_not_contains?: Maybe<Scalars['ID']>;
  userId_not_ends_with?: Maybe<Scalars['ID']>;
  userId_not_in?: Maybe<Array<Scalars['ID']>>;
  userId_not_starts_with?: Maybe<Scalars['ID']>;
  userId_starts_with?: Maybe<Scalars['ID']>;
};

export type _UserInput = {
  userId: Scalars['ID'];
};

export enum _UserOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  AboutAsc = 'about_asc',
  AboutDesc = 'about_desc',
  DisplayImageAsc = 'displayImage_asc',
  DisplayImageDesc = 'displayImage_desc',
  DisplayNameAsc = 'displayName_asc',
  DisplayNameDesc = 'displayName_desc',
  FamilyNameAsc = 'familyName_asc',
  FamilyNameDesc = 'familyName_desc',
  ForenameAsc = 'forename_asc',
  ForenameDesc = 'forename_desc',
  GoogleIdAsc = 'googleId_asc',
  GoogleIdDesc = 'googleId_desc',
  NumReviewsAsc = 'numReviews_asc',
  NumReviewsDesc = 'numReviews_desc',
  UserIdAsc = 'userId_asc',
  UserIdDesc = 'userId_desc'
}

export type _VenueFilter = {
  AND?: Maybe<Array<_VenueFilter>>;
  contact?: Maybe<_ContactFilter>;
  contact_in?: Maybe<Array<_ContactFilter>>;
  contact_not?: Maybe<_ContactFilter>;
  contact_not_in?: Maybe<Array<_ContactFilter>>;
  displayImage?: Maybe<Scalars['String']>;
  displayImage_contains?: Maybe<Scalars['String']>;
  displayImage_ends_with?: Maybe<Scalars['String']>;
  displayImage_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not?: Maybe<Scalars['String']>;
  displayImage_not_contains?: Maybe<Scalars['String']>;
  displayImage_not_ends_with?: Maybe<Scalars['String']>;
  displayImage_not_in?: Maybe<Array<Scalars['String']>>;
  displayImage_not_starts_with?: Maybe<Scalars['String']>;
  displayImage_starts_with?: Maybe<Scalars['String']>;
  events?: Maybe<_EventFilter>;
  events_every?: Maybe<_EventFilter>;
  events_in?: Maybe<Array<_EventFilter>>;
  events_none?: Maybe<_EventFilter>;
  events_not?: Maybe<_EventFilter>;
  events_not_in?: Maybe<Array<_EventFilter>>;
  events_single?: Maybe<_EventFilter>;
  events_some?: Maybe<_EventFilter>;
  gallery?: Maybe<Array<Scalars['String']>>;
  gallery_contains?: Maybe<Array<Scalars['String']>>;
  gallery_ends_with?: Maybe<Array<Scalars['String']>>;
  gallery_not?: Maybe<Array<Scalars['String']>>;
  gallery_not_contains?: Maybe<Array<Scalars['String']>>;
  gallery_not_ends_with?: Maybe<Array<Scalars['String']>>;
  gallery_not_starts_with?: Maybe<Array<Scalars['String']>>;
  gallery_starts_with?: Maybe<Array<Scalars['String']>>;
  managedBy?: Maybe<_UserFilter>;
  managedBy_every?: Maybe<_UserFilter>;
  managedBy_in?: Maybe<Array<_UserFilter>>;
  managedBy_none?: Maybe<_UserFilter>;
  managedBy_not?: Maybe<_UserFilter>;
  managedBy_not_in?: Maybe<Array<_UserFilter>>;
  managedBy_single?: Maybe<_UserFilter>;
  managedBy_some?: Maybe<_UserFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_VenueFilter>>;
  reviews?: Maybe<_ReviewFilter>;
  reviews_every?: Maybe<_ReviewFilter>;
  reviews_in?: Maybe<Array<_ReviewFilter>>;
  reviews_none?: Maybe<_ReviewFilter>;
  reviews_not?: Maybe<_ReviewFilter>;
  reviews_not_in?: Maybe<Array<_ReviewFilter>>;
  reviews_single?: Maybe<_ReviewFilter>;
  reviews_some?: Maybe<_ReviewFilter>;
  venueId?: Maybe<Scalars['ID']>;
  venueId_contains?: Maybe<Scalars['ID']>;
  venueId_ends_with?: Maybe<Scalars['ID']>;
  venueId_in?: Maybe<Array<Scalars['ID']>>;
  venueId_not?: Maybe<Scalars['ID']>;
  venueId_not_contains?: Maybe<Scalars['ID']>;
  venueId_not_ends_with?: Maybe<Scalars['ID']>;
  venueId_not_in?: Maybe<Array<Scalars['ID']>>;
  venueId_not_starts_with?: Maybe<Scalars['ID']>;
  venueId_starts_with?: Maybe<Scalars['ID']>;
};

export type _VenueInput = {
  venueId: Scalars['ID'];
};

export enum _VenueOrdering {
  IdAsc = '_id_asc',
  IdDesc = '_id_desc',
  DisplayImageAsc = 'displayImage_asc',
  DisplayImageDesc = 'displayImage_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  VenueIdAsc = 'venueId_asc',
  VenueIdDesc = 'venueId_desc'
}

export type Address = {
  __typename?: 'Address';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  addressId: Scalars['ID'];
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  contact: Contact;
  location?: Maybe<_Neo4jPoint>;
  name?: Maybe<Scalars['String']>;
  postCode: Scalars['String'];
  showAddress: Scalars['Boolean'];
};


export type AddressContactArgs = {
  filter?: Maybe<_ContactFilter>;
};

export type AddressInput = {
  addressId?: Maybe<Scalars['ID']>;
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  location?: Maybe<_Neo4jPointInput>;
  name?: Maybe<Scalars['String']>;
  postCode: Scalars['String'];
  showAddress: Scalars['Boolean'];
};

export type Article = {
  __typename?: 'Article';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  articleId: Scalars['ID'];
  articleImage?: Maybe<Scalars['String']>;
  author: User;
  body: Scalars['String'];
  categories?: Maybe<Array<Maybe<ArticleCategory>>>;
  dateCreated?: Maybe<Scalars['Float']>;
  summary?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};


export type ArticleAuthorArgs = {
  filter?: Maybe<_UserFilter>;
};


export type ArticleCategoriesArgs = {
  filter?: Maybe<_ArticleCategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ArticleCategoryOrdering>>>;
};

export type ArticleCategory = {
  __typename?: 'ArticleCategory';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  parentCategory?: Maybe<ArticleCategory>;
  value: Scalars['String'];
};


export type ArticleCategoryParentCategoryArgs = {
  filter?: Maybe<_ArticleCategoryFilter>;
};

export type Business = {
  __typename?: 'Business';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  avgStars?: Maybe<Scalars['Float']>;
  bannerColour?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Scalars['String']>;
  businessId: Scalars['ID'];
  categories?: Maybe<Array<Maybe<BusinessCategory>>>;
  contact: Contact;
  dateCreated?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  managedBy?: Maybe<Array<Maybe<User>>>;
  name: Scalars['String'];
  references: Array<Maybe<ContentMeta>>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  slug?: Maybe<Scalars['String']>;
};


export type BusinessCategoriesArgs = {
  filter?: Maybe<_BusinessCategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessCategoryOrdering>>>;
};


export type BusinessContactArgs = {
  filter?: Maybe<_ContactFilter>;
};


export type BusinessManagedByArgs = {
  filter?: Maybe<_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
};


export type BusinessReferencesArgs = {
  filter?: Maybe<_ContentMetaFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ContentMetaOrdering>>>;
};


export type BusinessReviewsArgs = {
  filter?: Maybe<_ReviewFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>;
};

export type BusinessCategory = {
  __typename?: 'BusinessCategory';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  businessCategoryId: Scalars['ID'];
  businesses?: Maybe<Array<Maybe<Business>>>;
  name: Scalars['String'];
};


export type BusinessCategoryBusinessesArgs = {
  filter?: Maybe<_BusinessFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessOrdering>>>;
};

export type BusinessInput = {
  bannerImage?: Maybe<Scalars['String']>;
  businuessId?: Maybe<Scalars['ID']>;
  contact?: Maybe<ContactInput>;
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  userId: Scalars['ID'];
};

export type Contact = {
  __typename?: 'Contact';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  address: Array<Maybe<Address>>;
  contactId: Scalars['ID'];
  email: Array<Maybe<Scalars['String']>>;
  referencedBy: Contactable;
  socials: Array<Maybe<SocialLink>>;
  telephone: Array<Maybe<Scalars['String']>>;
};


export type ContactAddressArgs = {
  filter?: Maybe<_AddressFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AddressOrdering>>>;
};


export type ContactSocialsArgs = {
  filter?: Maybe<_SocialLinkFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SocialLinkOrdering>>>;
};

export type Contactable = Business | User | Venue;

export type ContactInput = {
  address?: Maybe<Array<Maybe<AddressInput>>>;
  contactId?: Maybe<Scalars['ID']>;
  email: Array<Maybe<Scalars['String']>>;
  socials: Array<Maybe<SocialLinkInput>>;
  telephone: Array<Maybe<Scalars['String']>>;
};

export type Content = {
  __typename?: 'Content';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  avgStars?: Maybe<Scalars['Float']>;
  contentId: Scalars['ID'];
  displayImage?: Maybe<Scalars['String']>;
  guests?: Maybe<Array<Maybe<User>>>;
  hosts?: Maybe<Array<Maybe<User>>>;
  meta: Array<Maybe<ContentMeta>>;
  release?: Maybe<_Neo4jDateTime>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  series?: Maybe<Array<Maybe<Series>>>;
  summary?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};


export type ContentGuestsArgs = {
  filter?: Maybe<_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
};


export type ContentHostsArgs = {
  filter?: Maybe<_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
};


export type ContentMetaArgs = {
  filter?: Maybe<_ContentMetaFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ContentMetaOrdering>>>;
};


export type ContentReviewsArgs = {
  filter?: Maybe<_ReviewFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>;
};


export type ContentSeriesArgs = {
  filter?: Maybe<_SeriesFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SeriesOrdering>>>;
};

export type ContentMeta = {
  __typename?: 'ContentMeta';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  content: Content;
  contentMetaId: Scalars['ID'];
  reference: ContentMetaReference;
  role: Scalars['String'];
};


export type ContentMetaContentArgs = {
  filter?: Maybe<_ContentFilter>;
};

export type ContentMetaReference = Business | User;

export type Event = {
  __typename?: 'Event';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  avgStars?: Maybe<Scalars['Float']>;
  displayImage?: Maybe<Scalars['String']>;
  end?: Maybe<_Neo4jDateTime>;
  eventId: Scalars['ID'];
  gallery: Array<Maybe<Scalars['String']>>;
  guests?: Maybe<Array<Maybe<User>>>;
  managedBy?: Maybe<Array<Maybe<User>>>;
  name: Scalars['String'];
  reviews?: Maybe<Array<Maybe<Review>>>;
  series?: Maybe<Array<Maybe<Series>>>;
  start?: Maybe<_Neo4jDateTime>;
  url?: Maybe<Scalars['String']>;
  venue?: Maybe<Venue>;
};


export type EventGuestsArgs = {
  filter?: Maybe<_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
};


export type EventManagedByArgs = {
  filter?: Maybe<_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
};


export type EventReviewsArgs = {
  filter?: Maybe<_ReviewFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>;
};


export type EventSeriesArgs = {
  filter?: Maybe<_SeriesFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SeriesOrdering>>>;
};


export type EventVenueArgs = {
  filter?: Maybe<_VenueFilter>;
};

export type GetbusinessByUserIdResponse = {
  __typename?: 'getbusinessByUserIdResponse';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  businesses: Array<Maybe<Business>>;
  ok?: Maybe<Scalars['Boolean']>;
};


export type GetbusinessByUserIdResponseBusinessesArgs = {
  filter?: Maybe<_BusinessFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessOrdering>>>;
};

export type HomePageResponse = {
  __typename?: 'HomePageResponse';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  featuredBlog?: Maybe<Ownable>;
  featuredBusinesses: Array<Maybe<Business>>;
  featuredVideos: Array<Maybe<Ownable>>;
  latestBusinesses: Array<Maybe<Business>>;
};


export type HomePageResponseFeaturedBusinessesArgs = {
  filter?: Maybe<_BusinessFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessOrdering>>>;
};


export type HomePageResponseFeaturedVideosArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type HomePageResponseLatestBusinessesArgs = {
  filter?: Maybe<_BusinessFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessOrdering>>>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};


export type LoginResponseUserArgs = {
  filter?: Maybe<_UserFilter>;
};

export type MixedMedia = Content | Event | Series;

export type Mutation = {
  __typename?: 'Mutation';
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_ADDRESS relationship. */
  AddAddressContact?: Maybe<_AddAddressContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the IN_BUSINESS_CATEGORY relationship. */
  AddBusinessCategories?: Maybe<_AddBusinessCategoriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the IN_BUSINESS_CATEGORY relationship. */
  AddBusinessCategoryBusinesses?: Maybe<_AddBusinessCategoryBusinessesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_CONTACT relationship. */
  AddBusinessContact?: Maybe<_AddBusinessContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the MANAGES relationship. */
  AddBusinessManagedBy?: Maybe<_AddBusinessManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the META_REFERENCE relationship. */
  AddBusinessReferences?: Maybe<_AddBusinessReferencesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the REVIEWS relationship. */
  AddBusinessReviews?: Maybe<_AddBusinessReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_ADDRESS relationship. */
  AddContactAddress?: Maybe<_AddContactAddressPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_SOCIAL relationship. */
  AddContactSocials?: Maybe<_AddContactSocialsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the APPEARS_IN relationship. */
  AddContentGuests?: Maybe<_AddContentGuestsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the MANAGES relationship. */
  AddContentHosts?: Maybe<_AddContentHostsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_META relationship. */
  AddContentMeta?: Maybe<_AddContentMetaPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_META relationship. */
  AddContentMetaContent?: Maybe<_AddContentMetaContentPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the REVIEWS relationship. */
  AddContentReviews?: Maybe<_AddContentReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the PART_OF relationship. */
  AddContentSeries?: Maybe<_AddContentSeriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the APPEARS_IN relationship. */
  AddEventGuests?: Maybe<_AddEventGuestsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the MANAGES relationship. */
  AddEventManagedBy?: Maybe<_AddEventManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the REVIEWS relationship. */
  AddEventReviews?: Maybe<_AddEventReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the PART_OF relationship. */
  AddEventSeries?: Maybe<_AddEventSeriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the LOCATED_AT relationship. */
  AddEventVenue?: Maybe<_AddEventVenuePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the WROTE relationship. */
  AddReviewUser?: Maybe<_AddReviewUserPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the PART_OF relationship. */
  AddSeriesContent?: Maybe<_AddSeriesContentPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the PART_OF relationship. */
  AddSeriesEvents?: Maybe<_AddSeriesEventsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the MANAGES relationship. */
  AddSeriesManagedBy?: Maybe<_AddSeriesManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the REVIEWS relationship. */
  AddSeriesReviews?: Maybe<_AddSeriesReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_SOCIAL relationship. */
  AddSocialLinkContact?: Maybe<_AddSocialLinkContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_CONTACT relationship. */
  AddUserContact?: Maybe<_AddUserContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the META_REFERENCE relationship. */
  AddUserReferences?: Maybe<_AddUserReferencesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the WROTE relationship. */
  AddUserReviews?: Maybe<_AddUserReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the HAS_CONTACT relationship. */
  AddVenueContact?: Maybe<_AddVenueContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the LOCATED_AT relationship. */
  AddVenueEvents?: Maybe<_AddVenueEventsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the MANAGES relationship. */
  AddVenueManagedBy?: Maybe<_AddVenueManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-relationships) the REVIEWS relationship. */
  AddVenueReviews?: Maybe<_AddVenueReviewsPayload>;
  authenticate?: Maybe<LoginResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Address node. */
  CreateAddress?: Maybe<Address>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Article node. */
  CreateArticle?: Maybe<Article>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a ArticleCategory node. */
  CreateArticleCategory?: Maybe<ArticleCategory>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Business node. */
  CreateBusiness?: Maybe<Business>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a BusinessCategory node. */
  CreateBusinessCategory?: Maybe<BusinessCategory>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Contact node. */
  CreateContact?: Maybe<Contact>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Content node. */
  CreateContent?: Maybe<Content>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a ContentMeta node. */
  CreateContentMeta?: Maybe<ContentMeta>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Event node. */
  CreateEvent?: Maybe<Event>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a getbusinessByUserIdResponse node. */
  CreategetbusinessByUserIdResponse?: Maybe<GetbusinessByUserIdResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a HomePageResponse node. */
  CreateHomePageResponse?: Maybe<HomePageResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a LoginResponse node. */
  CreateLoginResponse?: Maybe<LoginResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a RefreshTokenResponse node. */
  CreateRefreshTokenResponse?: Maybe<RefreshTokenResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Review node. */
  CreateReview?: Maybe<Review>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Series node. */
  CreateSeries?: Maybe<Series>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a SocialLink node. */
  CreateSocialLink?: Maybe<SocialLink>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a User node. */
  CreateUser?: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#create) for [creating](https://neo4j.com/docs/cypher-manual/4.1/clauses/create/#create-nodes) a Venue node. */
  CreateVenue?: Maybe<Venue>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Address node. */
  DeleteAddress?: Maybe<Address>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Article node. */
  DeleteArticle?: Maybe<Article>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a ArticleCategory node. */
  DeleteArticleCategory?: Maybe<ArticleCategory>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Business node. */
  DeleteBusiness?: Maybe<Business>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a BusinessCategory node. */
  DeleteBusinessCategory?: Maybe<BusinessCategory>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Contact node. */
  DeleteContact?: Maybe<Contact>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Content node. */
  DeleteContent?: Maybe<Content>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a ContentMeta node. */
  DeleteContentMeta?: Maybe<ContentMeta>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Event node. */
  DeleteEvent?: Maybe<Event>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a getbusinessByUserIdResponse node. */
  DeletegetbusinessByUserIdResponse?: Maybe<GetbusinessByUserIdResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a HomePageResponse node. */
  DeleteHomePageResponse?: Maybe<HomePageResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a LoginResponse node. */
  DeleteLoginResponse?: Maybe<LoginResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a RefreshTokenResponse node. */
  DeleteRefreshTokenResponse?: Maybe<RefreshTokenResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Review node. */
  DeleteReview?: Maybe<Review>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Series node. */
  DeleteSeries?: Maybe<Series>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a SocialLink node. */
  DeleteSocialLink?: Maybe<SocialLink>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a User node. */
  DeleteUser?: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#delete) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-single-node) a Venue node. */
  DeleteVenue?: Maybe<Venue>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Address node. */
  MergeAddress?: Maybe<Address>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_ADDRESS relationship. */
  MergeAddressContact?: Maybe<_MergeAddressContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Article node. */
  MergeArticle?: Maybe<Article>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a ArticleCategory node. */
  MergeArticleCategory?: Maybe<ArticleCategory>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Business node. */
  MergeBusiness?: Maybe<Business>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the IN_BUSINESS_CATEGORY relationship. */
  MergeBusinessCategories?: Maybe<_MergeBusinessCategoriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a BusinessCategory node. */
  MergeBusinessCategory?: Maybe<BusinessCategory>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the IN_BUSINESS_CATEGORY relationship. */
  MergeBusinessCategoryBusinesses?: Maybe<_MergeBusinessCategoryBusinessesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_CONTACT relationship. */
  MergeBusinessContact?: Maybe<_MergeBusinessContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the MANAGES relationship. */
  MergeBusinessManagedBy?: Maybe<_MergeBusinessManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the META_REFERENCE relationship. */
  MergeBusinessReferences?: Maybe<_MergeBusinessReferencesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the REVIEWS relationship. */
  MergeBusinessReviews?: Maybe<_MergeBusinessReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Contact node. */
  MergeContact?: Maybe<Contact>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_ADDRESS relationship. */
  MergeContactAddress?: Maybe<_MergeContactAddressPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_SOCIAL relationship. */
  MergeContactSocials?: Maybe<_MergeContactSocialsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Content node. */
  MergeContent?: Maybe<Content>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the APPEARS_IN relationship. */
  MergeContentGuests?: Maybe<_MergeContentGuestsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the MANAGES relationship. */
  MergeContentHosts?: Maybe<_MergeContentHostsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_META relationship. */
  MergeContentMeta?: Maybe<_MergeContentMetaPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_META relationship. */
  MergeContentMetaContent?: Maybe<_MergeContentMetaContentPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the REVIEWS relationship. */
  MergeContentReviews?: Maybe<_MergeContentReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the PART_OF relationship. */
  MergeContentSeries?: Maybe<_MergeContentSeriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Event node. */
  MergeEvent?: Maybe<Event>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the APPEARS_IN relationship. */
  MergeEventGuests?: Maybe<_MergeEventGuestsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the MANAGES relationship. */
  MergeEventManagedBy?: Maybe<_MergeEventManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the REVIEWS relationship. */
  MergeEventReviews?: Maybe<_MergeEventReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the PART_OF relationship. */
  MergeEventSeries?: Maybe<_MergeEventSeriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the LOCATED_AT relationship. */
  MergeEventVenue?: Maybe<_MergeEventVenuePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a getbusinessByUserIdResponse node. */
  MergegetbusinessByUserIdResponse?: Maybe<GetbusinessByUserIdResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a HomePageResponse node. */
  MergeHomePageResponse?: Maybe<HomePageResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a LoginResponse node. */
  MergeLoginResponse?: Maybe<LoginResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a RefreshTokenResponse node. */
  MergeRefreshTokenResponse?: Maybe<RefreshTokenResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Review node. */
  MergeReview?: Maybe<Review>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the WROTE relationship. */
  MergeReviewUser?: Maybe<_MergeReviewUserPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Series node. */
  MergeSeries?: Maybe<Series>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the PART_OF relationship. */
  MergeSeriesContent?: Maybe<_MergeSeriesContentPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the PART_OF relationship. */
  MergeSeriesEvents?: Maybe<_MergeSeriesEventsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the MANAGES relationship. */
  MergeSeriesManagedBy?: Maybe<_MergeSeriesManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the REVIEWS relationship. */
  MergeSeriesReviews?: Maybe<_MergeSeriesReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a SocialLink node. */
  MergeSocialLink?: Maybe<SocialLink>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_SOCIAL relationship. */
  MergeSocialLinkContact?: Maybe<_MergeSocialLinkContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a User node. */
  MergeUser?: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_CONTACT relationship. */
  MergeUserContact?: Maybe<_MergeUserContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the META_REFERENCE relationship. */
  MergeUserReferences?: Maybe<_MergeUserReferencesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the WROTE relationship. */
  MergeUserReviews?: Maybe<_MergeUserReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#merge) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-node-derived) a Venue node. */
  MergeVenue?: Maybe<Venue>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the HAS_CONTACT relationship. */
  MergeVenueContact?: Maybe<_MergeVenueContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the LOCATED_AT relationship. */
  MergeVenueEvents?: Maybe<_MergeVenueEventsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the MANAGES relationship. */
  MergeVenueManagedBy?: Maybe<_MergeVenueManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##merge-relationship) for [merging](https://neo4j.com/docs/cypher-manual/4.1/clauses/merge/#query-merge-relationships) the REVIEWS relationship. */
  MergeVenueReviews?: Maybe<_MergeVenueReviewsPayload>;
  refreshToken: RefreshTokenResponse;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_ADDRESS relationship. */
  RemoveAddressContact?: Maybe<_RemoveAddressContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the IN_BUSINESS_CATEGORY relationship. */
  RemoveBusinessCategories?: Maybe<_RemoveBusinessCategoriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the IN_BUSINESS_CATEGORY relationship. */
  RemoveBusinessCategoryBusinesses?: Maybe<_RemoveBusinessCategoryBusinessesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_CONTACT relationship. */
  RemoveBusinessContact?: Maybe<_RemoveBusinessContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the MANAGES relationship. */
  RemoveBusinessManagedBy?: Maybe<_RemoveBusinessManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the META_REFERENCE relationship. */
  RemoveBusinessReferences?: Maybe<_RemoveBusinessReferencesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the REVIEWS relationship. */
  RemoveBusinessReviews?: Maybe<_RemoveBusinessReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_ADDRESS relationship. */
  RemoveContactAddress?: Maybe<_RemoveContactAddressPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_SOCIAL relationship. */
  RemoveContactSocials?: Maybe<_RemoveContactSocialsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the APPEARS_IN relationship. */
  RemoveContentGuests?: Maybe<_RemoveContentGuestsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the MANAGES relationship. */
  RemoveContentHosts?: Maybe<_RemoveContentHostsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_META relationship. */
  RemoveContentMeta?: Maybe<_RemoveContentMetaPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_META relationship. */
  RemoveContentMetaContent?: Maybe<_RemoveContentMetaContentPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the REVIEWS relationship. */
  RemoveContentReviews?: Maybe<_RemoveContentReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the PART_OF relationship. */
  RemoveContentSeries?: Maybe<_RemoveContentSeriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the APPEARS_IN relationship. */
  RemoveEventGuests?: Maybe<_RemoveEventGuestsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the MANAGES relationship. */
  RemoveEventManagedBy?: Maybe<_RemoveEventManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the REVIEWS relationship. */
  RemoveEventReviews?: Maybe<_RemoveEventReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the PART_OF relationship. */
  RemoveEventSeries?: Maybe<_RemoveEventSeriesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the LOCATED_AT relationship. */
  RemoveEventVenue?: Maybe<_RemoveEventVenuePayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the WROTE relationship. */
  RemoveReviewUser?: Maybe<_RemoveReviewUserPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the PART_OF relationship. */
  RemoveSeriesContent?: Maybe<_RemoveSeriesContentPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the PART_OF relationship. */
  RemoveSeriesEvents?: Maybe<_RemoveSeriesEventsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the MANAGES relationship. */
  RemoveSeriesManagedBy?: Maybe<_RemoveSeriesManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the REVIEWS relationship. */
  RemoveSeriesReviews?: Maybe<_RemoveSeriesReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_SOCIAL relationship. */
  RemoveSocialLinkContact?: Maybe<_RemoveSocialLinkContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_CONTACT relationship. */
  RemoveUserContact?: Maybe<_RemoveUserContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the META_REFERENCE relationship. */
  RemoveUserReferences?: Maybe<_RemoveUserReferencesPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the WROTE relationship. */
  RemoveUserReviews?: Maybe<_RemoveUserReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the HAS_CONTACT relationship. */
  RemoveVenueContact?: Maybe<_RemoveVenueContactPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the LOCATED_AT relationship. */
  RemoveVenueEvents?: Maybe<_RemoveVenueEventsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the MANAGES relationship. */
  RemoveVenueManagedBy?: Maybe<_RemoveVenueManagedByPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/##add--remove-relationship) for [deleting](https://neo4j.com/docs/cypher-manual/4.1/clauses/delete/#delete-delete-relationships-only) the REVIEWS relationship. */
  RemoveVenueReviews?: Maybe<_RemoveVenueReviewsPayload>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Address node. */
  UpdateAddress?: Maybe<Address>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Article node. */
  UpdateArticle?: Maybe<Article>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a ArticleCategory node. */
  UpdateArticleCategory?: Maybe<ArticleCategory>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Business node. */
  UpdateBusiness?: Maybe<Business>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a BusinessCategory node. */
  UpdateBusinessCategory?: Maybe<BusinessCategory>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Contact node. */
  UpdateContact?: Maybe<Contact>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Content node. */
  UpdateContent?: Maybe<Content>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a ContentMeta node. */
  UpdateContentMeta?: Maybe<ContentMeta>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Event node. */
  UpdateEvent?: Maybe<Event>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a LoginResponse node. */
  UpdateLoginResponse?: Maybe<LoginResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a RefreshTokenResponse node. */
  UpdateRefreshTokenResponse?: Maybe<RefreshTokenResponse>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Review node. */
  UpdateReview?: Maybe<Review>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Series node. */
  UpdateSeries?: Maybe<Series>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a SocialLink node. */
  UpdateSocialLink?: Maybe<SocialLink>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a User node. */
  UpdateUser?: Maybe<User>;
  updateUserProfile?: Maybe<User>;
  /** [Generated mutation](https://grandstack.io/docs/graphql-schema-generation-augmentation/#update) for [updating](https://neo4j.com/docs/cypher-manual/4.1/clauses/set/#set-update-a-property) a Venue node. */
  UpdateVenue?: Maybe<Venue>;
  userCreateBusiness?: Maybe<Business>;
  userCreateReview?: Maybe<Review>;
};


export type MutationAddAddressContactArgs = {
  from: _ContactInput;
  to: _AddressInput;
};


export type MutationAddBusinessCategoriesArgs = {
  from: _BusinessInput;
  to: _BusinessCategoryInput;
};


export type MutationAddBusinessCategoryBusinessesArgs = {
  from: _BusinessInput;
  to: _BusinessCategoryInput;
};


export type MutationAddBusinessContactArgs = {
  from: _BusinessInput;
  to: _ContactInput;
};


export type MutationAddBusinessManagedByArgs = {
  from: _UserInput;
  to: _BusinessInput;
};


export type MutationAddBusinessReferencesArgs = {
  from: _ContentMetaInput;
  to: _BusinessInput;
};


export type MutationAddBusinessReviewsArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};


export type MutationAddContactAddressArgs = {
  from: _ContactInput;
  to: _AddressInput;
};


export type MutationAddContactSocialsArgs = {
  from: _ContactInput;
  to: _SocialLinkInput;
};


export type MutationAddContentGuestsArgs = {
  from: _UserInput;
  to: _ContentInput;
};


export type MutationAddContentHostsArgs = {
  from: _UserInput;
  to: _ContentInput;
};


export type MutationAddContentMetaArgs = {
  from: _ContentInput;
  to: _ContentMetaInput;
};


export type MutationAddContentMetaContentArgs = {
  from: _ContentInput;
  to: _ContentMetaInput;
};


export type MutationAddContentReviewsArgs = {
  from: _ReviewInput;
  to: _ContentInput;
};


export type MutationAddContentSeriesArgs = {
  from: _ContentInput;
  to: _SeriesInput;
};


export type MutationAddEventGuestsArgs = {
  from: _UserInput;
  to: _EventInput;
};


export type MutationAddEventManagedByArgs = {
  from: _UserInput;
  to: _EventInput;
};


export type MutationAddEventReviewsArgs = {
  from: _ReviewInput;
  to: _EventInput;
};


export type MutationAddEventSeriesArgs = {
  from: _EventInput;
  to: _SeriesInput;
};


export type MutationAddEventVenueArgs = {
  from: _EventInput;
  to: _VenueInput;
};


export type MutationAddReviewUserArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationAddSeriesContentArgs = {
  from: _ContentInput;
  to: _SeriesInput;
};


export type MutationAddSeriesEventsArgs = {
  from: _EventInput;
  to: _SeriesInput;
};


export type MutationAddSeriesManagedByArgs = {
  from: _UserInput;
  to: _SeriesInput;
};


export type MutationAddSeriesReviewsArgs = {
  from: _ReviewInput;
  to: _SeriesInput;
};


export type MutationAddSocialLinkContactArgs = {
  from: _ContactInput;
  to: _SocialLinkInput;
};


export type MutationAddUserContactArgs = {
  from: _UserInput;
  to: _ContactInput;
};


export type MutationAddUserReferencesArgs = {
  from: _ContentMetaInput;
  to: _UserInput;
};


export type MutationAddUserReviewsArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationAddVenueContactArgs = {
  from: _VenueInput;
  to: _ContactInput;
};


export type MutationAddVenueEventsArgs = {
  from: _EventInput;
  to: _VenueInput;
};


export type MutationAddVenueManagedByArgs = {
  from: _UserInput;
  to: _VenueInput;
};


export type MutationAddVenueReviewsArgs = {
  from: _ReviewInput;
  to: _VenueInput;
};


export type MutationAuthenticateArgs = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  fieldName: Scalars['String'];
  id: Scalars['String'];
};


export type MutationCreateAddressArgs = {
  addressId?: Maybe<Scalars['ID']>;
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  location?: Maybe<_Neo4jPointInput>;
  name?: Maybe<Scalars['String']>;
  postCode: Scalars['String'];
  showAddress: Scalars['Boolean'];
};


export type MutationCreateArticleArgs = {
  articleId?: Maybe<Scalars['ID']>;
  articleImage?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  dateCreated?: Maybe<Scalars['Float']>;
  summary?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};


export type MutationCreateArticleCategoryArgs = {
  key: Scalars['String'];
  value: Scalars['String'];
};


export type MutationCreateBusinessArgs = {
  bannerColour?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Scalars['String']>;
  businessId?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};


export type MutationCreateBusinessCategoryArgs = {
  businessCategoryId?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
};


export type MutationCreateContactArgs = {
  contactId?: Maybe<Scalars['ID']>;
  email: Array<Maybe<Scalars['String']>>;
  telephone: Array<Maybe<Scalars['String']>>;
};


export type MutationCreateContentArgs = {
  contentId?: Maybe<Scalars['ID']>;
  displayImage?: Maybe<Scalars['String']>;
  release?: Maybe<_Neo4jDateTimeInput>;
  summary?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};


export type MutationCreateContentMetaArgs = {
  contentMetaId?: Maybe<Scalars['ID']>;
  role: Scalars['String'];
};


export type MutationCreateEventArgs = {
  displayImage?: Maybe<Scalars['String']>;
  end?: Maybe<_Neo4jDateTimeInput>;
  eventId?: Maybe<Scalars['ID']>;
  gallery: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  start?: Maybe<_Neo4jDateTimeInput>;
  url?: Maybe<Scalars['String']>;
};


export type MutationCreategetbusinessByUserIdResponseArgs = {
  ok?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateLoginResponseArgs = {
  accessToken?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateRefreshTokenResponseArgs = {
  accessToken?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateReviewArgs = {
  date?: Maybe<_Neo4jDateTimeInput>;
  reviewId?: Maybe<Scalars['ID']>;
  stars: Scalars['Float'];
  text?: Maybe<Scalars['String']>;
};


export type MutationCreateSeriesArgs = {
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  seriesId?: Maybe<Scalars['ID']>;
};


export type MutationCreateSocialLinkArgs = {
  account: Scalars['String'];
  platform: Scalars['String'];
  socialLinkId?: Maybe<Scalars['ID']>;
};


export type MutationCreateUserArgs = {
  about?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  familyName?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationCreateVenueArgs = {
  displayImage?: Maybe<Scalars['String']>;
  gallery: Array<Maybe<Scalars['String']>>;
  name: Scalars['String'];
  venueId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteAddressArgs = {
  addressId: Scalars['ID'];
};


export type MutationDeleteArticleArgs = {
  articleId: Scalars['ID'];
};


export type MutationDeleteArticleCategoryArgs = {
  key: Scalars['String'];
};


export type MutationDeleteBusinessArgs = {
  businessId: Scalars['ID'];
};


export type MutationDeleteBusinessCategoryArgs = {
  businessCategoryId: Scalars['ID'];
};


export type MutationDeleteContactArgs = {
  contactId: Scalars['ID'];
};


export type MutationDeleteContentArgs = {
  contentId: Scalars['ID'];
};


export type MutationDeleteContentMetaArgs = {
  contentMetaId: Scalars['ID'];
};


export type MutationDeleteEventArgs = {
  eventId: Scalars['ID'];
};


export type MutationDeletegetbusinessByUserIdResponseArgs = {
  ok: Scalars['Boolean'];
};


export type MutationDeleteLoginResponseArgs = {
  accessToken: Scalars['String'];
};


export type MutationDeleteRefreshTokenResponseArgs = {
  accessToken: Scalars['String'];
};


export type MutationDeleteReviewArgs = {
  reviewId: Scalars['ID'];
};


export type MutationDeleteSeriesArgs = {
  seriesId: Scalars['ID'];
};


export type MutationDeleteSocialLinkArgs = {
  socialLinkId: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID'];
};


export type MutationDeleteVenueArgs = {
  venueId: Scalars['ID'];
};


export type MutationMergeAddressArgs = {
  addressId: Scalars['ID'];
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  location?: Maybe<_Neo4jPointInput>;
  name?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  showAddress?: Maybe<Scalars['Boolean']>;
};


export type MutationMergeAddressContactArgs = {
  from: _ContactInput;
  to: _AddressInput;
};


export type MutationMergeArticleArgs = {
  articleId: Scalars['ID'];
  articleImage?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Float']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type MutationMergeArticleCategoryArgs = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export type MutationMergeBusinessArgs = {
  bannerColour?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Scalars['String']>;
  businessId: Scalars['ID'];
  dateCreated?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type MutationMergeBusinessCategoriesArgs = {
  from: _BusinessInput;
  to: _BusinessCategoryInput;
};


export type MutationMergeBusinessCategoryArgs = {
  businessCategoryId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationMergeBusinessCategoryBusinessesArgs = {
  from: _BusinessInput;
  to: _BusinessCategoryInput;
};


export type MutationMergeBusinessContactArgs = {
  from: _BusinessInput;
  to: _ContactInput;
};


export type MutationMergeBusinessManagedByArgs = {
  from: _UserInput;
  to: _BusinessInput;
};


export type MutationMergeBusinessReferencesArgs = {
  from: _ContentMetaInput;
  to: _BusinessInput;
};


export type MutationMergeBusinessReviewsArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};


export type MutationMergeContactArgs = {
  contactId: Scalars['ID'];
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  telephone?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationMergeContactAddressArgs = {
  from: _ContactInput;
  to: _AddressInput;
};


export type MutationMergeContactSocialsArgs = {
  from: _ContactInput;
  to: _SocialLinkInput;
};


export type MutationMergeContentArgs = {
  contentId: Scalars['ID'];
  displayImage?: Maybe<Scalars['String']>;
  release?: Maybe<_Neo4jDateTimeInput>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type MutationMergeContentGuestsArgs = {
  from: _UserInput;
  to: _ContentInput;
};


export type MutationMergeContentHostsArgs = {
  from: _UserInput;
  to: _ContentInput;
};


export type MutationMergeContentMetaArgs = {
  from: _ContentInput;
  to: _ContentMetaInput;
};


export type MutationMergeContentMetaContentArgs = {
  from: _ContentInput;
  to: _ContentMetaInput;
};


export type MutationMergeContentReviewsArgs = {
  from: _ReviewInput;
  to: _ContentInput;
};


export type MutationMergeContentSeriesArgs = {
  from: _ContentInput;
  to: _SeriesInput;
};


export type MutationMergeEventArgs = {
  displayImage?: Maybe<Scalars['String']>;
  end?: Maybe<_Neo4jDateTimeInput>;
  eventId: Scalars['ID'];
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  start?: Maybe<_Neo4jDateTimeInput>;
  url?: Maybe<Scalars['String']>;
};


export type MutationMergeEventGuestsArgs = {
  from: _UserInput;
  to: _EventInput;
};


export type MutationMergeEventManagedByArgs = {
  from: _UserInput;
  to: _EventInput;
};


export type MutationMergeEventReviewsArgs = {
  from: _ReviewInput;
  to: _EventInput;
};


export type MutationMergeEventSeriesArgs = {
  from: _EventInput;
  to: _SeriesInput;
};


export type MutationMergeEventVenueArgs = {
  from: _EventInput;
  to: _VenueInput;
};


export type MutationMergegetbusinessByUserIdResponseArgs = {
  ok: Scalars['Boolean'];
};


export type MutationMergeLoginResponseArgs = {
  accessToken: Scalars['String'];
  ok?: Maybe<Scalars['Boolean']>;
};


export type MutationMergeRefreshTokenResponseArgs = {
  accessToken: Scalars['String'];
  ok?: Maybe<Scalars['Boolean']>;
};


export type MutationMergeReviewArgs = {
  date?: Maybe<_Neo4jDateTimeInput>;
  reviewId: Scalars['ID'];
  stars?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
};


export type MutationMergeReviewUserArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationMergeSeriesArgs = {
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  seriesId: Scalars['ID'];
};


export type MutationMergeSeriesContentArgs = {
  from: _ContentInput;
  to: _SeriesInput;
};


export type MutationMergeSeriesEventsArgs = {
  from: _EventInput;
  to: _SeriesInput;
};


export type MutationMergeSeriesManagedByArgs = {
  from: _UserInput;
  to: _SeriesInput;
};


export type MutationMergeSeriesReviewsArgs = {
  from: _ReviewInput;
  to: _SeriesInput;
};


export type MutationMergeSocialLinkArgs = {
  account?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  socialLinkId: Scalars['ID'];
};


export type MutationMergeSocialLinkContactArgs = {
  from: _ContactInput;
  to: _SocialLinkInput;
};


export type MutationMergeUserArgs = {
  about?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationMergeUserContactArgs = {
  from: _UserInput;
  to: _ContactInput;
};


export type MutationMergeUserReferencesArgs = {
  from: _ContentMetaInput;
  to: _UserInput;
};


export type MutationMergeUserReviewsArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationMergeVenueArgs = {
  displayImage?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  venueId: Scalars['ID'];
};


export type MutationMergeVenueContactArgs = {
  from: _VenueInput;
  to: _ContactInput;
};


export type MutationMergeVenueEventsArgs = {
  from: _EventInput;
  to: _VenueInput;
};


export type MutationMergeVenueManagedByArgs = {
  from: _UserInput;
  to: _VenueInput;
};


export type MutationMergeVenueReviewsArgs = {
  from: _ReviewInput;
  to: _VenueInput;
};


export type MutationRemoveAddressContactArgs = {
  from: _ContactInput;
  to: _AddressInput;
};


export type MutationRemoveBusinessCategoriesArgs = {
  from: _BusinessInput;
  to: _BusinessCategoryInput;
};


export type MutationRemoveBusinessCategoryBusinessesArgs = {
  from: _BusinessInput;
  to: _BusinessCategoryInput;
};


export type MutationRemoveBusinessContactArgs = {
  from: _BusinessInput;
  to: _ContactInput;
};


export type MutationRemoveBusinessManagedByArgs = {
  from: _UserInput;
  to: _BusinessInput;
};


export type MutationRemoveBusinessReferencesArgs = {
  from: _ContentMetaInput;
  to: _BusinessInput;
};


export type MutationRemoveBusinessReviewsArgs = {
  from: _ReviewInput;
  to: _BusinessInput;
};


export type MutationRemoveContactAddressArgs = {
  from: _ContactInput;
  to: _AddressInput;
};


export type MutationRemoveContactSocialsArgs = {
  from: _ContactInput;
  to: _SocialLinkInput;
};


export type MutationRemoveContentGuestsArgs = {
  from: _UserInput;
  to: _ContentInput;
};


export type MutationRemoveContentHostsArgs = {
  from: _UserInput;
  to: _ContentInput;
};


export type MutationRemoveContentMetaArgs = {
  from: _ContentInput;
  to: _ContentMetaInput;
};


export type MutationRemoveContentMetaContentArgs = {
  from: _ContentInput;
  to: _ContentMetaInput;
};


export type MutationRemoveContentReviewsArgs = {
  from: _ReviewInput;
  to: _ContentInput;
};


export type MutationRemoveContentSeriesArgs = {
  from: _ContentInput;
  to: _SeriesInput;
};


export type MutationRemoveEventGuestsArgs = {
  from: _UserInput;
  to: _EventInput;
};


export type MutationRemoveEventManagedByArgs = {
  from: _UserInput;
  to: _EventInput;
};


export type MutationRemoveEventReviewsArgs = {
  from: _ReviewInput;
  to: _EventInput;
};


export type MutationRemoveEventSeriesArgs = {
  from: _EventInput;
  to: _SeriesInput;
};


export type MutationRemoveEventVenueArgs = {
  from: _EventInput;
  to: _VenueInput;
};


export type MutationRemoveReviewUserArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationRemoveSeriesContentArgs = {
  from: _ContentInput;
  to: _SeriesInput;
};


export type MutationRemoveSeriesEventsArgs = {
  from: _EventInput;
  to: _SeriesInput;
};


export type MutationRemoveSeriesManagedByArgs = {
  from: _UserInput;
  to: _SeriesInput;
};


export type MutationRemoveSeriesReviewsArgs = {
  from: _ReviewInput;
  to: _SeriesInput;
};


export type MutationRemoveSocialLinkContactArgs = {
  from: _ContactInput;
  to: _SocialLinkInput;
};


export type MutationRemoveUserContactArgs = {
  from: _UserInput;
  to: _ContactInput;
};


export type MutationRemoveUserReferencesArgs = {
  from: _ContentMetaInput;
  to: _UserInput;
};


export type MutationRemoveUserReviewsArgs = {
  from: _UserInput;
  to: _ReviewInput;
};


export type MutationRemoveVenueContactArgs = {
  from: _VenueInput;
  to: _ContactInput;
};


export type MutationRemoveVenueEventsArgs = {
  from: _EventInput;
  to: _VenueInput;
};


export type MutationRemoveVenueManagedByArgs = {
  from: _UserInput;
  to: _VenueInput;
};


export type MutationRemoveVenueReviewsArgs = {
  from: _ReviewInput;
  to: _VenueInput;
};


export type MutationUpdateAddressArgs = {
  addressId: Scalars['ID'];
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  location?: Maybe<_Neo4jPointInput>;
  name?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  showAddress?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateArticleArgs = {
  articleId: Scalars['ID'];
  articleImage?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Float']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type MutationUpdateArticleCategoryArgs = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export type MutationUpdateBusinessArgs = {
  bannerColour?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Scalars['String']>;
  businessId: Scalars['ID'];
  dateCreated?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type MutationUpdateBusinessCategoryArgs = {
  businessCategoryId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateContactArgs = {
  contactId: Scalars['ID'];
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  telephone?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationUpdateContentArgs = {
  contentId: Scalars['ID'];
  displayImage?: Maybe<Scalars['String']>;
  release?: Maybe<_Neo4jDateTimeInput>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type MutationUpdateContentMetaArgs = {
  contentMetaId: Scalars['ID'];
  role?: Maybe<Scalars['String']>;
};


export type MutationUpdateEventArgs = {
  displayImage?: Maybe<Scalars['String']>;
  end?: Maybe<_Neo4jDateTimeInput>;
  eventId: Scalars['ID'];
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  start?: Maybe<_Neo4jDateTimeInput>;
  url?: Maybe<Scalars['String']>;
};


export type MutationUpdateLoginResponseArgs = {
  accessToken: Scalars['String'];
  ok?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateRefreshTokenResponseArgs = {
  accessToken: Scalars['String'];
  ok?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateReviewArgs = {
  date?: Maybe<_Neo4jDateTimeInput>;
  reviewId: Scalars['ID'];
  stars?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
};


export type MutationUpdateSeriesArgs = {
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  seriesId: Scalars['ID'];
};


export type MutationUpdateSocialLinkArgs = {
  account?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  socialLinkId: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  about?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationUpdateUserProfileArgs = {
  userInput?: Maybe<UserInput>;
};


export type MutationUpdateVenueArgs = {
  displayImage?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  venueId: Scalars['ID'];
};


export type MutationUserCreateBusinessArgs = {
  businessInput?: Maybe<BusinessInput>;
};


export type MutationUserCreateReviewArgs = {
  nodeName: Scalars['String'];
  stars: Scalars['Float'];
  targetId: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type Ownable = Business | Content | Event | Series | Venue;

export type Query = {
  __typename?: 'Query';
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Address type nodes. */
  Address?: Maybe<Array<Maybe<Address>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Article type nodes. */
  Article?: Maybe<Array<Maybe<Article>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for ArticleCategory type nodes. */
  ArticleCategory?: Maybe<Array<Maybe<ArticleCategory>>>;
  authenticate?: Maybe<LoginResponse>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Business type nodes. */
  Business?: Maybe<Array<Maybe<Business>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for BusinessCategory type nodes. */
  BusinessCategory?: Maybe<Array<Maybe<BusinessCategory>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Contact type nodes. */
  Contact?: Maybe<Array<Maybe<Contact>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Contactable type nodes. */
  Contactable?: Maybe<Array<Maybe<Contactable>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Content type nodes. */
  Content?: Maybe<Array<Maybe<Content>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for ContentMeta type nodes. */
  ContentMeta?: Maybe<Array<Maybe<ContentMeta>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for ContentMetaReference type nodes. */
  ContentMetaReference?: Maybe<Array<Maybe<ContentMetaReference>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Event type nodes. */
  Event?: Maybe<Array<Maybe<Event>>>;
  getBusinessByUserId?: Maybe<GetbusinessByUserIdResponse>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for getbusinessByUserIdResponse type nodes. */
  getbusinessByUserIdResponse?: Maybe<Array<Maybe<GetbusinessByUserIdResponse>>>;
  getTokens: LoginResponse;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for HomePageResponse type nodes. */
  HomePageResponse?: Maybe<Array<Maybe<HomePageResponse>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for LoginResponse type nodes. */
  LoginResponse?: Maybe<Array<Maybe<LoginResponse>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for MixedMedia type nodes. */
  MixedMedia?: Maybe<Array<Maybe<MixedMedia>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Ownable type nodes. */
  Ownable?: Maybe<Array<Maybe<Ownable>>>;
  ratingsCount?: Maybe<Array<Maybe<RatingCount>>>;
  refreshToken: RefreshTokenResponse;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for RefreshTokenResponse type nodes. */
  RefreshTokenResponse?: Maybe<Array<Maybe<RefreshTokenResponse>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Review type nodes. */
  Review?: Maybe<Array<Maybe<Review>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Series type nodes. */
  Series?: Maybe<Array<Maybe<Series>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for SocialLink type nodes. */
  SocialLink?: Maybe<Array<Maybe<SocialLink>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for User type nodes. */
  User?: Maybe<Array<Maybe<User>>>;
  userCount: Scalars['Int'];
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Venue type nodes. */
  Venue?: Maybe<Array<Maybe<Venue>>>;
};


export type QueryAddressArgs = {
  _id?: Maybe<Scalars['String']>;
  addressId?: Maybe<Scalars['ID']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  filter?: Maybe<_AddressFilter>;
  first?: Maybe<Scalars['Int']>;
  location?: Maybe<_Neo4jPointInput>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AddressOrdering>>>;
  postCode?: Maybe<Scalars['String']>;
  showAddress?: Maybe<Scalars['Boolean']>;
};


export type QueryArticleArgs = {
  _id?: Maybe<Scalars['String']>;
  articleId?: Maybe<Scalars['ID']>;
  articleImage?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Float']>;
  filter?: Maybe<_ArticleFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ArticleOrdering>>>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type QueryArticleCategoryArgs = {
  _id?: Maybe<Scalars['String']>;
  filter?: Maybe<_ArticleCategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ArticleCategoryOrdering>>>;
  value?: Maybe<Scalars['String']>;
};


export type QueryAuthenticateArgs = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  fieldName: Scalars['String'];
  filter?: Maybe<_LoginResponseFilter>;
  id: Scalars['String'];
};


export type QueryBusinessArgs = {
  _id?: Maybe<Scalars['String']>;
  bannerColour?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Scalars['String']>;
  businessId?: Maybe<Scalars['ID']>;
  dateCreated?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  filter?: Maybe<_BusinessFilter>;
  first?: Maybe<Scalars['Int']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessOrdering>>>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryBusinessCategoryArgs = {
  _id?: Maybe<Scalars['String']>;
  businessCategoryId?: Maybe<Scalars['ID']>;
  filter?: Maybe<_BusinessCategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessCategoryOrdering>>>;
};


export type QueryContactArgs = {
  _id?: Maybe<Scalars['String']>;
  contactId?: Maybe<Scalars['ID']>;
  email?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ContactFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ContactOrdering>>>;
  telephone?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryContactableArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryContentArgs = {
  _id?: Maybe<Scalars['String']>;
  contentId?: Maybe<Scalars['ID']>;
  displayImage?: Maybe<Scalars['String']>;
  filter?: Maybe<_ContentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ContentOrdering>>>;
  release?: Maybe<_Neo4jDateTimeInput>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type QueryContentMetaArgs = {
  _id?: Maybe<Scalars['String']>;
  contentMetaId?: Maybe<Scalars['ID']>;
  filter?: Maybe<_ContentMetaFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ContentMetaOrdering>>>;
  role?: Maybe<Scalars['String']>;
};


export type QueryContentMetaReferenceArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryEventArgs = {
  _id?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  end?: Maybe<_Neo4jDateTimeInput>;
  eventId?: Maybe<Scalars['ID']>;
  filter?: Maybe<_EventFilter>;
  first?: Maybe<Scalars['Int']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EventOrdering>>>;
  start?: Maybe<_Neo4jDateTimeInput>;
  url?: Maybe<Scalars['String']>;
};


export type QueryGetBusinessByUserIdArgs = {
  filter?: Maybe<_GetbusinessByUserIdResponseFilter>;
};


export type QueryGetbusinessByUserIdResponseArgs = {
  _id?: Maybe<Scalars['String']>;
  filter?: Maybe<_GetbusinessByUserIdResponseFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  ok?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Array<Maybe<_GetbusinessByUserIdResponseOrdering>>>;
};


export type QueryGetTokensArgs = {
  filter?: Maybe<_LoginResponseFilter>;
};


export type QueryHomePageResponseArgs = {
  _id?: Maybe<Scalars['String']>;
  filter?: Maybe<_HomePageResponseFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_HomePageResponseOrdering>>>;
};


export type QueryLoginResponseArgs = {
  _id?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  filter?: Maybe<_LoginResponseFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  ok?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Array<Maybe<_LoginResponseOrdering>>>;
};


export type QueryMixedMediaArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryOwnableArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryRefreshTokenArgs = {
  filter?: Maybe<_RefreshTokenResponseFilter>;
};


export type QueryRefreshTokenResponseArgs = {
  _id?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  filter?: Maybe<_RefreshTokenResponseFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  ok?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Array<Maybe<_RefreshTokenResponseOrdering>>>;
};


export type QueryReviewArgs = {
  _id?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateTimeInput>;
  filter?: Maybe<_ReviewFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>;
  reviewId?: Maybe<Scalars['ID']>;
  stars?: Maybe<Scalars['Float']>;
  text?: Maybe<Scalars['String']>;
};


export type QuerySeriesArgs = {
  _id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  filter?: Maybe<_SeriesFilter>;
  first?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SeriesOrdering>>>;
  seriesId?: Maybe<Scalars['ID']>;
};


export type QuerySocialLinkArgs = {
  _id?: Maybe<Scalars['String']>;
  account?: Maybe<Scalars['String']>;
  filter?: Maybe<_SocialLinkFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SocialLinkOrdering>>>;
  platform?: Maybe<Scalars['String']>;
  socialLinkId?: Maybe<Scalars['ID']>;
};


export type QueryUserArgs = {
  _id?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  filter?: Maybe<_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  forename?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  userId?: Maybe<Scalars['ID']>;
};


export type QueryVenueArgs = {
  _id?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  filter?: Maybe<_VenueFilter>;
  first?: Maybe<Scalars['Int']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_VenueOrdering>>>;
  venueId?: Maybe<Scalars['ID']>;
};

export type RatingCount = {
  __typename?: 'RatingCount';
  count: Scalars['Int'];
  stars: Scalars['Float'];
};

export type RefreshTokenResponse = {
  __typename?: 'RefreshTokenResponse';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  ok?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};


export type RefreshTokenResponseUserArgs = {
  filter?: Maybe<_UserFilter>;
};

export type Review = {
  __typename?: 'Review';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  date?: Maybe<_Neo4jDateTime>;
  item?: Maybe<Ownable>;
  reviewId: Scalars['ID'];
  stars: Scalars['Float'];
  text?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type ReviewUserArgs = {
  filter?: Maybe<_UserFilter>;
};

export type Series = {
  __typename?: 'Series';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  avgStars?: Maybe<Scalars['Float']>;
  content?: Maybe<Array<Maybe<Content>>>;
  description?: Maybe<Scalars['String']>;
  displayImage?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<Event>>>;
  managedBy?: Maybe<Array<Maybe<User>>>;
  name: Scalars['String'];
  reviews?: Maybe<Array<Maybe<Review>>>;
  seriesId: Scalars['ID'];
};


export type SeriesContentArgs = {
  filter?: Maybe<_ContentFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ContentOrdering>>>;
};


export type SeriesEventsArgs = {
  filter?: Maybe<_EventFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EventOrdering>>>;
};


export type SeriesManagedByArgs = {
  filter?: Maybe<_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
};


export type SeriesReviewsArgs = {
  filter?: Maybe<_ReviewFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>;
};

export type SocialLink = {
  __typename?: 'SocialLink';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  account: Scalars['String'];
  contact: Contact;
  platform: Scalars['String'];
  socialLinkId: Scalars['ID'];
};


export type SocialLinkContactArgs = {
  filter?: Maybe<_ContactFilter>;
};

export type SocialLinkInput = {
  account: Scalars['String'];
  platform: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  appearsIn: Array<Maybe<MixedMedia>>;
  contact: Contact;
  displayImage?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  familyName?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  manages: Array<Maybe<Ownable>>;
  numReviews?: Maybe<Scalars['Int']>;
  recommendations?: Maybe<Array<Maybe<Business>>>;
  references: Array<Maybe<ContentMeta>>;
  reviews: Array<Maybe<Review>>;
  userId: Scalars['ID'];
};


export type UserAppearsInArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserContactArgs = {
  filter?: Maybe<_ContactFilter>;
};


export type UserManagesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserRecommendationsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_BusinessOrdering>>>;
};


export type UserReferencesArgs = {
  filter?: Maybe<_ContentMetaFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ContentMetaOrdering>>>;
};


export type UserReviewsArgs = {
  filter?: Maybe<_ReviewFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>;
};

export type UserInput = {
  about?: Maybe<Scalars['String']>;
  contact?: Maybe<ContactInput>;
  displayImage?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  familyName?: Maybe<Scalars['String']>;
  forename?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type Venue = {
  __typename?: 'Venue';
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
  contact: Contact;
  displayImage?: Maybe<Scalars['String']>;
  events: Array<Maybe<Event>>;
  gallery: Array<Maybe<Scalars['String']>>;
  managedBy?: Maybe<Array<Maybe<User>>>;
  name: Scalars['String'];
  reviews?: Maybe<Array<Maybe<Review>>>;
  venueId: Scalars['ID'];
};


export type VenueContactArgs = {
  filter?: Maybe<_ContactFilter>;
};


export type VenueEventsArgs = {
  filter?: Maybe<_EventFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EventOrdering>>>;
};


export type VenueManagedByArgs = {
  filter?: Maybe<_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
};


export type VenueReviewsArgs = {
  filter?: Maybe<_ReviewFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReviewOrdering>>>;
};

export type AuthenticateQueryVariables = Exact<{
  fieldName: Scalars['String'];
  id: Scalars['String'];
  displayName: Scalars['String'];
  email: Scalars['String'];
}>;


export type AuthenticateQuery = (
  { __typename?: 'Query' }
  & { authenticate?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'displayName' | 'userId'>
      & { contact: (
        { __typename?: 'Contact' }
        & Pick<Contact, 'email'>
      ) }
    )> }
  )> }
);

export type GetAdminUserProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAdminUserProfileQuery = (
  { __typename?: 'Query' }
  & { User?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'displayName' | 'displayImage' | 'forename' | 'familyName' | 'userId' | 'about'>
    & { contact: (
      { __typename?: 'Contact' }
      & Pick<Contact, 'contactId' | 'email' | 'telephone'>
      & { address: Array<Maybe<(
        { __typename?: 'Address' }
        & Pick<Address, 'addressId' | 'showAddress' | 'addressLine1' | 'addressLine2' | 'postCode'>
        & { location?: Maybe<(
          { __typename?: '_Neo4jPoint' }
          & Pick<_Neo4jPoint, 'longitude' | 'latitude'>
        )> }
      )>>, socials: Array<Maybe<(
        { __typename?: 'SocialLink' }
        & Pick<SocialLink, 'platform' | 'account'>
      )>> }
    ) }
  )>>> }
);

export type GetBusinessBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetBusinessBySlugQuery = (
  { __typename?: 'Query' }
  & { Business?: Maybe<Array<Maybe<(
    { __typename?: 'Business' }
    & Pick<Business, 'businessId' | 'bannerColour' | 'name' | 'slug' | 'dateCreated'>
  )>>> }
);

export type GetBusinessByUserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBusinessByUserIdQuery = (
  { __typename?: 'Query' }
  & { Business?: Maybe<Array<Maybe<(
    { __typename?: 'Business' }
    & Pick<Business, 'businessId' | 'bannerColour' | 'name' | 'slug' | 'dateCreated'>
  )>>> }
);

export type GetTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTokensQuery = (
  { __typename?: 'Query' }
  & { getTokens: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken' | 'ok'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'displayName' | 'userId'>
      & { contact: (
        { __typename?: 'Contact' }
        & Pick<Contact, 'email'>
      ) }
    )> }
  ) }
);

export type RefreshTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenQuery = (
  { __typename?: 'Query' }
  & { refreshToken: (
    { __typename?: 'RefreshTokenResponse' }
    & Pick<RefreshTokenResponse, 'accessToken' | 'ok'>
  ) }
);

export type UpdateUserProfileMutationVariables = Exact<{
  userInput?: Maybe<UserInput>;
}>;


export type UpdateUserProfileMutation = (
  { __typename?: 'Mutation' }
  & { updateUserProfile?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'displayName' | 'displayImage' | 'forename' | 'familyName' | 'about'>
    & { contact: (
      { __typename?: 'Contact' }
      & Pick<Contact, 'contactId'>
    ) }
  )> }
);

export type UserCreateBusinessMutationVariables = Exact<{
  businessInput?: Maybe<BusinessInput>;
}>;


export type UserCreateBusinessMutation = (
  { __typename?: 'Mutation' }
  & { userCreateBusiness?: Maybe<(
    { __typename?: 'Business' }
    & Pick<Business, 'businessId' | 'name' | 'dateCreated' | 'bannerColour' | 'slug'>
    & { managedBy?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'displayName'>
    )>>> }
  )> }
);


export const AuthenticateDocument = gql`
    query Authenticate($fieldName: String!, $id: String!, $displayName: String!, $email: String!) {
  authenticate(fieldName: $fieldName, id: $id, displayName: $displayName, email: $email) {
    accessToken
    user {
      displayName
      userId
      contact {
        email
      }
    }
  }
}
    `;

/**
 * __useAuthenticateQuery__
 *
 * To run a query within a React component, call `useAuthenticateQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthenticateQuery({
 *   variables: {
 *      fieldName: // value for 'fieldName'
 *      id: // value for 'id'
 *      displayName: // value for 'displayName'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAuthenticateQuery(baseOptions: Apollo.QueryHookOptions<AuthenticateQuery, AuthenticateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthenticateQuery, AuthenticateQueryVariables>(AuthenticateDocument, options);
      }
export function useAuthenticateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthenticateQuery, AuthenticateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthenticateQuery, AuthenticateQueryVariables>(AuthenticateDocument, options);
        }
export type AuthenticateQueryHookResult = ReturnType<typeof useAuthenticateQuery>;
export type AuthenticateLazyQueryHookResult = ReturnType<typeof useAuthenticateLazyQuery>;
export type AuthenticateQueryResult = Apollo.QueryResult<AuthenticateQuery, AuthenticateQueryVariables>;
export const GetAdminUserProfileDocument = gql`
    query getAdminUserProfile($id: ID!) {
  User(userId: $id) {
    displayName
    displayImage
    forename
    familyName
    userId
    about
    contact {
      contactId
      email
      telephone
      address {
        addressId
        showAddress
        addressLine1
        addressLine2
        postCode
        location {
          longitude
          latitude
        }
      }
      socials {
        platform
        account
      }
    }
  }
}
    `;

/**
 * __useGetAdminUserProfileQuery__
 *
 * To run a query within a React component, call `useGetAdminUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminUserProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdminUserProfileQuery(baseOptions: Apollo.QueryHookOptions<GetAdminUserProfileQuery, GetAdminUserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdminUserProfileQuery, GetAdminUserProfileQueryVariables>(GetAdminUserProfileDocument, options);
      }
export function useGetAdminUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminUserProfileQuery, GetAdminUserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdminUserProfileQuery, GetAdminUserProfileQueryVariables>(GetAdminUserProfileDocument, options);
        }
export type GetAdminUserProfileQueryHookResult = ReturnType<typeof useGetAdminUserProfileQuery>;
export type GetAdminUserProfileLazyQueryHookResult = ReturnType<typeof useGetAdminUserProfileLazyQuery>;
export type GetAdminUserProfileQueryResult = Apollo.QueryResult<GetAdminUserProfileQuery, GetAdminUserProfileQueryVariables>;
export const GetBusinessBySlugDocument = gql`
    query getBusinessBySlug($slug: String!) {
  Business(slug: $slug) {
    businessId
    bannerColour
    name
    slug
    dateCreated
  }
}
    `;

/**
 * __useGetBusinessBySlugQuery__
 *
 * To run a query within a React component, call `useGetBusinessBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusinessBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusinessBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBusinessBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetBusinessBySlugQuery, GetBusinessBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBusinessBySlugQuery, GetBusinessBySlugQueryVariables>(GetBusinessBySlugDocument, options);
      }
export function useGetBusinessBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBusinessBySlugQuery, GetBusinessBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBusinessBySlugQuery, GetBusinessBySlugQueryVariables>(GetBusinessBySlugDocument, options);
        }
export type GetBusinessBySlugQueryHookResult = ReturnType<typeof useGetBusinessBySlugQuery>;
export type GetBusinessBySlugLazyQueryHookResult = ReturnType<typeof useGetBusinessBySlugLazyQuery>;
export type GetBusinessBySlugQueryResult = Apollo.QueryResult<GetBusinessBySlugQuery, GetBusinessBySlugQueryVariables>;
export const GetBusinessByUserIdDocument = gql`
    query getBusinessByUserId {
  Business {
    businessId
    bannerColour
    name
    slug
    dateCreated
  }
}
    `;

/**
 * __useGetBusinessByUserIdQuery__
 *
 * To run a query within a React component, call `useGetBusinessByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusinessByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusinessByUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBusinessByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<GetBusinessByUserIdQuery, GetBusinessByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBusinessByUserIdQuery, GetBusinessByUserIdQueryVariables>(GetBusinessByUserIdDocument, options);
      }
export function useGetBusinessByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBusinessByUserIdQuery, GetBusinessByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBusinessByUserIdQuery, GetBusinessByUserIdQueryVariables>(GetBusinessByUserIdDocument, options);
        }
export type GetBusinessByUserIdQueryHookResult = ReturnType<typeof useGetBusinessByUserIdQuery>;
export type GetBusinessByUserIdLazyQueryHookResult = ReturnType<typeof useGetBusinessByUserIdLazyQuery>;
export type GetBusinessByUserIdQueryResult = Apollo.QueryResult<GetBusinessByUserIdQuery, GetBusinessByUserIdQueryVariables>;
export const GetTokensDocument = gql`
    query GetTokens {
  getTokens {
    accessToken
    ok
    user {
      displayName
      userId
      contact {
        email
      }
    }
  }
}
    `;

/**
 * __useGetTokensQuery__
 *
 * To run a query within a React component, call `useGetTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokensQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTokensQuery(baseOptions?: Apollo.QueryHookOptions<GetTokensQuery, GetTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokensQuery, GetTokensQueryVariables>(GetTokensDocument, options);
      }
export function useGetTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokensQuery, GetTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokensQuery, GetTokensQueryVariables>(GetTokensDocument, options);
        }
export type GetTokensQueryHookResult = ReturnType<typeof useGetTokensQuery>;
export type GetTokensLazyQueryHookResult = ReturnType<typeof useGetTokensLazyQuery>;
export type GetTokensQueryResult = Apollo.QueryResult<GetTokensQuery, GetTokensQueryVariables>;
export const RefreshTokenDocument = gql`
    query RefreshToken {
  refreshToken {
    accessToken
    ok
  }
}
    `;

/**
 * __useRefreshTokenQuery__
 *
 * To run a query within a React component, call `useRefreshTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRefreshTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenQuery(baseOptions?: Apollo.QueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(RefreshTokenDocument, options);
      }
export function useRefreshTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RefreshTokenQuery, RefreshTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RefreshTokenQuery, RefreshTokenQueryVariables>(RefreshTokenDocument, options);
        }
export type RefreshTokenQueryHookResult = ReturnType<typeof useRefreshTokenQuery>;
export type RefreshTokenLazyQueryHookResult = ReturnType<typeof useRefreshTokenLazyQuery>;
export type RefreshTokenQueryResult = Apollo.QueryResult<RefreshTokenQuery, RefreshTokenQueryVariables>;
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($userInput: UserInput) {
  updateUserProfile(userInput: $userInput) {
    userId
    displayName
    displayImage
    forename
    familyName
    about
    contact {
      contactId
    }
  }
}
    `;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const UserCreateBusinessDocument = gql`
    mutation UserCreateBusiness($businessInput: BusinessInput) {
  userCreateBusiness(businessInput: $businessInput) {
    businessId
    name
    dateCreated
    bannerColour
    slug
    managedBy {
      displayName
    }
  }
}
    `;
export type UserCreateBusinessMutationFn = Apollo.MutationFunction<UserCreateBusinessMutation, UserCreateBusinessMutationVariables>;

/**
 * __useUserCreateBusinessMutation__
 *
 * To run a mutation, you first call `useUserCreateBusinessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCreateBusinessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCreateBusinessMutation, { data, loading, error }] = useUserCreateBusinessMutation({
 *   variables: {
 *      businessInput: // value for 'businessInput'
 *   },
 * });
 */
export function useUserCreateBusinessMutation(baseOptions?: Apollo.MutationHookOptions<UserCreateBusinessMutation, UserCreateBusinessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserCreateBusinessMutation, UserCreateBusinessMutationVariables>(UserCreateBusinessDocument, options);
      }
export type UserCreateBusinessMutationHookResult = ReturnType<typeof useUserCreateBusinessMutation>;
export type UserCreateBusinessMutationResult = Apollo.MutationResult<UserCreateBusinessMutation>;
export type UserCreateBusinessMutationOptions = Apollo.BaseMutationOptions<UserCreateBusinessMutation, UserCreateBusinessMutationVariables>;