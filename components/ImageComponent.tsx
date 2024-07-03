import { BlurImageDataType } from "@/app/actions";
import Image, { StaticImageData } from "next/image";

interface ImageContainerInterface {
  children: React.ReactNode;
  className: string;
}

const ImageContainer = ({ children, className }: ImageContainerInterface) => {
  return <div className={className}>{children}</div>;
};

interface ImageWithoutBlurInterface {
  src: string | StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
}

const ImageWithoutBlur = (props: ImageWithoutBlurInterface) => {
  const { src, alt, sizes, className } = props;
  return (
    <Image
      src={src}
      alt={alt}
      priority={true}
      fill={true}
      sizes={sizes}
      className={className}
    />
  );
};

interface ImageWithBlurInterface {
  blurImageData: BlurImageDataType;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fill?: boolean;
  sizes?: string;
}

const ImageWithBlur = (props: ImageWithBlurInterface) => {
  const { alt, className, blurImageData, style, fill, sizes } = props;
  const { img, base64 } = blurImageData;
  return (
    <Image
      src={img.src}
      width={!fill ? img.width : undefined}
      height={!fill ? img.height : undefined}
      alt={alt}
      loading="lazy"
      placeholder="blur"
      blurDataURL={base64}
      className={className}
      fill={fill}
      sizes={fill ? sizes : undefined}
      style={style}
    />
  );
};

export { ImageWithoutBlur, ImageWithBlur, ImageContainer };
