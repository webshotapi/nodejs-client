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

  /**
   * Specifies the frames per second (FPS) for at which the video can be recorded.
   * It accepts an integer between 1 and 60, with a default value of 15.
   * For Gif output file max value is 10.
   * This setting helps control recording smoothness and performance by preventing excessively high frame rates that may increase processing time or resource usage.
   *
   * @default 15
   * @max 60
   * @min 1
   * @example 4
   * @type number
   */
  video_fps?: number;

  /**
   * Enables GPU acceleration for the browser run using WebGPU or WebGL.
   * Useful for improving rendering performance and handling graphics-intensive tasks. When disabled, rendering will fall back to CPU processing.
   * @default false
   * @example true
   * @type boolean
   */
  gpu_enable?: boolean;
};
