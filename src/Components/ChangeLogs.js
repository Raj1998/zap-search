import React from 'react'

export default function ChangeLogs() {
    return (
        <div id='changeLogs'>

            <section className='text-gray-600 body-font'>
                <div className='container px-5 py-5 mx-auto'>

                    <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
                        
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
                            ChangeLogs
                        </h1>
                        <div className='h-1 w-20 bg-indigo-500 rounded'></div>

<br />

<h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                        v0.1.3
                        </h2>
                        <ul class="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                            <li>
                            Now works on New tab
                            </li>
                            <li>
                                Bug fixes
                            </li>
                            
                        </ul>
                        <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                            v0.1.1
                        </h2>
                        <ul class="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                            <li>
                                Bookmarks Folder Structure is now visible
                            </li>
                            <li>
                                Bug fixes
                            </li>
                            <li>
                                Better help messages
                            </li>
                        </ul>
                        


                    </div>
                </div>


            </section>
        </div>
    )
}
