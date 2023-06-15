
import Image from "next/image";
import Account from './Account'

const Search = () => {
    return (
        <> 
        <div className="account-search flex justify-end">
            <div className="search">
                <Image
                    className="relative"
                    src="/search.svg"
                    alt="search icon Logo"
                    width={31}
                    height={31}
                    priority
                />
            </div>
            <Account />
        </div>


        </>
        
    )
}
export default Search;