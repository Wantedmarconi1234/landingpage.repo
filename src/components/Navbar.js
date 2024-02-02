import React,{useState} from 'react';
import eggImage from "../images/desktop/image-transform.jpg";
import cupImage from "../images/desktop/image-stand-out.jpg";
import appleImage from "../images/desktop/image-graphic-design.jpg";
import headerImage from "../images/desktop/image-header.jpg";
import orangeImage from "../images/desktop/image-photography.jpg";
import milkBottleImage from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeBowlImage from "../images/desktop/image-gallery-orange.jpg";
import coneImage from "../images/desktop/image-gallery-cone.jpg";
import sugarImage from "../images/desktop/image-gallery-sugarcubes.jpg";
import emilyImage from "../images/desktop/image-emily.jpg";
import thomasImage from "../images/desktop/image-thomas.jpg";
import jennieImage from "../images/desktop/image-jennie.jpg";
import { BsArrowDown, BsPinterest } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter,  } from "react-icons/ai";


export default function Navbar() {
  const [toggleMennu, setToggleMenu] = useState(true);

  function handleToggle() {
    setToggleMenu( (toggle) => !toggle)
    console.log(toggleMennu)
  }


  return (
    <div className='flex flex-col w-screen'>
        <div className='h-screen'
        style={{backgroundImage: `url(${headerImage})`, 
        backgroundPosition: "center", 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"}} 
        >
        <div className='flex justify-between text-white items-center px-5 py-8'>
          <h1 className='text-xl font-extrabold'><a href="#">sunnyside</a></h1>
          <nav className={`sm:block sm:absolute z-[21] ${toggleMennu ? "sm:-top-60" : "sm:top-16"} duration-200 delay-50 sm:pt- sm:bg-white rounded sm:w-[89%] sm:py-11 sm:text-[#818498] sm:text-center
            flex list-none text-sm font-barlow hover:cursor-pointer`}>
            <li className='px-4 py-2'><a href="#">Projects</a></li>
            <li className='px-4 py-2'><a href="#">Services</a></li>
            <li className='px-4 py-2'><a href="#">About</a></li>
            <li className='px-4 py-2 text-[#818498] bg-white rounded-full uppercase hover:text-white hover:bg-[#a7abae] sm:hover:bg-[#fad400] sm:hover:text-black'><a href="#">Contact</a></li>
          </nav>
          <div className='md:hidden lg:hidden'><HiMenu className='relative z-[21] text-3xl font-thin ' onClick={handleToggle}/></div>
        </div>
        <div className='flex flex-col items-center py-4 text-white font-fraunces'>
          <h1 className='text-3xl font-bold uppercase tracking-widest mb-12'>We are creatives</h1>
          <BsArrowDown className='text-9xl font-light'/>
        </div>
      </div>
      <div className='w-screen grid grid-cols-2 h-80 sm:grid-cols-1 sm:grid-rows-2 sm:h-fit'>
        <div className='p-10 text-center'>
         <h1 className='text-xl font-extrabold font-fraunces '>Transform your brand</h1> 
         <p className='text-sm py-12 font-barlow text-[#818498]'>We are full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
         <p className='text-xs font-bold uppercase underline font-fraunces'>Learn more</p>
        </div>
        <div
          style={{backgroundImage: `url(${eggImage})`, 
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"}}
          className='sm:row-start-1 sm:row-end-2 '        
        ></div>
      </div>
      <div className='h-80 w-screen grid grid-cols-2 grid-row-3 sm:grid-cols-1 sm:grid-rows-2 sm:h-fit'>
        <div
          style={{backgroundImage: `url(${cupImage})`, 
          backgroundPosition: "center", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"}} 
        ></div>
        <div className='p-10 text-center'>
         <h1 className='text-xl font-extrabold font-fraunces'>Standout to the right audience</h1> 
         <p className='text-sm py-12 font-barlow text-[#818498]'>Using a collabrative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your branch in digital places.</p>
         <p className='text-xs font-bold uppercase underline font-fraunces'>Learn more</p>
        </div>
      </div>
      <div className='h-80 w-screen grid grid-cols-2 grid-row-3 sm:grid-cols-1 sm:grid-rows-2 sm:h-[49.99rem]'>
        <div
          style={{backgroundImage: `url(${appleImage})`, 
          backgroundPosition: "center", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"}} 
          className='flex flex-col-reverse items-center py-7 px-5'
        >
          <p className='text-xs text-center text-[#25564b] py-3 font-barlow'>Great design makes you memorable. We deliver artwork that underscores your brabd message and captures potential clients' attention</p>
          <h1 className='text-xl font-bold text-[#25564b] font-fraunces'>Graphic Design</h1>
        </div>
        <div className='flex flex-col-reverse items-center py-7 px-5 p-10'
          style={{backgroundImage: `url(${orangeImage})`, 
          backgroundPosition: "center", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"}}
        >   
          <p className='text-xs text-center py-3 text-[#19536b] font-barlow'>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          <h1 className='text-xl font-bold text-[#19536b] font-fraunces'>Photography</h1>
        </div>
      </div>
      <div className=' grid grid-cols-3 py-14 px-5 gap-6 sm:grid-cols-1' >
        <div className='grid col-span-full py-8 text-center'><h1 className='uppercase font-bold font-fraunces tracking-widest text-[#a7abae]'>client testimonials</h1></div>
        <div>
          <div>
            <img src={emilyImage} alt="" className='ml-[39.5%] rounded-full w-10 h-10 sm:ml-[45%]'/></div>
            <p className='text-sm py-8 text-center font-barlow text-[#818498]'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h1 className='font-bold text-center font-fraunces'>Emily R.</h1>
            <p className='capitalize text-xs text-center py-2 text-[#a7abae] font-barlow'>marketing director</p>
        </div>
        <div>
          <div>
            <img src={thomasImage} alt="" className='ml-[39.5%] rounded-full w-10 h-10 sm:ml-[45%]'/></div>
            <p className='text-sm py-8 text-center font-barlow text-[#818498]'>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience</p>
            <h1 className='font-fraunces text-center '>Thomas S.</h1>
            <p className='capitalize text-xs text-center font-barlow py-2 text-[#a7abae]'>chief operating officer</p>
        </div>
        <div>
        <div>
            <img src={jennieImage} alt="" className='ml-[39.5%] rounded-full w-10 h-10 sm:ml-[45%]'/></div>
            <p className='text-sm py-8 text-center font-barlow text-[#818498]'>Incredible end result! Our sales increased over 400% when we worked and Sunnyside. Highly recommended!</p>
            <h1 className='font-fraunces text-center'>Jennie F.</h1>
            <p className='capitalize text-xs text-center font-barlow py-2 text-[#a7abae]'>business owner</p>
        </div>
      </div>
      <div className='grid grid-cols-4 h-80 sm:grid-cols-2 sm:h-[35rem]'>
        <div
          style={{backgroundImage: `url(${milkBottleImage})`, 
          backgroundPosition: "center", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"}}
        >  
        </div>
        <div
          style={{backgroundImage: `url(${orangeBowlImage})`, 
          backgroundPosition: "center", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"}}
        >
        </div>
        <div
          style={{backgroundImage: `url(${coneImage})`, 
          backgroundPosition: "center", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"}}
        >
        </div>
        <div
          style={{backgroundImage: `url(${sugarImage})`, 
          backgroundPosition: "center", 
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"}}
        >
        </div>
      </div>
      <div className='flex flex-col items-center bg-[#458c7e] text-[#25564b] text-center h-64 py-10'>
        <h1 className='text-xl font-extrabold'>sunnyside</h1>
        <p className='text-xs py-7 font-bold'><span className='pr-5'>About</span><span className='pr-5'>Services</span><span>Projects</span></p>
        <div className='w-28 flex justify-evenly py-7'>
          <AiFillFacebook/>
          <AiOutlineInstagram/>
          <AiOutlineTwitter/>
          <BsPinterest/>
        </div>
      </div>
      {
        toggleMennu ? ("") :
        ( <div  onClick={handleToggle} className='sm:bg-black/60 absolute top-0 w-[100%] h-[250rem] z-20 duration-200'></div>)
      }
    </div>

  )
}
