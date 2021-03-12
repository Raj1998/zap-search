import React from "react";
import Features from "./Components/Features";
import Footer from "./Components/Footer"
import Help from "./Components/Help"

export default function App(props) {
    return (
        <div>
            <header className="header text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="#top" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <img src="img/icon_128.png" style={{"height": "28px"}} alt=""/>
                        <span className="ml-3 text-xl">ZapSearch ⚡️</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900" href="#features">Features</a>
                        <a className="mr-5 hover:text-gray-900" href="#help">Help</a>
                        <a className="mr-5 hover:text-gray-900" href="#feedback">Feedback</a>
                        <a className="mr-5 hover:text-gray-900" href="#footer">Contact</a>
                        <a className="mr-5 hover:text-gray-900" href="#top"> ⬆️ </a>
                    </nav>
                </div>
            </header>

            <div className="content" >

            <div id="top" className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="img/ss1.png" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Spotlight Search Tool For Chrome
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">Spotlight Search for Chrome. The ⚡️ Blazing fast ⚡️ search for Bookmarks, History and Special commands.</p>
                    <h2 className="mb-8 leading-relaxed">Available on Chrome Web Store. Download Now:</h2>
                    <h1 className="text-2xl"><a href="https://chrome.google.com/webstore/detail/zapsearch-%E2%9A%A1%EF%B8%8F/bfgpphnadhhfdbkjcbjolignifapccdh?utm_source=chrome-ntp-icon" target="_blank">Click Here To Download </a></h1>
                    <div className="flex justify-center">
                        {/* <button style={{    "background-color": "#929a25" }} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                        <a href="https://chrome.google.com/webstore/detail/zapsearch-%E2%9A%A1%EF%B8%8F/bfgpphnadhhfdbkjcbjolignifapccdh?utm_source=chrome-ntp-icon" target="_blank"> <img src="img/download.png" style={{"height": "90px"}} alt=""/> </a>
                    </div>
                    </div>
                </div>
            </div>

            <Features />
            <Help />
            <iframe id="feedback" src="https://docs.google.com/forms/d/e/1FAIpQLSdSmgy-dGXho28JD6ajrWmU-15xU5v6rmE-m1FG5azxc8dEgA/viewform?embedded=true" width="100%" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <Footer />

            </div>
            
        </div>
    );
}

