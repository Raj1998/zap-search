import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer id="footer" className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg> */}
                <img src="img/icon_128.png" style={{"height": "28px"}} alt=""/>
                <span className="ml-3 text-xl">ZapSearch</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 ZapSearch —
                <a href="https://twitter.com/raj199821" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Raj Patel</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a target="_blank" href="https://github.com/raj1998" ><i className="ml-3 text-gray-500 fab fa-github"></i></a>
                    <a target="_blank" href="https://www.facebook.com/raj214patel/" ><i className="ml-3 text-gray-500 fab fa-facebook"></i></a>
                    <a target="_blank" href="https://www.instagram.com/__raj__214/" ><i className="ml-3 text-gray-500 fab fa-instagram"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/raj214/" ><i className="ml-3 text-gray-500 fab fa-linkedin"></i></a>
                    <a target="_blank" href="https://twitter.com/raj199821" ><i className="ml-3 text-gray-500 fab fa-twitter"></i></a>
                </span>
            </div>
            </footer>
        </div>
    )
}
