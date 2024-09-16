//Header{
//navBar{
//logo
// nom
// burgerMenu}
//}

// main{
//signup
//signIn
// }

// footer{
// about , contact , menu ,RGPD}

import Navbar from "../molecules/Navbar";
import Footer from "../organisms/Footer";
import MainConnection from "../organisms/MainConnection";

const Connection = () => {
  return (
    <>
      <Navbar />
      <MainConnection />
      <Footer />
    </>
  );
};

export default Connection;
