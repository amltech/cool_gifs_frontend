import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from './../components/apiAccess';

const GIFDetail = ({pk}) => {
  console.log('gifId', pk)
  const [data, setData] = useState({gif: {} });
  const [error, setError] = useState(false);
  const fetchData = async () => {
    const result = await api.get(`images/${pk}/`);
    setData(result.data);
  };

  useEffect(() => {
    fetchData().catch((error) => {
      console.log('error', error);
      setError(true);
    });
   }, []);
    
  return (
    <div>
    {error && (
      <div>
        <div className="notification is-danger">
          Unable to access API!
        </div>
      </div>
    )}
    {!error && !data.src && (
      <progress className="progress is-primary" max="100"></progress>
    )}
    {!error && data.src && (
      <div className="box">
        <div className="card">
          <div className="card-header">
            <p className="card-header-title">{ data.title }</p>
          </div>
          <div className="card-content">
            <div className="content">
              {data.description}
            </div>
          </div>
          <div className="card-image">
            <figure className={`image ${data.height === data.width ? 'is-1x1': 'is-16x9'}`}>
              <img src={data.src} alt={data.title} />
            </figure>
          </div>
          <footer className="card-footer">
            <Link to={`/gifs/${pk}/edit`} className="card-footer-item">Edit</Link>
            <Link to={`/gifs/${pk}/flag`} className="card-footer-item">Flag</Link>
          </footer>
        </div>
      </div>
    )}
    </div>
  );
};

export default GIFDetail;
