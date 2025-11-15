// Install dependencies:
// npm install @aws-sdk/s3-request-presigner @aws-sdk/client-s3 @webshotapi/client

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { Client } = require("@webshotapi/client");

const generateSignedUrl = async(key, bucket_name) => {
  const awsClient = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
  });

  const command = new PutObjectCommand({
    Bucket: bucket_name,
    Key: key //uniquer file name. Our server will have access only for upload result file with that file name.
  });

  const url = await getSignedUrl(
    awsClient,
    command,
    { expiresIn: 120 } // Specify the expiration time for the signed URL in seconds. In this example, the link will expire after 120 seconds, ensuring that no one can upload files to your S3 bucket beyond this timeframe.
  );
  return url;
}

(async () => {

  const aws_signed_url = await generateSignedUrl(
     'test-file.jpg',
     'test-bucket'
  );

  try {
    const client = new Client({
      api_key: process.env.WEBSHOTAPI_KEY
    });
    const result = await client.screenshot({
            url: "https://www.example.com",
            viewport_width: 1920,
            response_save_cloud: "aws",
            s3_signed_url: aws_signed_url,
      }
    );


    /**
     * Should return:
     * {
     *   html: '',
     *   text: '',
     *   screenshot_url: '',
     *   selectors: [],
     *   words: [],
     *   page_properties: {},
     *   status_code: 200,
     *   saved_in_cloud: { completed: true }
     * }
     */
    console.log(result.json());

  } catch (err) {
    console.log(`Error: ${err.message}`);
    console.log(err.stack);
  }
})();
