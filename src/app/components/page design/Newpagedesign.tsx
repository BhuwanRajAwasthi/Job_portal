"use client "
import Link from "next/link"
import React from "react"
import {Input} from "@/components/ui/input"
import search from "../../assets/search.png"
import {Search} from 'lucide-react'
import { MapPin } from "lucide-react"
import { useState } from "react"
import { DollarSign } from "lucide-react"
import Image from "next/image"
 import {
        NavigationMenu,
        NavigationMenuContent,
        NavigationMenuIndicator,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
        NavigationMenuTrigger,
        NavigationMenuViewport,
      } from "@/components/ui/navigation-menu"
      



const Newpagedesign:React.FC = () => {
    const[daysago,setdaysago] = useState(4);
    const [getdate,setgatedate] = useState (() => {
        const today= new Date();
        const year = today.getFullYear();
        const month = String(today.getDate()-12).padStart(2,"0");
        const day = String(today.getDate()).padStart(2,"0");
        return `${year}/${month}/${day}`;
    })
    return(
     <main className="h-screen w-full flex flex-col gap-2">
        <header>
            <nav className='flex w-full justify-between items-center rounded-[6px] px-1 m-1 bg-accent text-accent-foreground py-4'>
                <div className="font-bold text-xl flex m-3 ">Jobtale</div>
                
                    
                    <div className=" md:flex items-center hidden   gap-16 justify-center">

                    <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-accent">Features</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-red-300 h-[100px] w-[100px] ">
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
                    
                <Link className="text-sm" href={"#"}>Pricing </Link>
                <Link className="text-sm" href={"#"}>About US </Link>
                <Link className="text-sm" href={"#"}>Blog</Link>

                </div>

                
                
                <div className="flex items-center gap-3 mr-3"> 
                    <button className="bg-accent font-medium  border-2 rounded-[10px]  px-3 py-1">Login</button>
                    <button className="bg-blue-500 text-white border-gray-500  font-medium py-2 rounded-[10px] px-3">SignUp</button>
                </div>
            </nav>
        </header>
        <div className="flex flex-col gap-4 justify-center items-center ">

                <div className="text-sm flex items-center justify-center text-blue-500">#1 Job Portal</div>
                <div className="text-4xl flex flex-col gap-1 tracking-tight font-[500] items-center justify-center "> <p>Build Your very own Job </p>  <p> portal with Joblate</p></div>
                <p className="text-md opacity-[50%]">Discover Your next Career move with confidence and ease</p> 
                <div className="flex gap-2 items-center justify-center  ">
                    <div className="z-10 -mr-8 cursor-pointer ">
                            <Search />
                            </div> 
                            <input type="text" placeholder="Search Jobs" className="border py-2 w-[220px] hover:bg-accent hover:text-accent-foreground outline-none placeholder:text-center  rounded-[10px] " /> 
                        <div className="-mr-8 z-10 ">
                                <MapPin />
                                </div>
                                <input type="text" placeholder="Search Location" className="border  py-2 w-[300px] placeholder: text-center  rounded-[10px]" />
                                <button className="rounded-[10px] bg-blue-400 py-2 px-3 z-10 -ml-10 ">Search</button>
               </div>
               
               <div className= "flex items-center justify-center">
                <div 
                    className="h-[40px]  w-[40px] bg-transparent rounded-[50%] border -ml-3  border-gray-500 " 
                    style={{backgroundImage: `url($(Untitled1.jpg))`}}
                ></div>
                <div className="h-[40px] z-10  w-[40px] bg-transparent rounded-[50%] border -ml-3  border-gray-500 " style={{backgroundImage: `url($(untitled2.jpg))`, objectFit: "cover"}}></div>
                <div className="h-[40px] z-20 w-[40px] bg-transparent rounded-[50%] border -ml-3  border-gray-500 " style={{backgroundImage: `url($(untitled3.jpg))`, objectFit: "cover"}}></div>

                </div>

             <div>
                <img src={'primage.png'} alt="hero image" height={720} width={1200} className='clarity-contrast-200 bg-current  ' />
             </div>
                </div>

                <h2 className="font-bold font-serif text-3xl text-center  tracking-normal ">Job picks for You </h2>
                <div className="grid   md:grid-cols-2   h-fit w-full container place-items-center  gap-x-28    gap-y-14">
                    <div className="relative h-[250px] w-[400px]"> 
                            <div className="flex text-white rounded-[10px] justify-center overflow-hidden  text-center font-semibold bg-blue-500 absolute w-full h-full  ">Featured</div>
                            <div className="flex flex-col absolute cover-container bg-white border overflow-hidden  z-10 w-full rounded-[10px]  h-full top-5  ">
                                

                                <div className="font-serif m-2 flex gap-2 "> <img style={{height: "30px" , width: "30px"}} src="/xiomilogo.png"/> 
                                <div className="flex flex-col">
                                    <span className="text-xl ">Mobile App Developer </span> 
                                    <span className="text-sm opacity-[50%] ">Xiomi</span>
                                </div>
                                </div>
                                <div className="flex  justify-between px-5 py-1.4 h-fit ">
                                    <ul className="text-sm text-slate-700  h-fit  gap-2 flex flex-col font-bold">
                                        <li >Xiomi</li>
                                        <li>Smartphones/Electronics</li>
                                        <li>Listed company</li>
                                    </ul>
                                    <ul className="text-sm text-slate-700  h-fit  gap-2 flex flex-col font-bold">
                                        <li className="flex "><MapPin /> Beijing</li>
                                        <li className="flex"><DollarSign/> 15k-26k</li>
                                    </ul>
                                </div>
                                <div className="flex h-fit py-2  ">
                                    <button className="bg-blue-300 text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3 py-1 m-1">Feature 500</button>
                                    <button className="bg-blue-300 text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3 py-1 m-1">Innovation Hub</button>
                                    <button className="bg-blue-300 text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3  py-1 m-1">Global presence</button>
                                    
                                    </div>

                                <div className="flex items-center justify-between    h-full px-4"><p className="text-sm text-blue-500 "><span>{daysago}days ago </span></p> 
                                    <button className="bg-blue-700 text-white text-sm  rounded-[10px] px-3 py-1 hover:bg-accent hover:text-accent-foreground border m-1">Job Details </button>
                                </div>
                                
                            </div>
                        </div>
                    <div className="relative h-[250px] w-[400px]">
                                <div className="flex text-white rounded-[10px] justify-center overflow-hidden  text-center font-semibold bg-blue-500 absolute w-full h-full  ">Featured</div>
                                        <div className="flex flex-col absolute cover-container bg-white border overflow-hidden  z-10 w-full rounded-[10px]  h-full top-5  ">
                                                <div className="font-serif m-2 flex gap-2 "> <img style={{height: "30px" , width: "30px",zoom: "1.2"}} src="/samsunglogo.png"/> 
                                                    <div className="flex flex-col">
                                                            <span className="text-xl ">Hardware Design Engineer </span> 
                                                            <span className="text-sm opacity-[50%] ">Samsung</span>
                                                     </div>
                                     
                                     
                                                </div>
                                                <div className="flex  justify-between px-5 py-1.4 h-fit ">
                                    <ul className="text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                                        <li >Samsung</li>
                                        <li>Technology/Electronics</li>
                                        <li>Listed company</li>
                                    </ul>
                                    <ul className="text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                                        <li className="flex "><MapPin /> Seol</li>
                                        <li className="flex"><DollarSign/> 15k-26k</li>
                                    </ul>
                                </div>
                                <div className="flex h-fit py-2  ">
                                    <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-1 text-center py-1 m-1">Global Tech Loader</button>
                                    <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3 py-1 m-1">Hardware Innovation</button>
                                    <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3  py-1 m-1">Global presence</button>
                                    
                                    </div>

                                <div className="flex items-center justify-between    h-full px-4"><p className="text-sm text-blue-500 "><span>{daysago}days ago </span></p> 
                                    <button className="bg-blue-700 text-white text-sm  rounded-[10px] px-3 py-1 hover:bg-accent hover:text-accent-foreground border m-1">Job Details </button>
                                </div>
                                
                                
                        </div>
                        </div>

                    <div className="relative  h-[250px] w-[400px]">
                    <div className="flex text-white rounded-[10px] justify-center overflow-hidden  text-center font-semibold bg-blue-500 absolute w-full h-full  ">Featured</div>
                                        <div className="flex flex-col absolute cover-container bg-white border overflow-hidden  z-10 w-full rounded-[10px]  h-full top-5  ">
                                                <div className="font-serif m-2 flex gap-2 "> <img style={{height: "30px" , width: "30px"}} src="/uiux.jpg"/> 
                                                    <div className="flex flex-col">
                                                            <span className="text-xl ">Hardware Design Engineer </span> 
                                                            <span className="text-sm opacity-[50%] ">Samsung</span>
                                                     </div>
                                     
                                     
                                                </div>
                                                <div className="flex  justify-between px-5 py-1.4 h-fit ">
                                    <ul className="text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                                        <li >Samsung</li>
                                        <li>Technology/Electronics</li>
                                        <li>Listed company</li>
                                    </ul>
                                    <ul className="text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                                        <li className="flex "><MapPin /> Seol</li>
                                        <li className="flex"><DollarSign/> 15k-26k</li>
                                    </ul>
                                </div>
                                <div className="flex h-fit py-2  ">
                                    <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-1 text-center py-1 m-1">Global Tech Loader</button>
                                    <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3 py-1 m-1">Hardware Innovation</button>
                                    <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3  py-1 m-1">Global presence</button>
                                    
                                    </div>

                                <div className="flex items-center justify-between    h-full px-4"><p className="text-sm text-blue-500 "><span>{daysago}days ago </span></p> 
                                    <button className="bg-blue-700 text-white text-sm  rounded-[10px] px-3 py-1 hover:bg-accent hover:text-accent-foreground border m-1">Job Details </button>
                                </div>
                                
                                
                        </div>

                                                
                        
                            
                    </div>


                        
                    <div className="relative h-[250px] w-[400px] sm:h-[200px] sm:w-[300px] ">

                                <div className="flex text-white rounded-[10px] justify-center overflow-hidden  text-center font-semibold bg-blue-500 absolute w-full h-full  ">Featured</div>
                                                    <div className="flex flex-col absolute cover-container bg-white border overflow-hidden  z-10 w-full rounded-[10px]  h-full top-5  ">
                                                            <div className="font-serif m-2 flex gap-2 "> <img style={{height: "30px" , width: "30px"}} src="/Spotify.png"/> 
                                                                <div className="flex flex-col">
                                                                        <span className="text-xl ">Data Scientist </span> 
                                                                        <span className="text-sm opacity-[50%] ">Spotify</span>
                                                                </div>
                                                
                                                
                                                            </div>
                                                            <div className="flex  justify-between px-5 py-1.4 h-fit ">
                                                <ul className="text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                                                    <li >spotify</li>
                                                    <li>Music/Entertainment </li>
                                                    <li>Listed company</li>
                                                </ul>
                                                <ul className="text-sm opacity-[50%]  h-fit  gap-2 flex flex-col font-bold">
                                                    <li className="flex "><MapPin /> Stockholm</li>
                                                    <li className="flex"><DollarSign/> 15k-26k</li>
                                                </ul>
                                            </div>
                                            <div className="flex h-fit py-2  ">
                                                <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-1 text-center py-1 m-1">Market Disruptor</button>
                                                <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3 py-1 m-1">Music Streaming</button>
                                                <button className="bg-blue-300 w-fit text-blue-700 text-[11px] hover:bg-accent   rounded-[10px] px-3  py-1 m-1">Data analytics</button>
                                                
                                                </div>

                                            <div className="flex items-center justify-between    h-full px-4"><p className="text-sm text-blue-500 "><span>{getdate}</span></p> 
                                                <button className="bg-blue-700 text-white text-sm  rounded-[10px] px-3 py-1 hover:bg-accent hover:text-accent-foreground border m-1">Job Details </button>
                                            </div>  
                                    </div>   
                         </div>
                </div>
                <div className="flex items-center justify-center py-8">
                        <button className="bg-white text-blue-500 border border-blue-400 hover:bg-accent  text-sm  rounded-[10px] px-3 py-1 ">More Oppurtunities</button>
                </div>
                <div>
                                <div className="flex justify-center items-center font-medium text-3xl">Latest Job Oppurtunities</div>
                                <div>
                                    <div ></div>
                                    <div>

                                    </div>
                                    <div></div>
                                </div>

                </div>
                                

        
        
    </main>
    );

}
export default Newpagedesign