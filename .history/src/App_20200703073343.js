import React, {useState, useEffect}  from "react";
import Header from "./components/UI/Header";
import "./App.css";

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsItems] = useState([]);


  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
