import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // 👉 Lottie import

const AuthCard = ({ type }) => {
  const isLogin = type === "login";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy authentication (ekhane backend lagbe na)
    localStorage.setItem("isAuthenticated", true);

    // Redirect to Resume Builder page
    navigate("/resume-builder");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Form Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center bg-white px-8 py-12"
      >
        <div className="w-full max-w-md">
          {/* Logo */}
          <h1 className="text-xl font-bold text-indigo-900 mb-6">Skillfolio</h1>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </h2>
          <p className="mt-1 text-gray-600 text-sm">
            {isLogin
              ? "Please enter your details"
              : "Sign up to start building your resume"}
          </p>

          {/* Form */}
          <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm"
              required
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm"
                required
              />
            )}

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md font-medium text-sm hover:bg-purple-700 transition"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-gray-400 text-xs">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Button */}
          <button className="w-full border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition text-sm">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-4 h-4"
            />
            <span>
              {isLogin ? "Sign in with Google" : "Sign up with Google"}
            </span>
          </button>

          {/* Switch Login <-> Signup */}
          <p className="mt-5 text-xs text-center text-gray-600">
            {isLogin ? "Don’t have an account? " : "Already have an account? "}
            <Link
              to={isLogin ? "/signup" : "/login"}
              className="text-purple-600 font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Right Animation Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex items-center justify-center bg-purple-100"
      >
        <DotLottieReact
          src="/Login.lottie" // 👉 ekhane tor animation path bosabi
          loop
          autoplay
          className="max-w-md w-full"
        />
      </motion.div>
    </div>
  );
};

export default AuthCard;
