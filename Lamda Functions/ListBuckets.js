const AWS = require("aws-sdk");
AWS.config.loadFromPath("AwsConfig.json");
const s3 = new AWS.S3();


List S3 Buckets
async function GetS3Contents() {
  try {
    const s3 = new AWS.S3();
    const data = await s3.listBuckets().promise();
    console.log("S3 Buckets:", data.Buckets);
  } catch (err) {
    console.error("Error:", err);
  }

}
