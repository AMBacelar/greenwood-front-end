import { useState } from 'react';
import { Business, useGetBusinessByUserIdQuery } from "generated/graphql"
import styles from './Profile.module.scss'
import classNames from 'classnames';
import { useRouter } from 'next/router'

export const Businesses = () => {
  const { data, loading, error } = useGetBusinessByUserIdQuery();
  const router = useRouter();

  if (error) {
    return <>error</>
  }

  if (loading) {
    return <>...loading</>
  }

  if (data) {
    const BusinessCard = (business: Business, key: number) => {
      const dateCreated = new Date(business.dateCreated!).toString();
      return (
        <div key={key} onClick={() => router.push(`/dashboard/business/${business.businessId}`)}>
          <h1>{business.name}</h1>
          <p>{business.description}</p>
          <p>{dateCreated}</p>
        </div>
      )
    }

    const cardArray = data.Business?.map(BusinessCard)

    return (
      <div className={styles.wrapper}>
        {cardArray}
      </div>
    )
  }
}
