import React from "react";
import Features from "./Components/Features";
import Footer from "./Components/Footer"

export default function App() {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <img src="img/icon_128.png" style={{"height": "28px"}} alt=""/>
                        <span class="ml-3 text-xl">ZapSearch ⚡️</span>
                    </a>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-900" href="#feat">Features</a>
                        <a class="mr-5 hover:text-gray-900">Feedback</a>
                    </nav>
                </div>
            </header>

            <div class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src="img/ss1.png" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Spotlight Search Tool For Chrome
                        <br class="hidden lg:inline-block" />
                    </h1>
                    <p class="mb-8 leading-relaxed">Spotlight Search for Chrome. The ⚡️ Blazing fast ⚡️ search for Bookmarks, History and Special commands.</p>
                    <p class="mb-8 leading-relaxed">Available on Chrome Web Store</p>
                    <div class="flex justify-center">
                        <button style={{    "background-color": "#929a25" }} class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <a href="https://chrome.google.com/webstore/detail/zapsearch-%E2%9A%A1%EF%B8%8F/bfgpphnadhhfdbkjcbjolignifapccdh?utm_source=chrome-ntp-icon" target="_blank"> <img src="img/download.png" style={{"height": "44px"}} alt=""/> </a>
                    </div>
                    </div>
                </div>
            </div>

            <Features />
            <Footer />
            
        </div>
    );
}

