import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-left'>
          <p className='title'>
            The Writings <br />
            on the Wall
          </p>
        </div>
        <div className='footer-right'></div>
      </div>
      <div className='footer-social'></div>
      <div className='footer-copyright'>
        &copy; 2023 The Writings on the Wall. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
