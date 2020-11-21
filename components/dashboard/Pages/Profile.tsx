import CheckboxComp from "components/common/Checkbox/Checkbox";
import TextArea from "components/common/TextArea/TextArea";
import TextInputField from "components/common/TextInput/TextInput";
import { useFormik } from "formik";
import { useGetAdminUserProfileQuery, User, useUpdateUserProfileMutation } from "generated/graphql"
import styles from './Profile.scss'

type Props = {
  user: User
}

export const Profile = ({ user }: Props) => {
  const { data, loading, error } = useGetAdminUserProfileQuery({
    variables: {
      id: user.userId
    },
  });

  if (error) {
    return <>error</>
  }

  if (loading) {
    return <>...loading</>
  }

  return (
    <div className={styles.wrapper}>
      <ProfileForm user={user} data={data?.User[0]} />
    </div>
  )
}

const ProfileForm = (props: any) => {

  console.log(props.data);

  const formik = useFormik({
    initialValues: {
      displayName: props.data.displayName,
      forename: props.data.forename,
      familyName: props.data.familyName,
      about: props.data.about,

      email: props.data.contact.email[0],
      telephone: props.data.contact.telephone[0],

      addressName: props.data.contact.address[0]?.name || '',
      addressLine1: props.data.contact.address[0]?.addressLine1 || '',
      addressLine2: props.data.contact.address[0]?.addressLine2 || '',
      postCode: props.data.contact.address[0]?.postCode || '',
      showAddress: props.data.contact.address[0]?.showAddress || false,

      socials: props.data.contact.socials[0],
    },
    onSubmit: values => {
      updateUserProfileMutation()
      console.log(values)
    }
  });

  const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
    variables: {
      id: props.user.userId,
      displayName: formik.values.displayName,
      forename: formik.values.forename,
      familyName: formik.values.familyName,
      about: formik.values.about,
    },
  });

  if (error) {
    console.log("Something went wrong");
  }

  if (data) {
    console.log(data);
  }

  console.log(props.user)

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        Profile Image
        <button>Upload Image</button>

        <TextInputField
          id='displayName'
          label='Display Name'
          value={formik.values.displayName}
          rawOnChange={formik.handleChange}
        />

        <TextInputField
          id='forename'
          label='Forename'
          value={formik.values.forename}
          rawOnChange={formik.handleChange}
        />

        <TextInputField
          id='familyName'
          label='Family Name'
          value={formik.values.familyName}
          rawOnChange={formik.handleChange}
        />

        <TextArea
          id='about'
          label='About'
          value={formik.values.about}
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
