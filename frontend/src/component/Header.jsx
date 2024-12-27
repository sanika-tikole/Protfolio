import React from 'react';
import Bookstore from "../../public/Bookstore.png";

function Header() {
    return (
        <>
        <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  ">
                <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30">
                    <div className="space-y-8">
                       
                            <div className="text-5xl font-extrabold animate-bounce">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                                HELLO, WELCOME TO SEE MY PROTPOLIO
                                </span>
                            </div>
                        <p className="text-sm md:text-xl ">
                            In this project we add animation to opening text and notification dot<br></br>
                            About us page contain all imformation about me <br></br>
                            Bookstore website button contain imformation of bookstore website.


                        </p>
                        <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 transition-transform duration-500 hover:scale-110 ">
                            <a href="https://github.com/sanika-tikole">CLICK HERE TO GO GITHUB ACCOUNT</a></button>
                    </div>

                </div>
                <div className=" order-1 w-full mt-10 md:w-1/2">
                <img
                    src="image.jpg"
                    className="max-w-sm rounded-lg shadow-2xl h-custom w-custom ml-4 sm:ml-0 md:ml-12 lg:ml-16 xl:ml-20 transition-transform duration-500 hover:scale-110"
                />
                {/*<div class="bg-repeat-y bg-center ..." style="background-image: url()"></div>
                <button className="btn ms-40 mt-40 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300;">
                           Portfolio 
                </button>*/}
                </div>
            </div>
        </>
    )
}

export default Header
