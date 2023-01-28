import React from "react";
import HeroVideo from "../resources/HeroVideo.mp4"
import MeetFrostHead from "../resources/MeetFrostHead.png"
import LinkButton from "../utils/linkButton";
import YouTube from 'react-youtube';

function Home(props) {
    return (
        <div className="Home ">
            <section className="">
                <video src={HeroVideo} className='w-screen' autoPlay muted></video>
            </section>
            <section className="w-screen flex flex-row  ">
                <img src={MeetFrostHead} className='w-1/2' alt="" />
                <div className="px-28 py-32 text-xl w-1/2  leading-relaxed text-justify text-ellipsis flex flex-col items-center justify-between">
                    
                    <p className=" text-ellipsis">
                        I’m a Programmer. I'm passionate about tech. I love to design UI and develop backends. I want to work with ambitious minds. Would you like to work together? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, repellat maxime dolores in atque saepe aliquam esse ab. Illum rem alias expedita veniam quibusdam, ut ex voluptas voluptate harum nostrum minus perspiciatis impedit velit minima earum! Dolorum eaque id
                        <br />
                        <br />
                        obcaecati aliquam saepe alias perferendis, porro hic commodi dignissimos, aperiam soluta dicta sapiente? Quia, inventore! Iure assumenda quas reprehenderit labore molestiae laudantium dolorum, soluta voluptas nostrum incidunt officiis eaque adipisci placeat impedit non ducimus tempore expedita dignissimos doloremque nobis rerum veritatis. Distinctio illo maxime, iste
                        consequatur explicabo consectetur? Eos illo voluptatem cum eaque neque illum perspiciatis doloremque, porro vero excepturi
                        <br />
                        <br />
                        odio ipsa pariatur aspernatur fugit iusto ea maxime accusantium eveniet libero voluptate unde! Recusandae, distinctio voluptatem a voluptatibus nisi alias consequuntur omnis neque corrupti
                    </p>
                    <LinkButton text="Know More"/>
                </div>
            </section>
            
        </div>
    );
}

export default Home