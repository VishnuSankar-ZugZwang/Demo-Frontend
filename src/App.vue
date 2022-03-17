<template>
 <header class="text-gray-600 body-font cs_navbar pt-5 pr-5 pl-5">
        <div class="logo_section ">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img alt="zugzwang" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./assets/zug.png">
                <span class="ml-3 text-xl"> ZugZwang </span>
            </a>
        </div>
            
  <nav class="navbar navbar-expand-lg bg-dark sticky-top navbar-top" :class="{ navbaropen: opened}">
  <span class="open-slide">
      <a href="#" @click="opened = !opened">
          <div class="con">
              <div class="bar top" :class="{ topopen: opened}"></div>
              <div class="bar mid" :class="{ midopen: opened}"></div>
              <div class="bar bot" :class="{ botopen: opened}"></div>
          </div>
      </a>
  </span>
<div id="side-menu" class="side-nav" :class="{ sidenavopen: opened}">
    <a class="nav_item" href="#benifits">Benifits</a>
    <a class="nav_item" href="#fluid">Fluid Intelligence</a>
    <a class="nav_item" href="#Important">Why Chess</a>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 cs_enroll_btn"><a href="#contact">Enroll</a>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
</div>
                
            </nav>
  </header>
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Do you want your child to improve focus, concentration & thinking skills?</h1>
    <p class="mb-8 leading-relaxed"> Chess is the best game to enhance your child’s intellectual growth & thinking skills. Join our program to unlock the benefits of Chess. After school & weekends options available.</p>
    <div class="flex">
          <div><button  class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"><a href="https://youtu.be/sIi_XodcEcM">Explore & Enrol</a></button>
          </div>
          <div><button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><a href="#">Learn More</a></button></div>
        </div>
  </div>
  <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <div class="flex-none  w-23 ">
        <img class="object-cover object-center rounded " src="./assets/hero.png">

    </div>
  </div>
    </div>
  <section class="Video">
    <div class="container px-5 py-24 mx-auto text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        "Must see message from Bharath Divyang, IIT - IIM Alumni "
        <br>
        " Founder & CEO, ZugZwang Academy "
      </h1>
      <center>
        <embed src="https://www.youtube.com/embed/sh_hxm2DLmQ" width="100%" height="100%">
      </center>
    </div>
    
  </section>
    <section class="text-gray-600 body-font" id="benifits">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Benifits</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          "Enrol your child at ZugZwang Academy to unlock the benefits of our Unique Methodology and Pedagogy."
          </p>
        </div>
      <div class="flex flex-wrap -m-2">
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./assets/decision-making.png">
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium"> Structured Approach </h2>
                            <p class="text-gray-500"> Rank-level structured approach to mastery </p>
                        </div>
                    </div>
                </div>

                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./assets/sharing.png">
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">World’s Best Pedagogy</h2>
                            <p class="text-gray-500">Based on how a child’s brain learns</p>
                        </div>
                    </div>
                </div>

                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./assets/leadership.png">
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">Top Class Coaches</h2>
                            <p class="text-gray-500">Experienced, trained &amp; top-rated coaches</p>
                        </div>
                    </div>
                </div>

                

                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./assets/jigsaw.png">
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">Million Puzzles</h2>
                            <p class="text-gray-500">AI based million plus puzzles from actual games</p>
                        </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./assets/chess.png">
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium">Chess Portals</h2>
                            <p class="text-gray-500">Access to gamified chess portals to enhance learning</p>
                        </div>
                    </div>
                </div>

                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="./assets/skills.png">
                        <div class="flex-grow">
                            <h2 class="text-gray-900 title-font font-medium"> Life Skills </h2>
                            <p class="text-gray-500"> Learn 21st century Life Skills </p>
                        </div>
                    </div>
                </div>
            </div>


      </div>
    </section>        
             
       <section id="stats" class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> 10th Academic Year </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> Any education is impactful only with insights. What we've learned over 10 years are the insights on how children learn and excel. This has helped us craft courses, classes, programs and experiences that transfer children's fundamental thinking skills. And our stats do the talking</p>
            </div>
            <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M8 17l4 4 4-4m-4-5v9"></path>
                            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900">10.7K</h2>
                        <p class="leading-relaxed">Course Registrations</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900">5000+</h2>
                        <p class="leading-relaxed">Students</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900">40</h2>
                        <p class="leading-relaxed">Batches</p>
                    </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900">50</h2>
                        <p class="leading-relaxed">Coaches &amp; Mentors</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
            <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"> Transform your child's life through Fluid Intelligence </h1>
                <button class="flex-shrink-0 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg mt-10 sm:mt-0"> <a href="#contact">Enroll Today </a></button>
            </div>
        </div>
    </section>
    <section id="testimonials" class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
            <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/2 w-full">
                    <div class="h-full bg-gray-100 p-8 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p class="leading-relaxed mb-6">When we were looking for an online chess coach for my son, we came to know about ZugZwang chess academy. I can see a remarkable progress in my son after being coached by ZugZwang. I highly recommend ZugZwang chess academy for a enriching learning experience.</p>
                        <a class="inline-flex items-center">
                            <img alt="testimonial" src="./assets/cust.svg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Anuradha</span>
                            <span class="text-gray-500 text-sm">Mother of Siddharth</span>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="p-4 md:w-1/2 w-full">
                    <div class="h-full bg-gray-100 p-8 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p class="leading-relaxed mb-6">A very disciplined and best academy to learn chess. Very focussed, healthy timely tournaments and regular practice sessions with good feedback and techniques taught.
                            Bharath sir is remarkable with complete focus on kids and individual attention.</p>
                        <a class="inline-flex items-center">
                            <img alt="testimonial" src="./assets/cust.svg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center">
                            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Beena</span>
                            <span class="text-gray-500 text-sm">Parent of Zoya</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="text-gray-600 body-font" id="fluid">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Benefits of Fluid Intelligence</h1>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Fluid Intelligence is the ability to think about &amp; solve complex problems through a systematic  and structured approach. </p>
            </div>
            <div class="flex flex-wrap -m-4">
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Logical Reasoning</h2>
                        <p class="leading-relaxed text-base">Master logical reasoning through Chess Studies</p>
                    </div>
                </div>

                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Critical Thinking</h2>
                        <p class="leading-relaxed text-base">Enhance critical thinking through Endgame Tactics</p>
                    </div>
                </div>
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Problem Solving</h2>
                        <p class="leading-relaxed text-base">Master problem solving through Middle game Puzzles</p>
                    </div>
                </div>
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                            </svg>
                        </div>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Decision Making</h2>
                        <p class="leading-relaxed text-base">Learn the science of decision making through gameplay</p>
                    </div>
                </div>
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                            </svg>
                        </div>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Strategic Thinking</h2>
                        <p class="leading-relaxed text-base"> Analyze grand master games to understand strategy </p>
                    </div>
                </div>
                <div class="xl:w-1/3 md:w-1/2 p-4">
                    <div class="border border-gray-200 p-6 rounded-lg">
                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Analytical Thinking</h2>
                        <p class="leading-relaxed text-base"> Learn the art of analysis through Chess </p>
                    </div>
                </div>
            </div>
            <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"><a href="#contact"> Benefit Today </a></button>
        </div>
    </section>
    <section class="Video" id="Important">
        <div class="container px-5 py-24 mx-auto text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Why is it important to learn Chess?</h1>
            <center><embed src="https://www.youtube.com/embed/O0b6rJChKWg" width="100%" height="100%"></center>
        </div>
    </section>
    
    

</template>

<script>

export default {
  name: 'App',
  };

</script>

<style>


.cs_explore_btn{
   display: flex;
    width: 105px;
    height: 150px;
    font-size: 15px;
    align-items: center;
    justify-content: center;
    background:#f3f4f6;
    border: none;

}
.side-nav {
    align-items: center;
    display: flex;
}
 .nav_item{
  margin-right: 15px;
}
.navbaropen{
  background-color:black;
  overflow: hidden;
  height: 150px;
  margin-right: 500px;
}
.cs_navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo_section a{
  display: flex;
  align-items: center;

}
.cs_enroll_btn {
    display: flex;
    width: 105px;
    height: 30px;
    font-size: 15px;
    align-items: center;
    justify-content: center;
    background:#f3f4f6;
    border: none;
}
.cs_enroll_btn svg {
    width: 20px;
}
embed {
    max-width: 1200px;
    height: 500px;
}

</style>