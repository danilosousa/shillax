import Image from "next/image";

const Account = () => {
    return (
        <>
            <div className="account">
                <Image
                    className="relative"
                    src="/profile.svg"
                    alt="profile"
                    width={36}
                    height={36}
                    priority
                /> 
            </div>
        </>
        
    )
}
export default Account;