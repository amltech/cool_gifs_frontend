import React from 'react';

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          This is my footer 
          <br />
          Copyright {date.getFullYear()}
        </p> 
      </div>
    </footer>
  )
}

export default Footer;
