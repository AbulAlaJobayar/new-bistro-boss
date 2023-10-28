import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/authProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, sendEmail, updateUserProfile, logOut } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data.name, data.email, data.password);
    createUser(data.email, data.password).then((result) => {
      updateUserProfile(data.name, data.password).then(() => {
        const saveUser = { name: data.name, email: data.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              
              sendEmail().then(() => {
                logOut().then(() => {
                  navigate("/login");
                });
              });
            }
          });
      });

      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2 ml-10">
            <h1 className="text-5xl font-bold"> SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card w-1/2  flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  defaultValue="name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  defaultValue="xyz@gmail.com"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-500">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,

                    // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8}$/,
                  })}
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <p role="alert">password must be REQUIRED</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert">password must be 6 character</p>
                )}

                {/* {errors.password?.type === "pattern" && (
                  <p role="alert">
                    password must be 1 uppercase 1 lowercase and 1 spacial
                    character
                  </p>
                )} */}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
