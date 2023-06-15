import Image from "next/image";

const Logo = () => {
    return (
        <>
         <div className="logo"> 
            <Image
                className="relative"
                src="/Chillax.svg"
                alt="Chillax icon Logo"
                width={97}
                height={45}
                priority
            />
         </div>
        </>
    )
}
export default Logo;