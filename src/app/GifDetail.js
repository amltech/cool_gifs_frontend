import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from './../components/apiAccess';
import ConfirmModal from './../components/ConfirmModal';

const GIFDetail = ({pk}) => {
  const [data, setData] = useState({gif: {} });
  const [error, setError] = useState(false);
  const apiUrl = `images/${pk}/`;
  const fetchData = async () => {
    const result = await api.get(apiUrl);
    setData(result.data);
  };
  const flagImage = () => {
    const result = api.patch(apiUrl, {flagged: true});
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
      <>
         <div className="box">
           {data.flagged && (
            <div class="notification is-danger">
              This image has been flagged for review.
            </div>
          )}

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
              <ConfirmModal buttonText="Flag" confirmText="Flag" className="card-footer-item is-danger" 
                            onConfirm={flagImage} confirmClass="is-danger" disabled={data.flagged}>
                Flagging an image indicates it needs to be reviewed.
              </ConfirmModal>
            </footer>
          </div>
        </div>
      </>
    )}
    </div>
  );
};

export default GIFDetail;
