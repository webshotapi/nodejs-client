export interface ResponseSaveCloudAws {
    /**
     * Save results file direct in your cloud bucket. Available: AWS S3. If you select this option for save data transfer You will receive simple json only with bucket name and key name
     * @type string
     * @example aws
     * @default ''
     */
    response_save_cloud: 'aws';

    /**
     * Access key to use to upload generated file to your S3 server. Required if set response_save_cloud
     *
     * @type string
     * @example AKIAIOSFODNN7EXAMPLE
     */
    s3_access_key_id: string

    /**
     * Secret key to use to upload generated file to your S3 server. Required if set response_save_cloud
     *
     * @example wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
     * @type string
     *
     */
    s3_secret_key: string

    /**
     * Bucket name to use to upload generated file to your S3 server. Required if set response_save_cloud
     * @type string
     * @example my-project-screenshot-bucket
     */
    s3_bucket: string

    /**
     * Bucket region
     *
     * @type string
     * @example us-east-2
     */
    s3_region: string

    /**
     * Object key to use to upload generated file to your S3 server. Should be a unique name. If you setup response_save_cloud and no set s3_key, our api will generate uniq name for s3_key
     *
     * @type string
     * @example: my-unique-file-name
     */
    s3_key?: string
}