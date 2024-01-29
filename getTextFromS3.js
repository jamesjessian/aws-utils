const AWS = require("aws-sdk");

async function getTextFromS3(bucketName, prefix) {
  try {
    const s3 = new AWS.S3();
    const params = {
      Bucket: bucketName,
      Key: prefix,
    };
    const data = await s3.getObject(params).promise();
    const text = data.Body.toString();
    return text;
  } catch (err) {
    console.log("getTextFromS3 - Error:", err.message);
    return "";
  }
}

module.exports = getTextFromS3;
