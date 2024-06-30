import Image from "next/image";
import Nav from "./menu";
import Card from "./card";
import cardImage from '../../public/teachericon.png'
import alcaldiaImage from '../../public/alcaldia.png'
import jovenesImage from '../../public/jovenes.png'
import manosimage from '../../public/manos.png'
import Carrousel from "./carrousel";

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
    <Carrousel/>
    
    </div>
  
     
  );
}
