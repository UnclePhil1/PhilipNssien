import Image from "next/image";
import Link from "next/link";
import React from "react";
import Code from '../../public/Images/code.png'
import '../styles/menu.css'

const Myworks: React.FC = () => {

    return (
        <div>
            <section className="px-4 md:px-[8%] grid justify-center align-middle gap-10 grid-cols-1 md:grid-cols-2 mt-[10%] md:mt-0 py-[5%]">
                <div className="">
                    <h1 className="text-white text-[3em] font-bold">What I do <br /> love doing</h1>
                    <h3 className=" text-primary px-8 py-1 border-4 border-l-primary border-t-0 border-b-0 border-r-0 tracking-[4px] my-[10px]">Projects</h3>
                    <p className="text-white text-[24px] my-7">This is how I develop your websites <br />Let build together.</p>
                    <Link href="/contact" className="py-2 px-10 text-white border-2 border-temp hover:bg-temp cursor-pointer">Lets Chat</Link>
                </div>
                <div className="">
                    <Image 
                        src={Code}
                        alt="code.png"
                        width={300}
                        height={200}
                        className="w-[100%] h-[100%]"
                    />
                </div>
            </section>
        </div>
    )
}

export default Myworks;