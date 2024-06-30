import { ImageContainer, ImageWithoutBlur } from "@/components/ImageComponent";

export default function Notfound() {
  return (
    <div className="flex h-[78dvh] w-full items-center justify-center gap-36 max-lg:flex-col max-lg:gap-3">
      <ImageContainer className="relative h-3/5 w-3/5">
        <ImageWithoutBlur
          src={"/notfound.png"}
          alt="not-found-image"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 60vw, (max-width: 1024) 70vw"
        />
      </ImageContainer>
      <h1 className="font-mono text-6xl font-bold max-sm:text-xl">
        What are you looking for?
      </h1>
    </div>
  );
}
