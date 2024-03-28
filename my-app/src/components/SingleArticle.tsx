import React from 'react';
import darkLogo from "../assets/dark-logo.png";

export const SingleArticle = () => {
    return (
            <article
                className="w-80 border border-gray-100 rounded-br-xl overflow-hidden overflow-hidden shadow-md flex flex-wrap bg-white rounded-br-4xl">
                <div
                    className=" h-40 overflow-hidden bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    <img src={darkLogo} alt="xD" className="w-full max-w-full h-full max-h-40 object-cover"/>
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Tailwind card
                    </h5>
                    <p className="block text-base font-light leading-relaxed text-inherit antialiased">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button data-ripple-light="true" type="button"
                            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Read More
                    </button>
                </div>
            </article>
    )

}
