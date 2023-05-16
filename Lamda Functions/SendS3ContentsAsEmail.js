const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);

const dotenv = require("dotenv").config();
const AWS = require("aws-sdk");
AWS.config.loadFromPath("AwsConfig.json");
const s3 = new AWS.S3();

const fs = require("fs");

const bucketName = process.env.bucketName;

async function SendS3ContentAsEmail() {
  const params = { Bucket: bucketName };
  try {
    const data = await s3.listObjectsV2(params).promise();
    const attachments = [];
    for (const obj of data.Contents) {
      console.log(obj.Key);
      const file = await s3
        .getObject({ Bucket: bucketName, Key: obj.Key })
        .promise();
      const fileData = file.Body.toString("base64");
      const attachment = {
        content: fileData,
        filename: obj.Key,
        type: file.ContentType,
        disposition: "attachment",
      };
      attachments.push(attachment);
    }

    const msg = {
      to: process.env.recipient,
      from: process.env.sender,
      subject: "Subject",
      html: "Message",
      attachments: attachments,
    };
    await sgMail.send(msg);
  } catch (err) {
    console.error(err);
  }
}
