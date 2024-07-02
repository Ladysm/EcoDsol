import Image from "next/image"
type button = {
    name: string,
    link:string,
    icon:StaticImageData,
    className?:string
}

export default function Button ({name, link, icon, className}:button) {
    return (
        
            <a className=" gap-2  items-center flex w-full bg-transparent py-2 rounded-full px-2 justify-center m-0 text-[16px] text-[#FFFF]  font-bold border-white  border-t-[2px] border-b-[2px] border-l-[2px] border-r-[2px] hover:text-black transition-colors duration-300 ease-in-out hover:bg-white" href={link} target="_blank" rel="noopener noreferrer">
            <Image 
            src={icon} 
            alt='test'
            width={40}
            height={40}
        />
        <span>{name}</span>
            </a>
    
    )
    
}