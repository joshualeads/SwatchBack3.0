import React from 'react';
import {IconButton, useBreakpointValue, Box} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from'@chakra-ui/icons';
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: true,
    arrows: true,
    fade: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
};

const Carousel = (props) => {

    // As we have used custom buttons, we need a reference variable to
  // change the state
    const [slider, setSlider] = React.useState(null, Slider);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    // These are the images used in the slide
    const cards = props.slides;

    return (
        <Box
        position={'relative'}
        height={'lg'}
        width={'full'}
        borderRadius={ props.type == "product" ? "none" : "md"} 
        boxShadow={ props.type == "product" ? "none" : "md"}
        overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            {/* Left Icon */}
            <Box
                >
                <IconButton
                    aria-label="left-arrow"
                    colorScheme="blackAlpha"
                    borderRadius="full"
                    position="absolute"
                    left={"3%"}
                    bottom={"50%"}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider.slickPrev()}>
                    <ArrowLeftIcon />
                </IconButton>
            </Box>

            {/* Right Icon */}
            <Box
                >
                <IconButton
                    aria-label="right-arrow"
                    colorScheme="blackAlpha"
                    borderRadius="full"
                    position="absolute"
                    right={"3%"}
                    bottom={"50%"}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider.slickNext()}>
                    <ArrowRightIcon />
                </IconButton>
            </Box>

            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((url, index) => (
                <Box
                    key={index}
                    height={'lg'}
                    position="relative"
                    backgroundPosition={props.type == 'product' ? "center" : "center"}
                    backgroundRepeat="no-repeat"
                    backgroundSize={props.type == 'product' ? "contain" : "cover"}
                    backgroundImage={`url(${url})`}
                    borderRadius={"md"} 
                    boxShadow={"md"}
                />
                ))}
            </Slider>
        </Box>
    )
}

export default Carousel;