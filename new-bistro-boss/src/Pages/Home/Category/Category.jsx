import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
// import img from '../../../assets/home/chef-service.jpg'
import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../component/SectionTitle";
// import Info from "../Info/Info";



const Category = () => {
    return (
       <>
         <section className="mx-auto">
            <SectionTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
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
                    <img src={img1} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white ">Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white ">Soups</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img3} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white ">pizzas</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img4} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white ">desserts</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img5} alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white ">Salad</h3>
                </SwiperSlide>

            </Swiper>
        </section>
        
            {/* <Info
            img={img}
            title={'Bistro Boss'}
            subTitle={'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia m Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als '}
            ></Info>
        */}
       </>
        

    );
};

export default Category;