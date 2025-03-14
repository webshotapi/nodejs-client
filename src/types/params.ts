import { ScreenshotType } from "./screenshot.type";
import { ResponseSaveCloud } from "./responseSaveCloud";

export type Params = {
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
   * Use premium proxies to make the request harder to block. Useful when your request is getting blocked. Cost 5 credits per request.
   *
   * @type boolean
   * @default false
   */
  premium_proxy?: boolean;

  /**
   * Some content is specific to a region. In these cases, you may want to make your request from a given country. Geotargeting cost additional 1 credit
   * Example: 'us' for USA, 'fr' for France etc.
   * @type string
   * @default ''
   * @example 'us'
   */
  geotargeting?: string;

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
   * If you want to scroll to the bottom of the page, check this option for the browser to load all photos
   * @type boolean
   * @default false
   */
  scroll_to_bottom?: boolean;

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
  cookies?: Array<string>;

  /**
   * Provide a object of HTTP headers. Headers will be sent to the server before the screenshot is taken.
   * @example {
   *   "X-Custom": "aa",
   *   "X-Custom2": "123"
   * }
   *
   * @type string
   */
  headers?: Record<string, string>;

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
   * Export all words from the page with the positions (x, y, width, height) for each word. Thanks to this you can build a map of words placed on the page.
   *
   * @type boolean
   */
  extract_words?: boolean;

  /**
   * Additionally, for each HTML element you can export its css styles after rendering and loading all scripts. https://webshotapi.com/blog/how-to-scraper-css-styles-from-website/ for 0 - dont extract words. 1 - Extract primary css properties for elements, 2 - Extract all css properties for elements
   * @type number
   */
  extract_style?: number;

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

  /**
   * Javascript script will be added to the page before the screenshot is taken.
   * @example https://webshotapi.com/js/script.js
   */
  injection_js_url: string;

  /**
   * Use your own proxy server, currently, we only support the HTTP protocol.
   */
  proxy?: string;
} & ResponseSaveCloud;
