import Header from "./components/header/Header";
import MainSection from "./components/main-section/MainSection";
import Steps from "./components/steps/Steps";
import OrderSection from "./components/order-secction/Order";
import Shiping from "./components/shiping-section/Shiping";
import OrderForm from "./components/order-form-section/OrderForm";
import Footer from "./components/footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
       <main>
        <MainSection />
        <Steps />
        <OrderSection />
        <Shiping />
        <OrderForm />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
