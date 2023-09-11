<template>
  <!-- component -->
<div class="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-[#F5F7FA]">
  <div class="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl">
    <div class="flex flex-col items-center sm:px-5 md:flex-row">
      <div class="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
        <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5">
          <div class="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase">
            <p class="inline">
              <svg class="w-3.5 h-3.5 mr-1" fill="currentColor" viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </p>
            <p class="inline text-xs font-medium">New</p>
          </div>
          <a class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Write anything. Be creative.</a>
          <div class="pt-2 pr-0 pb-0 pl-0">
            <p class="text-sm font-medium inline">author:</p>
            <a class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">Jack Sparrow</a>
            <p class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, April 2021 ·</p>
            <p class="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="block">
          
<div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?size=626&ext=jpg&ga=GA1.2.1795545853.1694355761&semt=ais" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?size=626&ext=jpg&ga=GA1.2.1795545853.1694355761&semt=ais" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?size=626&ext=jpg&ga=GA1.2.1795545853.1694355761&semt=ais" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?size=626&ext=jpg&ga=GA1.2.1795545853.1694355761&semt=ais" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?size=626&ext=jpg&ga=GA1.2.1795545853.1694355761&semt=ais" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

        </div>
      </div>
    </div>
  </div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5F7FA" fill-opacity="1" d="M0,128L20,128C40,128,80,128,120,149.3C160,171,200,213,240,234.7C280,256,320,256,360,234.7C400,213,440,171,480,154.7C520,139,560,149,600,160C640,171,680,181,720,202.7C760,224,800,256,840,266.7C880,277,920,267,960,234.7C1000,203,1040,149,1080,122.7C1120,96,1160,96,1200,112C1240,128,1280,160,1320,165.3C1360,171,1400,149,1420,138.7L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
                <img class="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png" alt="" />
            </div>

            <div>
                <img class="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png" alt="" />
            </div>

            <div>
                <img class="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png" alt="" />
            </div>

            <div>
                <img class="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-4.png" alt="" />
            </div>

            <div>
                <img class="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-5.png" alt="" />
            </div>

            <div>
                <img class="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png" alt="" />
            </div>
        </div>
    </div>
</section>

<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Integrate with apps</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div class="overflow-hidden bg-[#F5F7FA] rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Gmail</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-[#F5F7FA] rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Slack</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="block w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-[#F5F7FA] rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/shopify-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Shopify</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-[#F5F7FA] rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/intercom-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Intercom</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-[#F5F7FA] rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/twitter-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Twitter</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-[#F5F7FA] rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Sketch</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>
        </div>

        <div class="mt-12 text-center">
            <a href="#" title="" class="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"> Check all 1,593 applications </a>
        </div>
    </div>
</section>
<section class="py-10 bg-[#F5F7FA] sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div class="relative mb-12">
                <img class="w-full rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg" alt="" />

                <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                    <div class="overflow-hidden bg-white rounded">
                        <div class="px-10 py-6">
                            <div class="flex items-center">
                                <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">37%</p>
                                <p class="pl-6 text-sm font-medium text-black sm:text-lg">High Conversions <br />on Landing Pages</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                    <svg class="w-8 h-8 text-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Build a perfect team within hours.</h2>
                <p class="mt-6 text-lg leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse duis enim velit mollit. Exercitation veniam.</p>
                <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80" role="button"> Explore more </a>
            </div>
        </div>
    </div>
</section>

</template>