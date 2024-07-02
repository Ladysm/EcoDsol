import Image from "next/image";
import Nav from "./menu";
import Card from "./card";
import cardImage from '../../public/teachericon.png'
import alcaldiaImage from '../../public/alcaldia.png'
import jovenesImage from '../../public/jovenes.png'
import manosimage from '../../public/manos.png'
import Button from "./button";
import { ICONS } from '../app/config/list'
import heart from '../../public/heart.png'
import pleople from '../../public/people-metting.png'
import Footer from "./footer";

export default function Home() {
  return (
    <div className="flex flex-col">
    <Nav/>
    <div className="flex justify-center items-center py-8 bg-[#FFF] ">
    <span className=" inline-block text-[20px] lg:text-[35px]  text-[#0d121e] ">¿ POR QUÉ <p className="text-[#FFBB22] inline-block">ECO DE SOL ?</p></span>
    </div>
    <div className=" justify-center items-center flex flex-col lg:flex-row" >
    <Card   className="bg-yellow w-full" src={cardImage} qty="500" titule="INSTITUCIONES EDUCATIVAS" subtitule="Capacitadas en Antioquia" />
    <Card className="bg-[#49A4F5] w-full " src={alcaldiaImage} qty="30" titule="ALCALDIAS" subtitule="Visitadas e intervenidas" />
    <Card className="bg-yellow w-full" src={jovenesImage} qty="20.000" titule="JOVENES" subtitule="Impactados positivamente" />
    <Card className="bg-[#49A4F5] w-full "  src={manosimage} qty="1" titule="SOLO PROPÓSITO" subtitule="Construir pais desde la educación" />
    </div>
    <section id="quienes" className="flex bg-white flex-col justify-center items-center">
    <div className="flex-col flex lg:flex-row  w-[80%] lg:w-[85%] justify-center items-center py-16  lg:gap-10   lg:justify-around lg:text-justify">
   <div className="flex flex-col lg:flex-1  lg:gap-2">
    <h2 className="text-[#49A4F5] font-bold text-[24px]  text-center lg:text-center lg:text-[38px] lg:leading-[40px]">ECO D SOL: Brindando  <span className="lg:text-[35px]"> luz y Esperanza a la Comunidad</span></h2>
   <span className="text-[#49A4F5] font-medium  pt-3 text-balance lg:text-justify text-[20px] lg:text-[22px]">¿Quiénes somos? 🌞</span>
   <p className="text-[16px] text-justify lg:text-justify lg:text-[20px] "> <span className="font-semibold text-yellow">ECO D SOL</span> es una corporación creada por un grupo de amigos apasionados y comprometidos con el desarrollo humano y social, tanto en Colombia como en el mundo. Nuestro nombre refleja nuestra misión: <span className="text-yellow font-semibold">ECO</span> por la resonancia y el impacto positivo que buscamos generar en la sociedad, y <span className="text-yellow font-semibold">D SOL</span> como un símbolo de luz y esperanza que queremos llevar a cada rincón, iluminando las vidas de quienes más lo necesitan.</p>
   <p className="text-[16px] text-justify lg:text-[20px] lg:text-justify">Generar proyectos y programas de desarrollo humano y social, en beneficio de la promoción y el desarrollo integral del ciudadano de Colombia y del mundo, en las áreas de la educación, investigación científica, la salud, la informática, la cultura, conservación y protección ambiental, económico y financiero.</p> 
  <Image className="hidden lg:flex"   alt="heart" src={heart}/>
    
    
    </div>
    <div className="flex flex-col lg:flex-1 lg:gap-3 text-center">
    <Image className="hidden lg:flex" src={pleople} alt="people metting"/>
    <h3 className=" lg:text-[22px] text-[20px] text-blue pt-4 ">Nuestra Misión 📝</h3>
    <p className="text-[16px] text-justify lg:text-justify lg:text-[20px]">El principal objetivo de <span className="font-semibold text-yellow">ECO D SOL</span> es desarrollar proyectos y programas que promuevan el desarrollo integral del ciudadano en diversas áreas como la educación, la investigación científica, la salud, la informática, la cultura, y la conservación ambiental. Trabajamos con un enfoque holístico para mejorar la calidad de vida de las personas y fomentar una comunidad más justa y equitativa.</p>
    <p className="text-[16px] text-justify lg:text-justify lg:text-[20px]">Para lograrlo, implementamos iniciativas que incluyen talleres educativos. Colaboramos con organizaciones locales e internacionales para maximizar el impacto de nuestras acciones.</p>
    <p className="text-[16px] text-justify lg:text-justify lg:text-[20px]">En el 2030 la corporación será reconocida a nivel departamental por su  gestión en la generación y ejecución de proyectos y programas que promuevan el desarrollo humano y social.</p> 
   
   </div>
    </div>
    </section>
    <section className="flex  flex-col bg-bg-sky bg-cover bg-no-repeat justify-center  ">
      <div className="flex flex-col gap-2 py-[32px] w-[78%] max-w-[450px] lg:w-[100%]  m-auto items-center ">
      
    <h2
          className="text-[28px] pb-[20px] font-black text-white text-center leading-[40px] lg:text-[40px] lg:leading-[44px]"
        >
          NUESTRAS LINEAS <span
            className="text-[35px] leading:[80px] lg:text-[50px] lg:leading-[40px]"
            >DE CONTACTO</span>
        </h2>
        
    {ICONS.map((icon)=> <Button
    key={icon.name}
    name={icon.name}
    link={icon.link}
    icon={icon.src}
    />)}
    </div>
    </section>
    <Footer/> 
    </div>
   
  );
}
