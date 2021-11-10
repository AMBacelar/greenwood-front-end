const imageUrl = (imageUrl: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_ROOT_URL}${imageUrl}`;
};

export default imageUrl;
