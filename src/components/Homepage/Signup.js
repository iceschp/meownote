import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import firebase, { auth, signInwithGoogle } from '../../firebase';

const SignUp = () => {
    const signInwithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInwithPopup(authentication, provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;

        try {

            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch(error) {
            alert(error);
        }
    }

    if (currentUser) {
        return <Navigate to="/src/components/Tasks.js"/>;
    }

    return (
        <>
            <div className="containerLogin">
            <h1 class="headerSignup">Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <div className="App">
                <button className="signupbtn" onClick={signInwithGoogle}>
                    Sign in with Google
                </button>
            </div>
            
            </form>
            </div>
            
        </>
    )
}

export default SignUp;