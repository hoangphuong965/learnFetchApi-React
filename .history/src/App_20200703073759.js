import React, {useState, useEffect}  from "react";
import axios from 'axios';
import Header from "./components/UI/Header";
import "./App.css";

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchItems = async
  })


  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
