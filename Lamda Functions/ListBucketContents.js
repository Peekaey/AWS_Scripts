const AWS = require("aws-sdk");
AWS.config.loadFromPath("AwsConfig.json");
const s3 = new AWS.S3();

const bucketName = process.env.bucketName;

// Functining List Bucket Contents
async function getS3Reports() {
  console.log("Listing Bucket Contents");
  const params = { Bucket: bucketName };
  try {
    const data = await s3.listObjectsV2(params).promise();
    console.log("Bucket Contents:");
    data.Contents.forEach(function (obj) {
      console.log(obj.Key);
    });
  } catch (err) {
    console.error(err);
  }
}
