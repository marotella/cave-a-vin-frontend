
function Register() {
    return (
        <div className="user" >
        <span className="signup">
            <form>
            <h3 className="register" style={{ color: "#861c1c"}}>Register</h3><br></br>
            <input type="text" class="form-control" style={{ width: "400px"}} placeholder="First name" aria-label="First name"></input><br></br>
            <input type="text" class="form-control" style={{ width: "400px"}} placeholder="Last name" aria-label="Last name"></input><br></br>
            <input type="email" class="form-control" style={{ width: "400px"}} id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"></input><br></br>
            <input type="password" class="form-control" style={{ width: "400px"}} id="exampleInputEmail1" placeholder="Password" aria-describedby="password"></input><br></br>
            <div class="col-auto">
            <button type="submit" style={{ backgroundColor: "#861c1c", border:"2px solid #861c1c", left:"20%" }} class="btn btn-primary mb-3" onclick="subscribed()">Sign up</button>
            </div>
            </form>
        </span>
        <span className="signin">
            <form>
            <h3 className="register" style={{ color: "#861c1c"}}>Sign in</h3><br></br>
            <input type="email" style={{ width: "400px"}} class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"></input><br></br>
            <input type="password" style={{ width: "400px"}} class="form-control" id="exampleInputEmail1" placeholder="Password" aria-describedby="password"></input><br></br>
            <div class="col-auto">
            <button type="submit" style={{ backgroundColor: "#861c1c", border:"2px solid #861c1c", left:"20%" }} class="btn btn-primary mb-3" onclick="subscribed()">Log in</button>
            </div>
            </form>
        </span>
        
        </div>
        
     )
  }
  export default Register;