import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";


import slide3 from '../../../assets/Slider/2.png';
import slide4 from '../../../assets/Slider/3.jpg';
import slide5 from '../../../assets/Slider/4.jpg';
import slide7 from '../../../assets/Slider/7.jpg';
import slide6 from '../../../assets/Slider/5.png';



import SectionTitle from "../../../Components/SectionTitle";
import { Pagination } from 'swiper/modules';


const Category = () => {
    return (
        <section>
             <SectionTitle
             subHeading={"24 HOUR"}
             heading={"Our Product Category"}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Vegetables </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Fruits</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Fish & Meat</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Grains</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Dairy & Eggs</h3>
                </SwiperSlide>
            </Swiper>
            
        </section>
    );
};

export default Category;