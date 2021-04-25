import { useState } from 'react';
import { Business, useGetBusinessByUserIdQuery } from "generated/graphql"
import styles from './Profile.module.scss'
import classNames from 'classnames';

export const Businesses = () => {
  const { data, loading, error } = useGetBusinessByUserIdQuery();
  const [selectedBusiness, setSelectedBusiness] = useState(null);

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
        <div key={key} className={classNames(selectedBusiness === key ? 'outline' : '')} onClick={() => setSelectedBusiness(key)}>
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
