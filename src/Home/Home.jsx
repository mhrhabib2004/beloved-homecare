import FAQs from "../Component/FAQs/FAQs";
import HomecareServices from "../Component/HomecareServices/HomecareServices";
import Tab from "../Component/NavigationTab/Tab";
import PermissionPage from "../Component/PermissionPage/PermissionPage";
import Slider from "../Component/Slider.jsx/Slider";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Tab/>
            <HomecareServices />
            <PermissionPage />
            <FAQs />
        </div>
    );
};

export default Home;