"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleLogin from "@/components/ui/GoogleLogin";
import Link from "next/link";
import GoBackButton from "@/components/ui/GoBackButton";
import ThemeToggle from "@/app/theme-toggle";
import LanguageToggle from "@/components/ui/lan";
import Image from "next/image";
// import LeftSideVisual from "@/components/login/left-side-visual";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   setLoading(true);
  //   try {
  //     console.log("Login Attempt:", data);
  //     alert("Logged in successfully!");
  //   } catch (err) {
  //     console.error(err);
  //     alert("Login failed!");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/api/v1/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ important if you use httpOnly cookies
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await res.json();
      console.log(result);
      console.log(result?.token);

      if (!res.ok) {
        throw new Error(result.message || "Login failed");
      }

      // ✅ OPTION A: token returned in body
      if (result.token) {
        localStorage.setItem("token", result.token);
      }

      // ✅ redirect after login
      window.location.href = "/dashboard"; // or router.push("/")
    } catch (err) {
      console.error("Login error:", err);
      alert(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Left Side - Visual Element (Desktop Only) */}
      {/* <div className="hidden lg:block lg:w-1/2 relative h-screen overflow-hidden rounded-tr-3xl rounded-br-3xl">
        <Image
          src="https://images.unsplash.com/photo-1639437038507-749a056cd07c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHdoaXRlJTIwYmFja2dyb3VuZCUyMHNtYWxsJTIwb2JqZWN0fGVufDB8fDB8fHww"
          alt="Students studying — Ad-Dirasah"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
       
      </div> */}

      {/* Right Side - Login Form */}
      <div className="w-full  flex flex-col items-center justify-center px-8 py-10">
        {/* Header Controls */}
        <div className="absolute top-6 right-6 flex items-center space-x-4">
          <ThemeToggle />
          {/* <LanguageToggle /> */}
        </div>

        {/* Main Form Card */}
        <div className="w-full max-w-sm">
          {/* Logo/Back Section */}
          <div className="mb-8 flex items-center justify-between">
            <GoBackButton />
            <h1 className="text-3xl font-bold text-primary">Login</h1>
            <div className="w-6" /> {/* Spacer for alignment */}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
              {errors.password && (
                <p className="text-destructive text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
                />
                <span className="text-foreground">Remember me</span>
              </label>
              <a
                href="/reset-password"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-border" />
            <span className="mx-3 text-muted-foreground text-sm">OR</span>
            <hr className="flex-1 border-border" />
          </div>

          {/* Google Login */}
          <GoogleLogin />

          {/* Sign Up Link */}
          <p className="text-center text-muted-foreground mt-6 text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
