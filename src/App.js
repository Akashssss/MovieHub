import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies";
import KnowMore from './KhowMore' ;
import Form from "./Form";
function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setData(result.data);
    };
    fetchData();
  }, []);
  console.log(data);
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies movies= {data} />}></Route>
          <Route path="/KnowMore/:id" element = {<KnowMore movies = {data}/>}/>
          <Route path="/BOOK_TICKET/:id" element={<Form movies={data} />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
