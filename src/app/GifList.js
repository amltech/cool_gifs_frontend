import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import api from './../components/apiAccess';

const GifList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    const result = await api.get('images/');
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
    {!error && (<div className="box">
      <nav className="panel">
        <p className="panel-heading">
          GIFs
        </p>
        {data.map(gif =>
          <Link to={`/gifs/${gif.id}`} className="panel-block" key={gif.id}>
            {gif.flagged && (
              <span class="panel-icon tooltip" data-tooltip="Flagged for review">
                <FontAwesomeIcon icon={faFlag}/>
              </span>
            )}
            {gif.title}
          </Link>
        )}
        </nav>
      </div>
    )}
    </div>
  );
}

export default GifList;
