"use client";
import { useAuth } from "@/Context/AuthProvider";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SignInPage = () => {
  const { signIn, googleSignIn, gitHubLogin, passwordReset } = useAuth();
  const router = useRouter();
  const emailRef = useRef();

  

  const googleRegister = () => {
    googleSignIn()
      .then((result) => {
        router.push("/");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

   const resetPassword = () => {
    const email = emailRef.current?.value;
    if (!email) {
      alert("Please enter your email address first.");
      return;
    }

    passwordReset(email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send reset email.");
      });
  };

  const githubSignUp = () => {
    gitHubLogin()
      .then((result) => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSighIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-4" onSubmit={handleSighIn}>
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <button
              type="button"
              onClick={resetPassword}
              className="text-blue-600 hover:underline focus:outline-none"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400">or</div>

        {/* Google Sign In */}
        <button
          onClick={googleRegister}
          className="w-full flex items-center justify-center gap-3 border py-3 rounded-md hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm text-gray-700">Continue with Google</span>
        </button>

        <button
          onClick={githubSignUp}
          className="w-full mt-4 flex items-center justify-center gap-3 border py-3 rounded-md hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt="GitHub"
            className="w-5 h-5"
          />
          <span className="text-sm text-gray-700">Continue with GitHub</span>
        </button>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <a
            href="/signUp"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
