import "server-only";
import { getPlaiceholder } from "plaiceholder";

export type BlurImageDataType = {
  img: {
    src: string;
    height: number;
    width: number;
  };
  color: {
    r: number;
    g: number;
    b: number;
    hex: string;
  };
  css: {
    backgroundImage: string;
    backgroundPosition: string;
    backgroundSize: string;
    backgroundRepeat: string;
  };
  base64: string;
  pixels: {
    a?: number | undefined;
    r: number;
    g: number;
    b: number;
  }[][];
  message: string;
};

export async function getBlurDataImage(src: string) {
  if (!src) return { message: "Error, source not founded" };
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );
  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });
  return {
    message: "Success get the blur image",
    ...plaiceholder,
    img: { src, height, width },
  };
}
