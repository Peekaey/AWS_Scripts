const AWS = require("aws-sdk");
AWS.config.loadFromPath("AwsConfig.json");
const s3 = new AWS.S3();

const bucketName = process.env.bucketName;

async function clearS3Bucket() {
  try {
    // List all objects in the bucket
    const listObjectsParams = {
      Bucket: bucketName,
    };
    const listedObjects = await s3.listObjectsV2(listObjectsParams).promise();

    // Create an array of objects to be deleted
    const deleteParams = {
      Bucket: bucketName,
      Delete: {
        Objects: [],
      },
    };
    listedObjects.Contents.forEach(({ Key }) => {
      deleteParams.Delete.Objects.push({ Key });
    });

    // Delete the objects
    if (deleteParams.Delete.Objects.length > 0) {
      await s3.deleteObjects(deleteParams).promise();
    }
  } catch (error) {}
}
