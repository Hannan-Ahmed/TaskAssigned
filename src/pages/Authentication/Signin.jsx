import SignupLogo from "../../assets/signup-logo.avif";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import { Suspense, useEffect } from "react";
import Loader from "../../components/Loader";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (authState.isLoading)
    <Loader />;
  });

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required")
      .matches(
        /^[^\d][a-zA-Z\d._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,
        "Email must not start with a digit and must include @ symbol"
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login(data));
    console.log(data);
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      toast.success("Login Successful");
      navigate("/");
    } else if (authState.errorMessage) {
      toast.error(authState.errorMessage);
    }
  }, [authState.isLoggedIn, authState.errorMessage, navigate]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <section className="h-screen">
          <div className="h-full">
            <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img src={SignupLogo} className="w-full" alt="Sample image" />
              </div>

              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 border-2 shadow-2xl border-blue-400 p-5 m-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5 me-4 text-3xl font-semibold text-blue-500 ">
                    Signin
                  </div>

                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      {...register("email")}
                      className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="exampleFormControlInput2"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Email address
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}{" "}
                      </p>
                    )}
                  </div>

                  <div className="relative mb-6" data-twe-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.22rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      placeholder="Password"
                      {...register("password")}
                    />
                    <label
                      htmlFor="exampleFormControlInput3"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[                    0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Password
                    </label>
                    {errors.password && (
                      <p className="text-red-500 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-6 flex items-center justify-between">
                    <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                      <input type="checkbox" value="" id="exampleCheck2" />
                      <label
                        className="inline-block ps-[0.15rem] hover:cursor-pointer"
                        htmlFor="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>

                    <Link to="/forget-password">Forgot password?</Link>
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="bg-blue-400 font-semibold text-white text-lg  inline-block w-full rounded bg-primary px-7 pb-2 pt-3  uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      Sign In
                    </button>

                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                      Don&rsquo;t have an account?{" "}
                      <Link
                        to="/signup"
                        className="underline text-blue-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                      >
                        Signup here.
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default Signin;
