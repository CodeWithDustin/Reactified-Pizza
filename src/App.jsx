import React from "react";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

const App = () => {
  const isOpen = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 10 && currentHour <= 22;
  };

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer isOpen={isOpen()} />
    </div>
  );
};

export default App;
