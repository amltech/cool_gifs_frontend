import React, { useState, useEffect } from "react";
import {
    Link
} from "react-router-dom";
import axios from 'axios';

const GifList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${process.env.REACT_APP_API_BASE_URL}images/`);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="box">
      <ul>
        {data.map(gif =>
          <li key={gif.id}>
            <Link to={`/gifs/${gif.id}`}>{gif.title}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default GifList;
