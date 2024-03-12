export interface ResponseSaveCloudDefault {
  /**
   * Save results file direct in your cloud bucket. Available: AWS S3. If you select this option for save data transfer You will receive simple json only with bucket name and key name
   * @type string
   * @example aws
   * @default ''
   */
  response_save_cloud?: string;
}
