export type ScrollingType = {
  /**
   * Enable scrolling during record website video.
   *
   * @type boolean
   */
  scrolling_enable?: boolean;

  /**
   * Scrolling algorithm. Specifies the easing function that controls
   * the speed curve of the scrolling animation. This affects how smooth
   * or linear the scrolling feels.
   *
   * Read more: https://webshotapi.com/blog/screenshot-scrolling-algorithms/
   *
   * @type string
   */
  scrolling_algorithm?:
    | "ease_out_quad"
    | "ease_in_out_cubic"
    | "ease_in_cubic"
    | "ease_out_cubic"
    | "ease_in_out_quart"
    | "ease_in_quart"
    | "ease_in_quad"
    | "ease_in_out_quad"
    | "linear";

  /**
   * How long one scroll step should last (in milliseconds).
   * Determines the duration of a single scroll movement.
   * Affects how fast the page scrolls in one step.
   *
   * @type number
   */
  scrolling_scroll_duration?: number;

  /**
   * How many pixels should be scrolled in one step.
   * Defines the vertical distance to scroll per step.
   * Larger values scroll more content per step.
   *
   * @type number
   */
  scrolling_scroll_distance?: number;

  /**
   * Delay between each scroll step (in milliseconds).
   * Sets the pause between scroll steps. Higher values make
   * scrolling more gradual and less continuous.
   *
   * @type number
   */
  scrolling_scroll_delay?: number;

  /**
   * How long to delay the start of scrolling (in milliseconds).
   * Adds an initial wait before scrolling begins.
   * Useful to ensure the page is fully loaded first.
   *
   * @type number
   */
  scrolling_start_delay?: number;

  /**
   * Y-position (in pixels) from which to start scrolling.
   * Allows scrolling to begin from a specific vertical offset on the page.
   *
   * @type number
   */
  scrolling_start_position_y?: number;

  /**
   * Stop scrolling after the given time (in milliseconds).
   * Forces scrolling to stop after a specified amount of time,
   * even if the full scroll distance hasn’t been reached.
   *
   * @type number | null
   */
  scrolling_stop_after_time?: number | null;

  /**
   * Scroll to the top of the page after the given time (in milliseconds).
   * After the specified delay, the page will automatically scroll back to the top.
   *
   * @type number | null
   */
  scrolling_scroll_to_top_after_time?: number | null;

  /**
   * Scroll only until the specified CSS selector is reached.
   * Scrolling will stop when the element matching this selector
   * becomes visible in the viewport.
   *
   * @type string
   */
  scrolling_scroll_to_selector?: string;

  /**
   * Scroll back to the top of the page after scrolling is completed.
   * If enabled, the page will be automatically scrolled to the top
   * after finishing the configured scroll steps.
   *
   * @type boolean
   */
  scrolling_scroll_back_completed?: boolean;
};
