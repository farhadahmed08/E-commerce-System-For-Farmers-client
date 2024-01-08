

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Pagination } from "swiper/modules";



const OrderTab = ({ items ,handleSearch,asc,setAsc }) => {








    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div>
            <button  onClick={()=>setAsc(!asc)} className="m-5 btn btn-outline bg-green-400 font-bold">{asc ? 'Price :High to Low' : 'Price :Low to High' }</button>
            <form className="text-center m-6" onSubmit={handleSearch}>
                <input type="text" placeholder="Search here"
          className="input input-bordered input-accent w-full max-w-xs" name="search" />
                <input className="btn bg-green-400 font-bold" type="submit" value="search" />

            </form>
          <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                        {
                            items.map(item => <ProductCard
                                key={item._id}
                                item={item}
                            ></ProductCard>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>  
        </div>
    );
};

export default OrderTab;