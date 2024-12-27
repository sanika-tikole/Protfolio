import React from 'react';
import { motion } from 'framer-motion';

function Project() {
    return (
        <>
            {/* First Section */}
            <motion.div
                className="hero-content flex-col lg:flex-row mt-10"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.5 }}
            >
                <img
                    src="bookstore.png"
                    className="max-w-sm rounded-lg shadow-2xl transition-transform duration-500 hover:scale-110 h-custom w-custom"
                />
                <div>
                    <h1 className="text-5xl font-bold">BOOKSTORE HOMEPAGE</h1>
                    <p className="py-6">
                        Navbar: A horizontal navigation bar at the top with a dark background.<br />
                        Links for "Home," "Course," "Contact," and "About."<br />
                        A search bar with an icon for searching.<br />
                        A toggle icon, likely for light/dark mode.<br />
                        A "Login" button styled as a black button.<br />
                        Header Section: Contains a welcoming message and book picture.<br />
                        A pink button labeled "Get Started" for interaction or navigation.<br />
                        Image: On the right side, a graphic of books stacked together.<br />
                        Modern and minimal, with a dark theme and bright accent colors.
                    </p>
                </div>
            </motion.div>

            {/* Second Section */}
            <motion.div
                className="hero-content flex-col lg:flex-row-reverse mt-10"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.5 }}
            >
                <img
                    src="login.png"
                    className="max-w-sm rounded-lg shadow-2xl transition-transform duration-500 hover:scale-110 h-custom w-custom"
                />
                <div>
                    <h1 className="text-5xl font-bold">LOGIN PAGE</h1>
                    <p className="py-6">
                        The image shows a login page for an application or website.<br />
                        Title: "Login" is the title.<br />
                        Fields: Email and Password fields for user credentials.<br />
                        Button: Login button to submit data for verification.<br />
                        Link: "Not registered? Signup" directs users to the signup page.<br />
                        Authentication: Checks user credentials for access.
                    </p>
                </div>
            </motion.div>

            {/* Third Section */}
            <motion.div
                className="hero-content flex-col lg:flex-row mt-10"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.5 }}
            >
                <img
                    src="signup.png"
                    className="max-w-sm rounded-lg shadow-2xl h-custom w-custom"
                />
                <div>
                    <h1 className="text-5xl font-bold">SIGNUP PAGE</h1>
                    <p className="py-6">
                        The image shows a signup page for an application or website.<br />
                        Title: "Signup" is the title.<br />
                        Fields: Name, Email, and Password fields for user information.<br />
                        Button: Signup button to create a new user account.<br />
                        <br />
                        <button className="btn btn-primary">
                            <a href="https://github.com/sanika-tikole/bookstore">PROJECT LINK</a>
                        </button>
                    </p>
                </div>
            </motion.div>
        </>
    );
}

export default Project;
