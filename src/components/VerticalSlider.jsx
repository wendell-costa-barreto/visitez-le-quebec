import PropTypes from "prop-types";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
export default function VerticalSlider({ images }) {
    return (
        <div className="relative mx-auto mt-20 !w-[100%] md:w-[50%] sm:w-[80%] px-4 ">
            <Carousel
                className="relative"
                opts={{
                    loop: true,
                    align: "start",
                    dragFree: true,
                    swipe: true,
                }}
            >
                <CarouselContent>
                    {images.length > 0 ? (
                        images.map((destination) => (
                            <CarouselItem className="basis-1/1 flex flex-col relative" key={destination.id}>
                                <div className="relative">
                                    <img
                                        src={destination.img}
                                        alt={`Image of ${destination.name}`}
                                        className="cursor-pointer w-full h-[70vh] object-cover"
                                    />
                                    <div className="absolute flex items-center top-0 left-0 w-full p-4 bg-black bg-opacity-50">
                                        <p className="text-white">{destination.name}</p>
                                    </div>
                                </div>
                            </CarouselItem>

                        ))
                    ) : (
                        <p className="text-center">No destinations available</p>
                    )}
                </CarouselContent>
                <div className="absolute right-[75px] top-[-30px] z-10">
                    <CarouselPrevious
                        className="absolute right-[-50px] top-0 z-10 -translate-y-1/2 transform"
                        icon={faChevronLeft}
                    />
                    <CarouselNext
                        className="absolute right-[-50px] top-0 z-10 -translate-y-1/2 transform"
                        icon={faChevronRight}
                    />
                </div>

            </Carousel>
        </div >

    );
}

VerticalSlider.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    )
};

VerticalSlider.defaultProps = {
    images: [],
};
