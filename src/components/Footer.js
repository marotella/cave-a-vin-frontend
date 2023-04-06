function Footer(props) {
    return (
      <footer>
        <div className="contact">
          <a href="mailto:caveavin@example.com">Contact Us</a>
        </div>
  
        <div className="socialmedia">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/lfTC3Vb.png" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/explore/tags/wine/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://i.imgur.com/9eK5Kb0.png" alt="Instagram" />
          </a>
        </div>
  
        <p>&copy; {new Date().getFullYear()} Cave a Vin. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  