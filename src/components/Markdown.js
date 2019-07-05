import React, { useEffect, useState } from 'react';
import marked from 'marked';
import axios from 'axios';
import DOMPurify from 'dompurify';

const Markdown = (props) => {
  const [ data, setData ] = useState('')
  const fetchData = async () => {
    const result = await axios.get(props.src);
    const dirty = marked(result.data);
    const clean = DOMPurify.sanitize(dirty);
    setData(clean);
  }

  useEffect(() => {
    fetchData().catch((error) => {
      console.log(error);
    });;
  }, []);
  
  return (
    <>
    <div dangerouslySetInnerHTML={{__html: data}}></div>
    </>
  );
};

export default Markdown; 
