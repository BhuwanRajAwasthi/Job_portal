"use client "
import React from "react";
import {Input} from "@/components/ui/input"
import { useState } from "react";
import { EyeOff, icons } from "lucide-react";
import { Eye } from "lucide-react";
import Newpagedesign from "./page design/Newpagedesign";
export default function PracticePage() {
    const [password,setpassword] = useState(true);
    const iconstyle = {transition: "opacity 0.3s ease-in-out"}
    const handleClick = ()=>{
        setpassword(!password);
        
    }
    return (
        <main>

        <div className="flex ">
            <input placeholder="password" type={password ? 'password': 'text'} className="border  border-input bg-gray-100 hover:bg-accent hover:text-accent-foreground outline-none  rounded-[17px] px-3 py-1 items-center gap-1 font-[600] text-md"/>
            <div className="cursor-pointer -ml-10 mt-1 "  >
                {
                    password ? <Eye onClick={handleClick}/> : <EyeOff    onClick={handleClick}/>
                }</div>
        </div>
        <div className="h-[60px] w-[60px] rounded-[50%] border-[6px] border-accent border-t-gray-700 animate-spin to-rotate-360  ">

        </div>


                </main>
        

    );
}