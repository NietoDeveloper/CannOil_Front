import React from 'react'
import Image1 from "../../assets/hero/women.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"
import Slider from "react-slick";
const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Up to 50% off on all Men's Wear",
        description:
            "lorem His Life will forever  be Changed dolor sit amet,  consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        img: Image2,
        title: "30% off on all Women's Wear",
        description: "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        img: Image3,
        title: "70% off on all Products Sale",
        description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]
const Hero = (props) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    }
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex 
                        justify-center items-center dark:bg-gray-900 dark:text-white duration-200
        '>
            {/* background pattern */}
            <div className='h-[700px] w-[700px] bg-primary/40
                            absolute -top-1/2 right-0 rounded-3xl
                            rotate-45 -z[8]
            '></div>
            {/* hero section */}
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* text content */}
                                <div
                                    className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1
                                            relative z-10 px-2
                                '
                                >
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                                        {data.title}
                                    </h1>
                                    <p
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className='text-sm pb-2'>
                                        {data.description}
                                    </p>
                                    <div data-aos="zoom-out" data-aos-duration="500" data-aos-once="true">
                                        <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105
                                                        duration-200 text-white py-2 px-4 rounded-full lg:scale-120
                                    '>
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* image section */}
                                <div className='order-1 sm:order-2'>
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        className='relative z-10'>
                                        <img src={data.img}
                                            alt=""
                                            className='w-[300px] h-[300px] sm:h-[400px] sm:w-[400px] sm:scale-125 object-contain mx-auto'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero