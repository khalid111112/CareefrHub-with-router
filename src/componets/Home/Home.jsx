import Banner from "../Banner/Banner";
import FeatureJobs from "../FeaturedJobs/FeatureJobs";
import CategoryList from "../categoryList/CategoryList";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;

