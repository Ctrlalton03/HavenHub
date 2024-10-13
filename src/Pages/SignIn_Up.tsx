import { useState } from "react";


const signIn_Up = () => {

    const [isSignUp, setIsSignUp] = useState(true);
    
    const switchMode = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <div>
            <div className="auth-container">
      {isSignUp ? (
        <div className="sign-up-form">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <button onClick={switchMode}>Sign In</button></p>
        </div>
      ) : (
        <div className="sign-in-form">
          <h2>Sign In</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
          </form>
          <p>Don't have an account? <button onClick={switchMode}>Sign Up</button></p>
        </div>
      )}
    </div>
        </div>
    )
}

export default signIn_Up;