declare type PageViewportParameters = {
    /**
     * - The xMin, yMin, xMax and
     * yMax coordinates.
     */
    viewBox: Array<number>;
    /**
     * - The scale of the viewport.
     */
    scale: number;
    /**
     * - The rotation, in degrees, of the viewport.
     */
    rotation: number;
    /**
     * - The horizontal, i.e. x-axis, offset. The
     * default value is `0`.
     */
    offsetX?: number | undefined;
    /**
     * - The vertical, i.e. y-axis, offset. The
     * default value is `0`.
     */
    offsetY?: number | undefined;
    /**
     * - If true, the y-axis will not be flipped.
     * The default value is `false`.
     */
    dontFlip?: boolean | undefined;
};
declare type PageViewportCloneParameters = {
    /**
     * - The scale, overriding the one in the cloned
     * viewport. The default value is `this.scale`.
     */
    scale?: number | undefined;
    /**
     * - The rotation, in degrees, overriding the one
     * in the cloned viewport. The default value is `this.rotation`.
     */
    rotation?: number | undefined;
    /**
     * - The horizontal, i.e. x-axis, offset.
     * The default value is `this.offsetX`.
     */
    offsetX?: number | undefined;
    /**
     * - The vertical, i.e. y-axis, offset.
     * The default value is `this.offsetY`.
     */
    offsetY?: number | undefined;
    /**
     * - If true, the x-axis will not be flipped.
     * The default value is `false`.
     */
    dontFlip?: boolean | undefined;
};
declare function deprecated(details: any): void;
declare class DOMCanvasFactory extends BaseCanvasFactory {
    constructor({ ownerDocument, enableHWA }: {
        ownerDocument?: Document | undefined;
        enableHWA?: boolean | undefined;
    });
    _document: Document;
    /**
     * @ignore
     */
    _createCanvas(width: any, height: any): HTMLCanvasElement;
}
declare class DOMCMapReaderFactory extends BaseCMapReaderFactory {
    /**
     * @ignore
     */
    _fetchData(url: any, compressionType: any): Promise<{
        cMapData: Uint8Array;
        compressionType: any;
    }>;
}
/**
 * FilterFactory aims to create some SVG filters we can use when drawing an
 * image (or whatever) on a canvas.
 * Filters aren't applied with ctx.putImageData because it just overwrites the
 * underlying pixels.
 * With these filters, it's possible for example to apply some transfer maps on
 * an image without the need to apply them on the pixel arrays: the renderer
 * does the magic for us.
 */
declare class DOMFilterFactory extends BaseFilterFactory {
    constructor({ docId, ownerDocument }: {
        docId: any;
        ownerDocument?: Document | undefined;
    });
    addFilter(maps: any): any;
    addHCMFilter(fgColor: any, bgColor: any): any;
    addAlphaFilter(map: any): any;
    addLuminosityFilter(map: any): any;
    addHighlightHCMFilter(filterName: any, fgColor: any, bgColor: any, newFgColor: any, newBgColor: any): any;
}
declare class DOMStandardFontDataFactory extends BaseStandardFontDataFactory {
    /**
     * @ignore
     */
    _fetchData(url: any): Promise<Uint8Array>;
}
declare class DOMSVGFactory extends BaseSVGFactory {
    /**
     * @ignore
     */
    _createSVG(type: any): any;
}
declare function fetchData(url: any, type?: string): Promise<any>;
declare function getColorValues(colors: any): void;
declare function getCurrentTransform(ctx: any): any[];
declare function getCurrentTransformInverse(ctx: any): any[];
/**
 * Gets the filename from a given URL.
 * @param {string} url
 * @returns {string}
 */
declare function getFilenameFromUrl(url: string): string;
/**
 * Returns the filename or guessed filename from the url (see issue 3455).
 * @param {string} url - The original PDF location.
 * @param {string} defaultFilename - The value returned if the filename is
 *   unknown, or the protocol is unsupported.
 * @returns {string} Guessed PDF filename.
 */
declare function getPdfFilenameFromUrl(url: string, defaultFilename?: string): string;
declare function getRGB(color: any): any;
/**
 * NOTE: This is (mostly) intended to support printing of XFA forms.
 */
declare function getXfaPageViewport(xfaPage: any, { scale, rotation }: {
    scale?: number | undefined;
    rotation?: number | undefined;
}): PageViewport;
declare function isDataScheme(url: any): boolean;
declare function isPdfFile(filename: any): boolean;
declare function isValidFetchUrl(url: any, baseUrl: any): boolean;
/**
 * Event handler to suppress context menu.
 */
declare function noContextMenu(e: any): void;
/**
 * Scale factors for the canvas, necessary with HiDPI displays.
 */
declare class OutputScale {
    /**
     * @type {number} Horizontal scale.
     */
    sx: number;
    /**
     * @type {number} Vertical scale.
     */
    sy: number;
    /**
     * @type {boolean} Returns `true` when scaling is required, `false` otherwise.
     */
    get scaled(): boolean;
    get symmetric(): boolean;
}
/**
 * @typedef {Object} PageViewportParameters
 * @property {Array<number>} viewBox - The xMin, yMin, xMax and
 *   yMax coordinates.
 * @property {number} scale - The scale of the viewport.
 * @property {number} rotation - The rotation, in degrees, of the viewport.
 * @property {number} [offsetX] - The horizontal, i.e. x-axis, offset. The
 *   default value is `0`.
 * @property {number} [offsetY] - The vertical, i.e. y-axis, offset. The
 *   default value is `0`.
 * @property {boolean} [dontFlip] - If true, the y-axis will not be flipped.
 *   The default value is `false`.
 */
/**
 * @typedef {Object} PageViewportCloneParameters
 * @property {number} [scale] - The scale, overriding the one in the cloned
 *   viewport. The default value is `this.scale`.
 * @property {number} [rotation] - The rotation, in degrees, overriding the one
 *   in the cloned viewport. The default value is `this.rotation`.
 * @property {number} [offsetX] - The horizontal, i.e. x-axis, offset.
 *   The default value is `this.offsetX`.
 * @property {number} [offsetY] - The vertical, i.e. y-axis, offset.
 *   The default value is `this.offsetY`.
 * @property {boolean} [dontFlip] - If true, the x-axis will not be flipped.
 *   The default value is `false`.
 */
/**
 * PDF page viewport created based on scale, rotation and offset.
 */
declare class PageViewport {
    /**
     * @param {PageViewportParameters}
     */
    constructor({ viewBox, scale, rotation, offsetX, offsetY, dontFlip, }: PageViewportParameters);
    viewBox: number[];
    scale: number;
    rotation: number;
    offsetX: number;
    offsetY: number;
    transform: number[];
    width: number;
    height: number;
    /**
     * The original, un-scaled, viewport dimensions.
     * @type {Object}
     */
    get rawDims(): Object;
    /**
     * Clones viewport, with optional additional properties.
     * @param {PageViewportCloneParameters} [params]
     * @returns {PageViewport} Cloned viewport.
     */
    clone({ scale, rotation, offsetX, offsetY, dontFlip, }?: PageViewportCloneParameters | undefined): PageViewport;
    /**
     * Converts PDF point to the viewport coordinates. For examples, useful for
     * converting PDF location into canvas pixel coordinates.
     * @param {number} x - The x-coordinate.
     * @param {number} y - The y-coordinate.
     * @returns {Array} Array containing `x`- and `y`-coordinates of the
     *   point in the viewport coordinate space.
     * @see {@link convertToPdfPoint}
     * @see {@link convertToViewportRectangle}
     */
    convertToViewportPoint(x: number, y: number): any[];
    /**
     * Converts PDF rectangle to the viewport coordinates.
     * @param {Array} rect - The xMin, yMin, xMax and yMax coordinates.
     * @returns {Array} Array containing corresponding coordinates of the
     *   rectangle in the viewport coordinate space.
     * @see {@link convertToViewportPoint}
     */
    convertToViewportRectangle(rect: any[]): any[];
    /**
     * Converts viewport coordinates to the PDF location. For examples, useful
     * for converting canvas pixel location into PDF one.
     * @param {number} x - The x-coordinate.
     * @param {number} y - The y-coordinate.
     * @returns {Array} Array containing `x`- and `y`-coordinates of the
     *   point in the PDF coordinate space.
     * @see {@link convertToViewportPoint}
     */
    convertToPdfPoint(x: number, y: number): any[];
}
declare class PDFDateString {
    /**
     * Convert a PDF date string to a JavaScript `Date` object.
     *
     * The PDF date string format is described in section 7.9.4 of the official
     * PDF 32000-1:2008 specification. However, in the PDF 1.7 reference (sixth
     * edition) Adobe describes the same format including a trailing apostrophe.
     * This syntax in incorrect, but Adobe Acrobat creates PDF files that contain
     * them. We ignore all apostrophes as they are not necessary for date parsing.
     *
     * Moreover, Adobe Acrobat doesn't handle changing the date to universal time
     * and doesn't use the user's time zone (effectively ignoring the HH' and mm'
     * parts of the date string).
     *
     * @param {string} input
     * @returns {Date|null}
     */
    static toDateObject(input: string): Date | null;
}
declare class PixelsPerInch {
    static CSS: number;
    static PDF: number;
    static PDF_TO_CSS_UNITS: number;
}
declare const RenderingCancelledException_base: any;
declare class RenderingCancelledException extends RenderingCancelledException_base {
    [x: string]: any;
    constructor(msg: any, extraDelay?: number);
    extraDelay: number;
}
/**
 * @param {HTMLDivElement} div
 * @param {PageViewport} viewport
 * @param {boolean} mustFlip
 * @param {boolean} mustRotate
 */
declare function setLayerDimensions(div: HTMLDivElement, viewport: PageViewport, mustFlip?: boolean, mustRotate?: boolean): void;
declare class StatTimer {
    started: any;
    times: any[];
    time(name: any): void;
    timeEnd(name: any): void;
    toString(): string;
}
