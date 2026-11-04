
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utility/firebaze.jsx';

import "./login.css";

function Login() {

    // Navigate between pages
    const navigate = useNavigate();

    // Store email and password
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // Store validation errors
    const [errors, setErrors] = useState({});

    // Show or hide password
    const [showPassword, setShowPassword] = useState(false);

    // Loading state
    const [loading, setLoading] = useState(false);


    // Handle input changes
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        // Clear the error when the user changes the input
        setErrors({
            ...errors,
            [name]: "",
            general: ""
        });
    };


    // Validate form inputs
    const validateForm = () => {

        const newErrors = {};

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } 
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };


    // Handle login form submission
    const handleSubmit = async (e) => {

        e.preventDefault();

        // Stop if validation fails
        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {

            // Authenticate user with Firebase
            const userCredential = await signInWithEmailAndPassword(
                auth,
                formData.email.trim(),
                formData.password
            );

            // Get logged-in user information
            const user = userCredential.user;

            console.log("Login successful!");
            console.log("User ID:", user.uid);
            console.log("User Email:", user.email);

            // Redirect to home page
            navigate("/");

        } 
        catch (error) {

            console.error("Firebase login error:", error.code);
            console.error("Firebase error message:", error.message);

            let errorMessage = "Login failed. Please try again.";

            switch (error.code) {

                case "auth/user-not-found":
                case "auth/invalid-credential":
                    errorMessage = "Incorrect email or password.";
                    break;

                case "auth/wrong-password":
                    errorMessage = "Incorrect password.";
                    break;

                case "auth/invalid-email":
                    errorMessage = "Please enter a valid email address.";
                    break;

                case "auth/user-disabled":
                    errorMessage = "This account has been disabled.";
                    break;

                case "auth/too-many-requests":
                    errorMessage = "Too many attempts. Please try again later.";
                    break;

                case "auth/network-request-failed":
                    errorMessage = "Network error. Check your internet connection.";
                    break;

                case "auth/operation-not-allowed":
                    errorMessage = "Email/password login is not enabled in Firebase.";
                    break;

                default:
                    errorMessage = error.message;
            }

            setErrors({
                general: errorMessage
            });

        } 
        finally {

            setLoading(false);

        }
    };


    return (

        <div className="login-page">

            <div className="login-container">

                {/* Amazon logo */}
                <Link to="/" className="login-logo">
                    amazon<span>.com</span>
                </Link>


                {/* Login form */}
                <div className="login-box">

                    <h1>Sign in</h1>

                    <form onSubmit={handleSubmit}>

                        {/* Email */}
                        <div className="login-input-group">

                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            {errors.email && (
                                <p className="login-error">
                                    {errors.email}
                                </p>
                            )}

                        </div>


                        {/* Password */}
                        <div className="login-input-group">

                            <div className="password-label">

                                <label htmlFor="password">
                                    Password
                                </label>

                                <Link to="/forgot-password">
                                    Forgot password?
                                </Link>

                            </div>

                            <div className="password-input-wrapper">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                                <button
                                    type="button"
                                    className="show-password-btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>

                            </div>

                            {errors.password && (
                                <p className="login-error">
                                    {errors.password}
                                </p>
                            )}

                        </div>


                        {/* General Firebase error */}
                        {errors.general && (
                            <div className="login-general-error">
                                {errors.general}
                            </div>
                        )}


                        {/* Login button */}
                        <button
                            type="submit"
                            className="login-submit-btn"
                            disabled={loading}
                        >

                            {loading ? "Signing in..." : "Sign in"}

                        </button>


                        <p className="login-terms">
                            By continuing, you agree to Amazon's
                            <a href="#conditions"> Conditions of Use </a>
                            and
                            <a href="#privacy"> Privacy Notice</a>.
                        </p>

                    </form>


                    {/* Help section */}
                    <div className="login-help">

                        <details>
                            <summary>Need help?</summary>

                            <p>
                                Make sure your email and password are
                                correct. If you cannot access your account,
                                use the password recovery option.
                            </p>

                        </details>

                    </div>


                    {/* Create account */}
                    <div className="login-divider">
                        <span>New to Amazon?</span>
                    </div>

                    <Link to="/signup" className="create-account-btn">
                        Create your Amazon account
                    </Link>

                </div>


                {/* Footer */}
                <footer className="login-footer">

                    <div className="login-footer-links">

                        <a href="#conditions">Conditions of Use</a>

                        <a href="#privacy">Privacy Notice</a>

                        <a href="#help">Help</a>

                    </div>

                    <p>
                        © {new Date().getFullYear()} Amazon Clone.
                        For educational purposes.
                    </p>

                </footer>

            </div>

        </div>

    );

}

export default Login;
