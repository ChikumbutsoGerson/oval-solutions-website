import React from 'react'

const AboutCompany = () => {
  return (
    
<div className="w-full bg-white p-12 py-5">
    <div className="relative px-4 pt-2 mt-0 mx-auto bg-green-50 rounded-3xl sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
            <div className="mb-0 lg:mb-0 lg:max-w-lg">
                <div className="max-w-xl mb-6">
                    <div>
                        <p className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-teal-accent-400">
                            WHO WE ARE
                        </p>
                    </div>
                    <h2
                        className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-700 sm:text-5xl sm:leading-snug">
                        ABOUT US
                    </h2>
                    <ul className="list-disc text-base text-gray-700 md:text-lg">
                    <li>
                        Innovative and unconventional ICT solutions provider that came into
                        existence in May 2021
                    </li>
                    <li>
                        Committed to providing our clients excellent services and geared to
                        exceed our clients&rsquo; expectations
                    </li>
                    <li>
                        Comprised of professionals with diverse expertise and experience in
                        various ICT segments committed and dedicated to serving you, our
                        clients, with a great attitude
                    </li>
                    <li>
                        Comprised of young and talented professionals who are hungry for
                        continuous improvement by collaborating with professionals from other
                        countries
                    </li>
                    </ul>
                    
                </div>
                <div className="mb-6">
                    <p
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-green-500 rounded-full shadow-md outline-none hover:bg-green-400 focus:ring">
                        Learn More...</p>
                </div>
       
            </div>
        </div>
        <div
            className="flex justify-center h-full overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:w-2/3 lg:items-end lg:justify-start xl:w-1/2">
            <img src="/PhoneImage.png"
                className="object-cover object-top w-full max-w-xl h-96 rounded-2xl lg:ml-64 lg:-mb-24 lg:h-auto lg:max-w-screen-md xl:ml-0 xl:-mb-32"
                alt="" />
        </div>
    </div>
</div>
  )
}

export default AboutCompany