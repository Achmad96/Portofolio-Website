import HeroContent from "@/components/HeroContent";
import vector from "@/public/vector.png";
import { ImageContainer, ImageWithoutBlur } from "@/components/ImageComponent";

const Hero = () => {
  return (
    <div
      className="flex h-[100dvh] w-full items-center justify-center gap-36 max-lg:gap-20 max-md:flex-col"
      id="about"
    >
      <HeroContent />
      <ImageContainer className="relative h-80 w-80">
        <ImageWithoutBlur
          src={vector}
          alt="vectors"
          className="max-md:h-52 max-md:w-52"
          sizes="(max-width: 1024px) 100vw"
        />
      </ImageContainer>
    </div>
  );
};
export default Hero;
