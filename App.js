import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login';
import NavBar from './Navbar'
import { Button } from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import axios from "axios";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lname: "",
      username: "",
      password: "",
      loggedin: false,
      placeholder: "",
      logging_in: "",
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username)
    axios.post('https://reqres.in/api/register', {"email" : this.state.username, "password" : this.state.password})
        .then((msg) => {
          console.log(msg.data);})
  };

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }

  responseFacebook = (response) => {
    console.log(response);
  }

  render() {
    return (
      <div>
      <NavBar />
      <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-8 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign Up</h5>
                  <br />
                  <h2 className="card-title text-center">Create your Account</h2>
                  <h6 className="card-title text-center">Lorem ipsum dolor sit amet</h6>
                  <Row className = "mx-auto">
                    <Col>
                    <FacebookLogin
                          appId="388190398845314"
                          autoLoad={false}
                          fields="name,email,picture"
                          cssClass="btnFacebook"
                          icon={<i className="fa fa-facebook" style = {{marginLeft:'5px'}}>
                            </i>}
                          textButton = "&nbsp;&nbsp;Sign Up with Facebook"
                        >
                      </FacebookLogin>
                      
                    </Col>
                    
                    <Col>
                      <GoogleLogin
                        clientId="924359629432-gbuleds6spbc4a0g1d7lctd3c529ue70.apps.googleusercontent.com"
                        
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        
                        cookiePolicy={'single_host_origin'}
                        className="btnGoogle"
                        >
                         <i  style = {{marginLeft:'10px'}}>
                            </i>
                        <span>&nbsp;&nbsp;Sign Up with Google</span>
                        </GoogleLogin>
                    </Col>
                  </Row>
                  <br />
                  <div class="strike">
                    <span>or</span>
                  </div>
                  <br />
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <br />
                    <div className="form-label-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lname"
                        value={this.state.lname}
                        onChange={this.handleChange}
                      />
                    </div>
                    <br />
                    <div className="form-label-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                    </div>
                    <br />
                    <label>Password</label>
                    <div className="form-label-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <br />
                    <Button
                      variant="info"
                      type="submit"
                      onClick={this.handleLogin}
                      disabled={this.state.logging_in}
                      size="lg"
                      block
                    >
                      {this.state.logging_in ? "Registering" : "Sign Up"}
                    </Button>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div>

      </div>
      </div>
    )
  }
}

export default App