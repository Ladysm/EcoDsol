import Image from "next/image";
import Nav from "./menu";
import Card from "./card";
import cardImage from '../../public/teachericon.png'
import alcaldiaImage from '../../public/alcaldia.png'
import jovenesImage from '../../public/jovenes.png'
import manosimage from '../../public/manos.png'

export default function Home() {
  return (
    <div className="flex flex-col">
    <Nav/>
    <div className="flex justify-center items-center py-4 bg-[#FFF] ">
    <span className=" inline-block text-[20px] lg:text-[35px]  text-[#0d121e] ">¿ POR QUÉ <p className="text-[#FFBB22] inline-block">ECO DE SOL ?</p></span>
    </div>
    <div className=" justify-center items-center flex flex-col lg:flex-row" >
    <Card   className="bg-yellow " src={cardImage} qty="500" titule="INSTITUCIONES EDUCATIVAS" subtitule="Capacitadas en Antioquia" />
    <Card className="bg-[#49A4F5] " src={alcaldiaImage} qty="30" titule="ALCALDIAS" subtitule="Visitadas e intervenidas" />
    <Card className="bg-yellow " src={jovenesImage} qty="20.000" titule="JOVENES" subtitule="Impactados positivamente" />
    <Card className="bg-[#49A4F5] "  src={manosimage} qty="1" titule="SOLO PROPÓSITO" subtitule="Construir pais desde la educación" />
    </div>
    
    </div>
     
  );
}
