import { ScreenshotType } from "./screenshot.type";

export type Params = {
  /** Link to website
   * https://www.example.com/sport/live/football/55094474
   *
   * @type string
   */
  link: string;

  /**
   * Select screenshot image output format [jpg,pdf,png]
   * @type string
   */
  image_type?: ScreenshotType;
  /**
   * Remove all modals, popup with info, ads, cookies etc before take screenshot. So remove all elements which cover the website.
   *
   * @type boolean
   * @default false
   */
  remove_modals?: boolean;

  /**
   * Remove all ads from website.
   *
   * @type boolean
   * @default false
   */
  ads?: boolean;

  /**
   * Set the page width (Viewport) in pixels. Set 0 if you want to ignore this param
   * @default 1440
   * @type number
   */
  width?: number;

  /**
   * If you want to make a thumbnail after taking the screenshot, enter its width in pixels. The ratio will be kept.
   *
   * @type number
   * @default 0
   */
  thumbnail_width?: number;

  /**
   * Set the page height (Viewport) in pixels. Set 0 if you want to ignore this param
   *
   * @type number
   * @default 0
   */
  height?: number;

  /**
   * If you download the same page through our api with the same parameters for the second time, our server will return the data from the cache so as not to chanrge your account twice. If you still want to download the fresh page, you can do so via this option. The data in the cache is stored for 24 hours
   * @type boolean
   * @default false
   */
  no_cache?: boolean;

  /**
   * If you want to scroll to the bottom of the page, check this option for the browser to load all photos
   * @type boolean
   * @default false
   */
  scroll_to_botton?: boolean;

  /**
   * This will set the device scale factor = 2, producing a high resolution retina screenshot.
   *
   * @type boolean
   * @default false
   */
  retina?: boolean;

  /**
   * Before taking the screenshot, wait for the loading of the element with the given css selector. The timeout for this operation is 20 seconds.
   *
   * @type string
   */
  wait_for_selector?: string;

  /**
   * Before taking the screenshot, wait for the loading of the element with the given Xpath selector. The timeout for this operation is 20 seconds.
   *
   * @type string
   */
  wait_for_xpath?: string;

  /**
   * Set the compression rate for the JPG file. PNG does not support compression. Range: 0-100
   *
   * @type number
   * @default 85
   */
  image_quality?: number;

  /**
   * Original background will be removed. Screenshot will be taken with transparent background. Works only with PNG format.
   *
   * @type boolean
   * @default false
   */
  transparent_background?: boolean;

  /**
   * Enter a valid browser User-Agent HTTP header value you want to emulate
   *
   * @type string
   * @default Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36
   */
  user_agent?: string;

  /**
   * Enter valid Accept-Language HTTP header
   *
   * @default en/USD
   * @type string
   */
  accept_language?: string;

  /**
   * Provide a list of cookies and values. The cookies will be sent to the server before the screenshot is taken. Example:cookie_var=value;cookie_var2=value. Cookies for GET request have to be URL encoded.
   * example: ser=1&last_visit=2020-12-09
   * @type string
   */
  cookies?: string;

  /**
   * Provide a list of HTTP headers. Headers will be sent to the server before the screenshot is taken. Example:X-hello=value;X-var=value. Headers for GET request have to be URL encoded.
   *
   * @type string
   */
  headers?: string;

  /**
   * Check this option if you want to take a screenshot of the entire page
   * @type boolean
   */
  full_page?: boolean;

  /**
   * Enter the time zone for the browser.
   *
   * @default Europe/Paris
   * @type string
   */
  timezone?: string;

  /**
   * Enter the http codes for which the browser should not screenshot. You can enter the codes by separating them with a comma or enter a range. If the page doesn't exist then don't take a picture. Code example: 403,404, 500-511
   *
   * @type string
   */
  fail_statuscode?: string;

  /**
   * Get plain text of the page right after rendering. All html tags are removed.
   *
   * @type boolean
   */
  extract_text?: boolean;

  /**
   * Download the page's html code as soon as all Javascript is loaded.
   *
   * @type boolean
   */
  extract_html?: boolean;

  /**
   * Take a screenshot only of the element on the page that has the CSS selector. This is a useful option if you want to take a photo of, for example, a table on the page.
   * example: div .price
   *
   * @type string
   */
  capture_element_selector?: string;

  /**
   * CSS string will be added to the page before the screenshot is taken. For GET request have to be URL encoded.
   *
   * @type string
   */
  injection_css?: string;

  /**
   * CSS file will be added to the page before the screenshot is taken. For GET request have to be URL encoded.
   *
   * @type string
   */
  injection_css_url?: string;

  /**
   * Javascript string will be added to the page before the screenshot is taken. For GET request have to be URL encoded.
   *
   * @type string
   */
  injection_js?: string;
};
