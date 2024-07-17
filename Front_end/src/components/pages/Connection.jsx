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

import React from "react";
import Navbar from "../molecules/Navbar";
import Footer from "../organisms/Footer";
import Main from "../organisms/MainConnection";

const Connection = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Connection;
