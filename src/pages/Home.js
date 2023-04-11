

function Home() {
    return (
   
        <div className="container1" style={{ width: "60%" }}>
        <div> 
        <h2>From Our Cellar to Your Glass...</h2>
        </div>
            <p className="quote">"Drinking good wine with good food in good company is one of life’s most civilized pleasures."</p>
            <p className="author">-Michael Broadbent</p>
            <a href="/wines">
            <button className="explore"> Explore Our Wine Cellar</button>
            </a>
    
        <div className="container2" style={{ width: "100%" }}></div>
        <div className="container3" style={{ width: "100%" }}><p>hello container3</p></div>
        <div className="container4"><p>hello container4</p></div>

        <div className="container5">
      
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
        <div className="container6"></div>
        </div>
        </div>
  )
  }


  export default Home;
  