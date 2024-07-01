import Image from "next/image";
import Nav from "./menu";
import Card from "./card";
import cardImage from '../../public/teachericon.png'
import alcaldiaImage from '../../public/alcaldia.png'
import jovenesImage from '../../public/jovenes.png'
import manosimage from '../../public/manos.png'
import Button from "./button";
import { ICONS } from '../app/config/list'

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
    <section id="quienes" className="flex py-14 flex-col px-20 gap-6">
    <div className="flex justify-center items-center bg-yellow-200 p-4 rounded-lg gap-0">
    <h2 className="text-[#49A4F5] font-bold text-[36px] text-center">Misión y Visión 🏅</h2>
   
  </div>
    <p>Generar proyectos y programas de desarrollo humano y social, en beneficio de la promoción y el desarrollo integral del ciudadano de Colombia y del mundo, en las áreas de la educación, investigación científica, la salud, la informática, la cultura, conservación y protección ambiental, económico y financiero.</p> 
    <p>En el 2030 la corporación será reconocida a nivel departamental por su  gestión en la generación y ejecución de proyectos y programas que promuevan el desarrollo humano y social.</p>
    </section>
    <section className="flex  flex-col bg-[#F4C379] justify-center  ">
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
    </div>
  
     
  );
}
