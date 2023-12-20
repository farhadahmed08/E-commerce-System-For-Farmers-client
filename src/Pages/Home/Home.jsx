import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import About from "./About/About";



const Home = () => {
    return (
        <div>
             <Helmet>
                <title>E-commerce for farmers | Home</title>
            </Helmet>
            <Banner/>
            <Category/>
            <Featured/>
           <About/>
           
           
        </div>
    );
};

export default Home;