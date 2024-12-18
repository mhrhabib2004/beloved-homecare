import FAQs from "../Component/FAQs/FAQs";
import HomecareServices from "../Component/HomecareServices/HomecareServices";
import Tab from "../Component/NavigationTab/Tab";
import PermissionPage from "../Component/PermissionPage/PermissionPage";
import ReviewSlider from "../Component/ReviewSlider/ReviewSlider";
import Slider from "../Component/Slider.jsx/Slider";
import TeamSection from "../Component/TeamSection/TeamSection";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Tab/>
            <HomecareServices />
            <PermissionPage />
            <FAQs />
            <TeamSection />
            <ReviewSlider />
        </div>
    );
};

export default Home;