import { useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";


export default function Auth(){
  const [mode, setMode] = useState("signup");

  // Get signUp passed through the Provider of AuthContext
  const {signUp, user, logout, login} = useContext(AuthContext);

  const {register, handleSubmit, formState: {errors}} = useForm();
  // onSubmit called in form has data property
  function onSubmit(data){
    signUp(data.email, data.password);
  }

  return(
    <div className="page">
      <div className="container">
        <div className="auth-container">
          {user && <p>User Logged in: {user.email}</p>}
          <h1 className="page-title">
            {mode === 'signup'? 'Sign Up' : 'Login'}
          </h1>

          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" type="email" id="email" 
              {...register('email', {required: "Email is required"})} />
              {errors.email && <span style={{color:"crimson"}}>{errors.email.message}</span>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input className="form-input" type="password" id="password" 
              {...register('password', {
                required: "Password is required",
                minLength:{
                  value: 6,
                  message: "Password must be at least 6 characters"
                },
                maxLength:{
                  value: 20,
                  message: "Password must be at most 20 characters"
                }
              })} />
              {errors.password && <span style={{color:"crimson"}}>{errors.password.message}</span>}
            </div>

            <button className="btn btn-primary btn-large" type="submit">
              {mode === 'signup'? 'Sign Up' : 'Login'}
            </button>
          </form>

          <div className="auth-switch">
            {mode === 'signup' 
            ?<p>
              Already have an account? <span className="auth-link" onClick={() => (setMode("login"))}>Login</span>
            </p>
            :<p>
              Don't have an account? <span className="auth-link" onClick={() => (setMode("signup"))}>Signup</span>
            </p>}
          </div>
        </div>
      </div>
    </div>
  )
}