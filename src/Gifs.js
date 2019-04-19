import React, { useState, useEffect } from "react";
import {
    Link
} from "react-router-dom";
import axios from 'axios';

function GifList() {
    const [data, setData] = useState([]);
    useEffect(() => {
	const fetchData = async () => {
	    const result = await axios('http://localhost:8000/api/images/');
	    console.log(result.data);
	    setData(result.data);
	};
	fetchData();
    }, []);

    return (
		<div>
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
