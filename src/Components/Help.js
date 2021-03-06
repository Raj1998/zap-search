import React from 'react';

export default function Help() {
  return (
    <div>
      <div id='help'>
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-wrap w-full mb-20'>
              <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
                <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
                  Help
                </h1>
                <div className='h-1 w-20 bg-indigo-500 rounded'></div>
              </div>
              <p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
                <strong>Reload</strong> your tab to be able to launch after initial installation. Press 
                <strong> Command + Shift + L </strong>
                or 
                <strong> Ctrl + Shift + L </strong>
                to launch. To change the HotKey press the extension icon in Chrome toolbar.
              </p>
            </div>
            <div className='flex flex-wrap -m-4'>
              <div className='xl:w-1/4 md:w-1/2 p-4'>
                <div className='bg-gray-100 p-6 rounded-lg'>
                  <img
                    className='h-40 rounded w-full object-cover object-center mb-6'
                    src='img/1.png'
                    alt='content'
                  />
                  <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                    HotKey
                  </h3>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                    To Launch
                  </h2>
                  {/* <p className='leading-relaxed text-base'>
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p> */}
                </div>
              </div>
              <div className='xl:w-1/4 md:w-1/2 p-4'>
                <div className='bg-gray-100 p-6 rounded-lg'>
                  <img
                    className='h-40 rounded w-full object-cover object-center mb-6'
                    src='img/2.png'
                    alt='content'
                  />
                  <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                    Search Bookmarks
                  </h3>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                    Type to search
                  </h2>
                  {/* <p className='leading-relaxed text-base'>
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p> */}
                </div>
              </div>
              <div className='xl:w-1/4 md:w-1/2 p-4'>
                <div className='bg-gray-100 p-6 rounded-lg'>
                  <img
                    className='h-40 rounded w-full object-cover object-center mb-6'
                    src='img/3.png'
                    alt='content'
                  />
                  <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                    Search History
                  </h3>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                    Prepend '@'
                  </h2>
                  {/* <p className='leading-relaxed text-base'>
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p> */}
                </div>
              </div>
              <div className='xl:w-1/4 md:w-1/2 p-4'>
                <div className='bg-gray-100 p-6 rounded-lg'>
                  <img
                    className='h-40 rounded w-full object-cover object-center mb-6'
                    src='img/4.png'
                    alt='content'
                  />
                  <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                    Powerful Commands
                  </h3>
                  <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                    Prepend '>'
                  </h2>
                  {/* <p className='leading-relaxed text-base'>
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
