export type ScreenshotType = "jpg" | "png" | "pdf" | "webp";

export type OtherType = "json";

export const ConvertTypeToMimeType = (
  type: ScreenshotType | OtherType,
): string => {
  switch (type) {
    case "jpg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "pdf":
      return "application/pdf";
    case "webp":
      return "image/webp";
    case "json":
      return "application/json";
  }

  throw new Error("Unknown type");
};
