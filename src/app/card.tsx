import Image from "next/image"
type Cardpops ={
    src: StaticImageData,
    qty: string,
    titule:string,
    subtitule:string,
    className:string

}
export default function Card ({src,qty,titule,subtitule,className}:Cardpops){
    return (
<div className={`${className} text-[#FFFFFF] flex flex-col justify-center py-9 text-center px-11 `}>
<Image className="hidden lg:flex" src={src} alt="icon" width={250}/>
        <span className="text-[36px] font-black ">{qty}</span>
        <span className="text-bold text-[15px]">{titule}</span>
<span className="font-light text-[15px]">{subtitule}</span>

    </div>

    )
}