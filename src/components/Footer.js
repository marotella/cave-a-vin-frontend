function Footer(props) {
    return (
      <footer className="footer">
        <div className="socialmedia">
        <a href="mailto:caveavin@example.com">
          <img className='emailimg' src="https://i.imgur.com/repqUlu.png" alt="Facebook" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img className='fbimg' src="https://i.imgur.com/9D6FJkh.png" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/explore/tags/wine/"
            target="_blank"
            rel="noreferrer"
          >
            <img className='igimg' src="https://i.imgur.com/i96mrRb.png" alt="Instagram" />
          </a>
          <p>&copy; {new Date().getFullYear()} Cave a Vin. All rights reserved.</p>
        </div>
  
      </footer>
    );
  }
  
  export default Footer;
  