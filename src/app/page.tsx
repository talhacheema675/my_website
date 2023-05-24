import Image from 'next/image';
import { Inter } from 'next/font/google'
import React from 'react';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div className='parent bg-white'>
    <div id="0" className='flex flex-row w-full h-16 bg-blue-500'>
        <div className='p-2'><Image src="/abc12.jpg" alt="My Image" width={50} height={50} className='grayscale'/> </div>
        <div className='absolute top-0 right-0 flex md:gap-8 sm:gap-6 gap-0 px-4 py-4 text-white font-bold'>
                <Link className='hover:text-black' href="#1">About</Link>
                 <Link className='hover:text-black' href="#1">Education</Link>
                  <Link className='hover:text-black' href="#0" ><h1>Home</h1></Link>
                  <Link className='hover:text-black' href="#2">Skills</Link>
                    <Link className='hover:text-black' href="#3">Contact me</Link>
        </div>
      </div>
      <div className='flex flex-col w-full h-screen bg-blue-500'>
        <div className='md:ml-40 sm:ml-16 sm:mr-6 mt-40 md:w-1/2 sm:2/3 ml-4 h-min text-xl text-black font-bold '><p className='p-30'>Hello I am Talha Ashraf Cheema. A graduate of Comsats University and 5 years experience in web development. I am the best in the market and completed more than 100 projects. You can hire me if you are really interested in maintaining quality</p></div>
        <div className='md:ml-40 sm:ml-16 sm:mr-6 mt-4 ml-4 mr-2'><button className='bg-purple-900 rounded-3xl w-36 h-10 text-lg font-bold hover:bg-gray-900'>Hire Me</button></div>
      </div>




 <div className='flex md:flex-row sm:flex-col flex-col md:justify-start sm:justify-center'> 
      <div className=' flex flex-col  md:w-2/5 sm:w-full  h-max bg-gray-700 text-white '>
                <div className=' w-full h-96  '><Image src="/1112.jpg" alt='my_image ' width={1000} height={100} className='w-full h-full md:rounded-full sm: rounded-3xl'/> </div> 
                <div className='text-white h-max w-full text-center'>
                    <h1 className='text-5xl text-yellow-500 font-bold'>Talha Ashraf</h1>
                    <h2 className='text-xl text-400 font-bold my-4'>Software Engineer</h2>
                    <h3 className='text-sm text-400 text-left p-2'>Matriculation from Sandal School and College Faisalabad (2014)</h3>
                    <h3 className='text-sm text-400 text-left p-2'>Intermediate from Punjab Group Of Colleges Faisalabad (2016)</h3>
                    <h3 className='text-sm text-400 text-left p-2'>Graduation from Comsats Institute to Techniology Islamabad (2020)</h3>
                    <h3 className='text-sm text-400 text-left p-2'>Started Preparation for CSS(2022-22)</h3>
                    <h3 className='text-sm text-400 text-left p-2'>Student of Presidential Initiative on Artifical Intelligence (2023)</h3>
                    </div>     
      </div>
      <div id="1" className='right flex flex-col w-full h-max bg-gray-200  text-black'>
              <div className='w-full h-max p-10'>
                      <h1 className='text-2xl font-sans font-bold'>About Me</h1>
                      <h2 className='my-5'> As a highly motivated and driven individual with a passion for making a positive impact, I have a unique blend of technical and interpersonal skills, thanks to my background in computer science. I am able to tackle complex problems with ease, and I never lose sight of my ultimate goal, even when facing challenges.When I am not working, I love biking, reading, and spending time with my friends and family. I believe that my determination, can-do attitude, and hard work make me a true asset to any team. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugiat saepe ad enim a voluptatum odio quam ut! Error libero vitae exercitationem iusto nostrum blanditiis totam excepturi ea tempore obcaecati!. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At excepturi reiciendis qui quibusdam blanditiis rem impedit maxime aliquid error dolorum, cumque nesciunt maiores libero velit deleniti consequatur, distinctio incidunt quos.</h2>
              </div>
            <div className='flex flex-row justify-start  w-full h-max  divide-x-2 divide-gray-500 '>
                <div className=' w-1/2 h-96 text-center px-3'>
                    <h1 className='bg-purple-900 text-2xl text-bold text-white rounded-2xl my-2'>Soft Skills</h1>
                    <ul className=' text-xl text-bold text-black m-3'>
                      <li>Hiking</li>
                      <li>Climbing</li>
                      <li>Book Reading</li>
                      <li>Badminton</li>
                      <li>Gym</li>
                    </ul>
                </div>
                <div className=' w-1/2 h-96 text-center px-3'>
                    <h1 className='bg-purple-900 text-2xl text-bold text-white rounded-2xl my-2'>Hard Skills</h1>
                    <ul className='text-xl text-bold text-black m-3' >
                      <li>Python</li>
                      <li>Javascript</li>
                      <li>Typescript</li>
                      <li>C ++</li>
                      <li>Web 3.0</li>
                    </ul>

                </div>
            </div>
            
      </div>
 </div>
 <div className='flex flex-row  justify-center text-white bg-gray-900'><h1 className='text-3xl font-bold underline decoration-3 p-2'>Exceptional talents</h1></div>
 <div id="2" className='grid md:grid-cols-4  sm:grid-cols-2 bg-white  gap-2 w-full h-max text-gray-100'>
      <div className='relative  w-full h-full'>
                  <div><Image src="/3333.gif" alt='my_image ' width={1000} height={100} className='w-full h-80 hover:blur'/> </div>
                  <div className='absolute top-0 left-0 text-center'> 
                      <h1 className='text-center text-xl font-bold text-red-600 mb-2'>Typescript</h1>
                      <h2 className='mt-2'>I have a experience of 3 years in typescript. In this period done huge projects with precion. I am one of the best front end developer on fiverr and upwork with a impeccable rating of 4.67. In use VS code for typescript. In all these times i was never been neglegent of the assignment i have</h2>
                      <button className='mt-10 bg-yellow-500 text-black font-bold font-2xl'>Learn More</button>
                  </div>
        </div>
    
     
      <div className='relative  w-full h-full'>
                  <div><Image src="/231.gif" alt='my_image ' width={1000} height={100} className='w-full h-80 hover:blur'/> </div>
                  <div className='absolute top-0 left-0 text-center'> 
                      <h1 className='text-center text-xl font-bold text-red-600 mb-2'>Web 3.0</h1>
                      <h2>I have a experience of 1 years in year. In this period done huge projects with precion Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum placeat, cupiditate nobis, quas dolores perspiciatis quidem illo odio debitis minima, hic nihil laudantium ex! Suscipit eaque nostrum atque tempore corrupti?</h2>
                      <button className='mt-10 bg-yellow-500 text-black font-bold font-2xl'>Learn More</button>
                  </div>
        </div>
    
      <div className='relative  w-full h-full'>
                  <div><Image src="/1111.gif" alt='my_image ' width={1000} height={100} className='w-full h-80 hover:blur'/> </div>
                  <div className='absolute top-0 left-0 text-center'> 
                      <h1 className='text-center text-xl font-bold text-red-600 mb-2'>Python</h1>
                      <h2>I have a experience of 2 years in Python. In this period done huge projects with precion Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut similique commodi maiores blanditiis recusandae quaerat quos dolores ipsam. Placeat facilis aliquam nihil ad, ratione earum iusto minus quisquam minima.</h2>
                      <button className='mt-10 bg-yellow-500 text-black font-bold font-2xl'>Learn More</button>
                  </div>
        </div>
    
     
      <div className='relative  w-full h-full'>
                  <div><Image src="/2222.gif" alt='my_image ' width={1000} height={100} className='w-full h-80 hover:blur'/> </div>
                  <div className='absolute top-0 left-0 text-center'> 
                      <h1 className='text-center text-xl font-bold text-red-600 mb-2'>Dev-Ops</h1>
                      <h2>I have a experience of 1 years in typescript. In this period done huge projects with precion Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet hic temporibus eaque quasi mollitia vel voluptate molestiae soluta et corrupti a debitis ut, in unde ad. Rerum ea unde repellendus!</h2>
                      <button className='mt-10 bg-yellow-500 text-black font-bold font-2xl'>Learn More</button>
                  </div>
        </div>
        
    
 </div>
 
  <div id="3" className='flex flex-row w-full h-max bg-gray-700 text-black p-6'>
    <div className='flex justify-left w-full'>All Right Resevred</div>
        
        <div id="3" className='flex justift-end '>
              <Link href="https://www.facebook.com/"><Image src="/fb1.png" alt='' width={1000} height={100} className='w-8 h-8 mr-12'/></Link>
              <Link href="https://www.instagram.com/"><Image src="/insta.png" alt='' width={1000} height={100} className='w-8 h-8 mr-12'/></Link>
              <Link href="https://github.com/talhacheema675/"><Image src="/git.png" alt='' width={1000} height={100} className='w-8 h-8 mr-12'/></Link>
              <Link href="https://twitter.com/"><Image src="/t1.png" alt='' width={1000} height={100} className='w-8 h-8 mr-12'/></Link>
              <Link href="https://vercel.com/dashboard"><Image src="/vercel.png" alt='' width={1000} height={100} className='w-8 h-8'/></Link>
         </div>
     
  </div>
 

</div>


    
    
  )
}
