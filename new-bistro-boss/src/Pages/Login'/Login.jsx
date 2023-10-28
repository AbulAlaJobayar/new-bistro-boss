import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/authProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const [check, setCheck] = useState("");
  const [error,setError]=useState("")
const {signIn}=useContext(AuthContext)
let navigate = useNavigate();
let location = useLocation();

let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  console.log(check);
  const handleClicked = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user)
      navigate(from, { replace: true });
    })
    .catch(error=>{
      const errorMessage = error.message;
      setError(errorMessage)
    })

    }

  
  const doCheck = () => {

const user_captcha_value=check
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } 
    else {
        setDisable(true);
    }
  }
 

  return (
    <div className="hero min-h-screen bg-base-200">
      
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleClicked} className="card-body">
            <div className="form-control">
              <p className="text-red-500 text-center">{error}</p>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              <LoadCanvasTemplate />
            </div>
            <div className="relative">
              <input
              onBlur={doCheck}
                type="text"
                className="input input-bordered"
                onChange={(e) => setCheck(e.target.value)}
              ></input>
              {/* <button className="absolute left-36 btn-xs top-3 bg-green-900 text-white  btn "onClick={doCheck}>Check</button> */}
            </div>

            <div className="form-control mt-6">
              <input
                disabled={disable}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
