function About() {
    return (
        <div className="about">
            <h3 className="abouth3">About Us</h3>
            <span className="aboutus"></span>
            <p className="aboutp">
            <em><strong>Welcome</strong></em> to our wine cellar app! We are a team of wine enthusiasts who are passionate about discovering new and interesting wines from all around the world. Our app is designed to help you explore a wide variety of wines from different regions and grape varietals. At our core, we believe that wine is more than just a beverage, "it's an experience". That's why we've carefully curated a selection of wines that represent the best of what the world has to offer. Whether you're a seasoned wine connoisseur or just starting out on your wine journey, we're confident that you'll find something that you love in our collection. One of the unique features of our app is our ratings system. Our ratings are based on a variety of factors, including the wine's flavor profile, aroma, and overall quality. We also encourage our users to rate the wines they try, so that our community can benefit from each other's experiences. At the heart of our app is a commitment to quality and customer satisfaction. We also pride ourselves on our customer service, if you have any questions or concerns about our app or your wine selection, our team is always here to help. Thank you for choosing our wine cellar app. We hope that our collection of wines inspires you to try something new and discover the joy of wine for yourself. <br></br>
<span className="cheers"><em>Cheers!</em></span>
            </p>
            <div className="container5"style={{ width: "60%" }}>
      
      <h3 className="cave">Cave A Vin</h3>
      <ul>
          <li><a style={{ textDecoration: "none", color:"White" }} href="/">Home</a></li>
          <li><a style={{ textDecoration: "none", color:"White" }} href="/about">About Us</a></li>
          <li><a style={{ textDecoration: "none", color:"White" }} href="/wines">Wine Selections</a></li>
          <li><a style={{ textDecoration: "none", color:"White" }} href="/register">Register</a></li>
          <li><a style={{ textDecoration: "none", color:"White" }} href="/register">Sign in</a></li>
          <li><a style={{ textDecoration: "none", color:"White" }} href="#">Careers</a></li>
      </ul>
      <div className="contact">
  
    <h3>Contact Us</h3>
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
    </div>
  </div>
  <div className="container6" style={{ width: "100%" }}></div>
  </div>

        </div>
     )
  }
  export default About;