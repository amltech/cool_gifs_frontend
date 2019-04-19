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
	<div>
	  <h2>{data.title}</h2>
	  <img src={data.src} alt={data.title} />
	  <p>{data.description}</p>	
	</div>
    )
}

export default GIFDetail
