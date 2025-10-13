export type VideoType = {
  /**
   * Video file format for output (e.g., mp4, avi, etc.).
   * Specifies the encoding format of the final video file.
   * Different formats may affect file size, quality, and compatibility.
   *
   * @default mp4
   * @type string
   */
  video_format?: "mp4" | "avi" | "mov" | "webm" | "gif";

  /**
   * Maximum duration of the video in seconds.
   * Defines how long the recording should last.
   * Useful to avoid unnecessarily long videos or to limit processing time.
   *
   * @default 5
   * @example 4
   * @type number
   */
  video_duration?: number;
};
