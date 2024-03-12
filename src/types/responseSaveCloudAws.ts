export interface ResponseSaveCloudAws {
  /**
   * Save results file direct in your cloud bucket. Available: AWS S3. If you select this option for save data transfer You will receive simple json only with bucket name and key name
   * @type string
   * @example aws
   * @default ''
   */
  response_save_cloud: "aws";

  /**
   * A signed URL for uploading to an Amazon S3 (Simple Storage Service) bucket is a URL that includes authentication information in the query string. This allows clients with the URL to upload objects to the specified S3 bucket without needing AWS security credentials.
   * Signed URLs are often used to grant temporary, time-limited access to upload or download objects from S3.
   *
   * Read more how to generate signed url:
   * https://webshotapi.com/blog/how-to-generate-signed-url-for-s3-aws/
   *
   * @type string
   * @example https://test-bucket.s3.us-west-2.amazonaws.com/image.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5WGOESUXKDGYQWRE%2F20240308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240308T140342Z&X-Amz-Expires=900&X-Amz-Security-Token=FwoGZXIvYXdzEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDE97mU8%2ByxNyfdTWFCKnAQCrn89ZPDRNqhcPv6OH96907gNxgVqaqvQ043dpNH0X42%2F2A8EGPdHrMDk0aN%2Bs48MD2uyC5Sj6e78dtOPBgUujDo4XJNzX%2BFpBI1OIoF%2BNA56yYcDRk%2Fko2knorDV4qkiPj%2Fv6FqkWQ2G0vIHhdmvxBkaKH3IKAOTZuljyAxV5hwRwJ6GuDUtgzbsasDV%2FYOl0Uma8D%2Fl%2FBMLnyf0MueQ%2BGXAoUpuPKNaurK8GMi2txjoHGX%2Fb3WXs8l9W9ooByB9adsdtyEFO0fIXnjbq7fpOOolbFj8JuNxeRm4%3D&X-Amz-Signature=d59e283a7c79ba07dc1fc055ca59758e5115eofkgjyeit83048twe83420i23ri0i&X-Amz-SignedHeaders=host
   */
  s3_signed_url: string;
}
