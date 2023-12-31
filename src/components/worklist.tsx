'use client'
import React, {useEffect} from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import 'aos/dist/aos.css';
import One from '../../public/Images/ProOne.png'
import Two from '../../public/Images/ProTwo.png'
import Three from '../../public/Images/ProThree.png'
import Four from '../../public/Images/ProFour.png'
import Five from '../../public/Images/Profive.png'
import Six from '../../public/Images/ProSix.png'

interface ImageList {
  id: number;
  url: StaticImageData;
  alt: string;
  website: string;
  header: string;
  text: string;
}

const WorkArray: ImageList[] = [
  {
    id: 1,
    url:One,
    alt: 'image1.png',
    website: 'https://wecruitme.com/',
    header: "Wecruitme Website",
    text: "A global Human Resource and Job agency",
  },
  {
    id: 2,
    url: Two,
    alt: 'image2.png',
    website: 'https://officialrepublic.onrender.com/',
    header: "officialURepobliuc",
    text: "A web3 Marketing agency",
  },
  {
    id: 3,
    url: Three,
    alt: 'image3.png',
    website: 'https://bartcash.netlify.app/',
    header: "BartCash",
    text: "Online trade & bater platform",
  },
  {
    id: 4,
    url: Four,
    alt: 'image4.png',
    website: 'https://la-boutique.vercel.app/',
    header: "La-Boutique",
    text: "Your renowned e-commerce site",
  },
  {
    id: 5,
    url: Five,
    alt: 'image5.png',
    website: 'https://airbnbs.vercel.app/',
    header: "airbnb",
    text: "A demo design of Airbnb",
  },
  {
    id: 6,
    url: Six,
    alt: 'image6.png',
    website: 'https://creednft.vercel.app/',
    header: "CreedNft Website",
    text: "Clean and simple NFT design website",
  },
];

const WorkList = () => {
  return (
    <div>
      <section className="grid grid-cols-1 justify-center align-middle gap-10 md:px-[8%] px-4 bg-white py-[50px]">
        {WorkArray.map((work, index) => (
          <div
            key={index}
            className="w-[100%] md:px-[10%] flex flex-col justify-start align-middle my-[20px]"
          >
            <div className="w-full h-[350px] border relative overflow-hidden">
              <Image
                src={work.url}
                alt={work.alt}
                width={700}
                height={300}
                className="w-[100%] h-[100%] object-cover transition duration-300 hover:scale-150"
              />
            </div>
            <div className="mt-6">
              <Link href={work.website} className="text-temp text-[2em] capitalize font-header">{work.header}</Link>
              <h3 className="text-[1.2em]">{work.text}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WorkList;
