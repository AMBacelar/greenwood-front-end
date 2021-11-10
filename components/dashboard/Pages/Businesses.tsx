import { useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router'
import { useFormik } from "formik";
import CheckboxComp from "components/common/Checkbox/Checkbox";
import ImageUpload from "components/common/ImageUpload/ImageUpload";
import TextArea from "components/common/TextArea/TextArea";
import TextInputField from "components/common/TextInput/TextInput";

import { Business, useGetBusinessByUserIdQuery, useUserCreateBusinessMutation } from "generated/graphql"
import styles from './Profile.module.scss'
import { imageUpload } from "utils/imageUpload";

export const Businesses = () => {
  const { data, loading, error } = useGetBusinessByUserIdQuery();
  const router = useRouter();
  const [showNewBusinessForm, setShowNewBusinessForm] = useState(false)

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

    const cardArray = data.Business?.map(BusinessCard);

    return (
      <div className={styles.wrapper}>
        <button onClick={() => setShowNewBusinessForm(!showNewBusinessForm)}>Create Business</button> <br />
        {JSON.stringify(data.Business, null, 2)}
        {cardArray}
        {showNewBusinessForm && <NewBusinessForm />}
      </div>
    )
  }
}

const NewBusinessForm = () => {
  const [displayImageBlob, setDisplayImageBlob] = useState(null);
  const [displayImageValue, setDisplayImageValue] = useState('');
  const [bannerImageBlob, setBannerImageBlob] = useState(null);
  const [bannerImageValue, setBannerImageValue] = useState('');
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      email: '',
      telephone: '',
      addressName: '',
      addressLine1: '',
      addressLine2: '',
      postCode: '',
      showAddress: false,
      socials: '',
    },
    onSubmit: async (values) => {
      // upload the image
      try {
        const displayImageName = `display-image-${formik.values.name}.png`;
        const bannerImageName = `banner-image-${formik.values.name}.png`;
        const displayImageData = await imageUpload(displayImageBlob, displayImageName);
        const bannerImageData = await imageUpload(bannerImageBlob, bannerImageName);
        setDisplayImageValue(displayImageData.Location);
        setBannerImageValue(bannerImageData.Location);
        console.log(formik.values)
      } catch (error) {
        console.log("error, image upload didn't work...")
      } finally {
        userCreateBusinessMutation()
      }
    }
  });

  const [userCreateBusinessMutation, { data, loading, error }] = useUserCreateBusinessMutation({
    variables: {
      businessInput: {
        name: formik.values.name,
        displayImage: displayImageValue,
        bannerImage: bannerImageValue,
        description: formik.values.description,
        contact: {
          socials: [],
          email: [formik.values.email],
          telephone: [formik.values.telephone]
        }
      }
    },
  });
  if (error) {
    console.log("Something went wrong");
  }

  if (data) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        Display Image
        <img src={displayImageValue} />
        <ImageUpload
          imageUrl={displayImageValue}
          onImageChange={setDisplayImageBlob}
        />

        Banner Image
        <img src={bannerImageValue} />
        <ImageUpload
          imageUrl={bannerImageValue}
          onImageChange={setBannerImageBlob}
          aspectRatio={21 / 9}
        />

        <TextInputField
          id='name'
          label='Name'
          value={formik.values.name}
          rawOnChange={formik.handleChange}
        />

        <TextInputField
          id='description'
          label='Description'
          value={formik.values.description}
          rawOnChange={formik.handleChange}
        />
        <br />
        <br />
        <TextInputField
          id='email'
          label='Email'
          value={formik.values.email}
          rawOnChange={formik.handleChange}
        />
        <TextInputField
          id='telephone'
          label='Telephone'
          value={formik.values.telephone}
          rawOnChange={formik.handleChange}
        />
        <TextInputField
          id='addressName'
          label='Address Name/Number'
          value={formik.values.addressName}
          rawOnChange={formik.handleChange}
        />
        <TextInputField
          id='addressLine1'
          label='Address Line 1'
          value={formik.values.addressLine1}
          rawOnChange={formik.handleChange}
        />
        <TextInputField
          id='addressLine2'
          label='Address Line 2'
          value={formik.values.addressLine2}
          rawOnChange={formik.handleChange}
        />
        <TextInputField
          id='postCode'
          label='Post Code'
          value={formik.values.postCode}
          rawOnChange={formik.handleChange}
        />
        <CheckboxComp
          id='showAddress'
          label='Show Address'
          isChecked={formik.values.showAddress}
          handleChange={formik.handleChange}
        />
        social area
        <br />
        <button type="submit">save</button>
      </form>
    </>
  )
}
