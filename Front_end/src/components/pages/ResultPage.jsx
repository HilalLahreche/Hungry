//Header{
//navBar{
//logo
// nom
// burgerMenu}
//}

// main{
// left{
// keyword (input)
// filter list
// }
// right{
// location input
// button switch map/list
//map/list
// }

// footer{
// about , contact , menu ,RGPD}


import Navbar from "../molecules/Navbar";
import MainResultPage from "../organisms/MainResultPage";
import Footer from "../organisms/Footer";

const ResultPage = () => {
  return (
    <>
      <Navbar />
      <MainResultPage />
      <Footer />
    </>
  );
};

export default ResultPage;
