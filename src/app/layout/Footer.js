import React from 'react';
import Markdown from '../../components/Markdown';

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <Markdown src="/footer.md"/>
        <p>
          Copyright {date.getFullYear()}
        </p> 
      </div>
    </footer>
  )
}

export default Footer;
