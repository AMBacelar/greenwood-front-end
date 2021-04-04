import AWS from 'aws-sdk';

const config = {
  bucketName: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
  bucketRegion: process.env.NEXT_PUBLIC_S3_BUCKET_REGION!,
  accessKey: process.env.NEXT_PUBLIC_S3_BUCKET_ACCESS_KEY!,
  secretKey: process.env.NEXT_PUBLIC_S3_BUCKET_SECRET_KEY!,
};

export default (imageData, imageName: string) => {
  const s3Client = new AWS.S3({
    signatureVersion: 'v4',
    accessKeyId: config.accessKey,
    secretAccessKey: config.secretKey,
    region: config.bucketRegion,
  });

  s3Client.upload(
    {
      ACL: 'public-read',
      Body: imageData,
      Bucket: config.bucketName,
      ContentType: 'image/png',
      Key: imageName,
    },
    (err: any) => {
      if (err) {
        throw err;
      }
      console.log(`Successfully uploaded ${imageName}!`);
    }
  );
};
