import React, { useState, useEffect } from "react";
import {
    Link
} from "react-router-dom";
import axios from 'axios';

const GifList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    const result = await axios(`${process.env.REACT_APP_API_BASE_URL}images/`);
    setData(result.data); 
  };
  useEffect(() => {
    fetchData().catch((error) => {
      setError(true); 
    });
  }, []);

  return (
    <div>
    {error && (
      <div className="notification is-danger">
        Unable to access api
      </div>
    )}
    <div className="box">
      <nav className="panel">
        <p className="panel-heading">
          GIFs
        </p>
        {data.map(gif =>
          <Link to={`/gifs/${gif.id}`} className="panel-block">{gif.title}</Link>
        )}
        </nav>
      </div>
    </div>
  );
}

export default GifList;
