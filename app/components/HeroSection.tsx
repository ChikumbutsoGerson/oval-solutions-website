import React from 'react';


const HeroSection = () => {
    return (
        <>
<section className="w-full bg-center bg-cover"
   style={{
    backgroundImage:
      'url(https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)',
  }}>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="650" viewBox="0 0 1500 500" preserveAspectRatio="none"
        className="relative w-full">
        <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(45)">
                <stop offset="35%" stop-color="#BAD4A9" />
                <stop offset="65%" stop-color="#54AC54" />
            </linearGradient>
        </defs>
        <path d="M 0,0
         L 0,400
         Q 750,500 1500,270
         L 1500, 0
         Z" fill="url('#myGradient')" />
    </svg>

    <div className="absolute flex flex-col justify-center w-full mb-20 mx-auto overflow-x-hidden text-center top-20">
        <div className="max-w-xl mx-auto mt-12 md:max-w-5xl">
        <span className="text-white font-semibold uppercase tracking-widest">WELCOME TO</span>

            <h1 className="text-3xl text-gray-900 font-extrabold leading-tight sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight">
            OVAL 
            <span className="text-yellow-200 pl-4">
            SOLUTIONS
            </span>
            </h1>
            <p className="mt-6 text-xl font-medium leading-7 font-sans text-gray-600">Professionals with diverse expertise and experience in various ICT segments committed and dedicated to serving you, our clients, with a great attitude
            </p>
            <button type="button"
                className="mt-12 rounded-full border-1 border-yellow-100 text-white bg-green-900 hover:bg-green-800 focus:outline-none  focus:ring-gray-300 font-medium text-base px-8 py-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Work With Us
            </button>
        </div>
    </div>
</section>
</>

      );
}

export default HeroSection