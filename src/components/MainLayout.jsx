import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children} {/* All the code between Header and Footer will be added here */}
      <Footer />
    </div>
  );
};

export default MainLayout;
