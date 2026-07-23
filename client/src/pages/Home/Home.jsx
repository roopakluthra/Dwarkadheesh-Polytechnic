import Hero from "../../components/sections/Hero";
import Stats from "../../components/sections/Stats";
import Courses from "../../components/sections/Courses";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import Facilities from "../../components/sections/Facilities";
import Testimonials from "../../components/sections/Testimonials";
import CTA from "../../components/sections/CTA";

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Courses />
            <WhyChooseUs />
            <Facilities />
            <Testimonials />
            <CTA />
        </>
    );
};

export default Home;