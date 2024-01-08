import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import ProductItem from "../../Shared/ProductItem";


const ProductCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            { title && <Cover img={img} title={title} subHeading="Elevate your lifestyle with our premium organic products, meticulously curated to bring you the purest essence of nature. Experience the unparalleled quality and goodness that define Farm Fresh."></Cover>}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 my-16">
                {
                    items.map(item => <ProductItem
                        key={item._id}
                        item={item}
                    ></ProductItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default ProductCategory;