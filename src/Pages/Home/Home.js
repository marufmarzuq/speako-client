import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Cover from "./Cover/Cover";
import coverBottom from "../../images/cover-bottom.svg";
import TrendingProducts from "./TrendingProducts/TrendingProducts";

const Home = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Cover></Cover>
                <img src={coverBottom} alt="" />
                <TrendingProducts></TrendingProducts>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Home;
