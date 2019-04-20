import React, { useState, useEffect } from "react";
import axios from 'axios';

function GIFDetail(props) {
    const [data, setData] = useState({gif: {} });

    useEffect(() => {
	const fetchData = async () => {
	  const { pk } = props.match.params;
	  const result = await axios(
	    `http://localhost:8000/api/images/${pk}/`,
	  );
	  setData(result.data);
	};
	fetchData();
    }, []);
    
    return (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{data.title}</p>
       </div>
     </div>
     <div className="content"> 
      {data.description}
     </div>
    </div>
    <div className="card-image">
      <figure className={`image ${data.height === data.width ? 'is-1x1': 'is-16x9'}`}>
        <img src={data.src} alt={data.title} />
      </figure>
    </div>
  </div>
    )
};

export default GIFDetail;
