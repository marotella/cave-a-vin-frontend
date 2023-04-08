function Register() {
    return (
        <div className="user">
        <div className="signup">
            <form>
            <h3 className="register">Sign up</h3>
            <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input><br></br>
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input><br></br>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"></input><br></br>
            <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3" onclick="subscribed()">Subscribe</button>
            </div>
            </form>
        </div>
        <div className="signin">
            <form>
            <h3 className="register">Sign in</h3>
            <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input><br></br>
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input><br></br>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"></input><br></br>
            <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3" onclick="subscribed()">Subscribe</button>
            </div>
            </form>
        </div>
        </div>
     )
  }
  export default Register;