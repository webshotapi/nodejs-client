export enum ScreenshotType {
  JPG = "jpg",
  PNG = "png",
  PDF = "pdf",
}

export enum OtherType {
  JSON = "json",
}

export const ConvertTypeToMimeType = (
  type: ScreenshotType | OtherType
): string => {
  switch (type) {
    case ScreenshotType.JPG:
      return "image/jpeg";
    case ScreenshotType.PNG:
      return "image/png";
    case ScreenshotType.PDF:
      return "application/pdf";
    case "json":
      return "application/json";
  }

  throw new Error("Unknown type");
};
