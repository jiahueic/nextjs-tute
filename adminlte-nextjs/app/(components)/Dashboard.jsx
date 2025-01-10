import Head from "next/head";
import Script from "next/script";
import Header from "./Header";
import MiniDashboard from "./MiniDashboard";
import Menu from "./Menu";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        {/* <Menu></Menu> */}
        <MiniDashboard></MiniDashboard>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Dashboard;
