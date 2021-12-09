import React, { Component } from "react";
import { firebase } from "../../firebase";

export default class SignUp extends Component {
    render() {
        const SignUpWithFirebase =()=> {
            var google_provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signUpWithPopup(google_provider)
            .then((re) =>{
                console.log(re);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        return (
            <div className="container mt-5">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">Login?</a>
                </p>
                <button onClick={SignUpWithFirebase}>Sign up with Google</button>
            </form>
            </div>
        );
    }
}