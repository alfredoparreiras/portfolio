import { Carousel } from "flowbite-react";

type MobileCarouselProps = {
  images: string[]
}

export default function MobileCarousel({images}: MobileCarouselProps) {
  return (
    <div className=" h-48 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {images.map((images, index) => {
          return (
            <img
              src={images}
              alt="..."
              key={index}
            />
            )
        })}
      </Carousel>
    </div>
  );
}
