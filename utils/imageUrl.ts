export default (imageUrl: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_ROOT_URL}${imageUrl}`;
};
