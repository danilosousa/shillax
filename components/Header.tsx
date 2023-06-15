
import Categories from './Categories'
import Logo from './Logo'
import Search from './Search'


const Header  = () => {
    return(
        <div className="md:container md:mx-auto">
            <header className="header grid grid-cols-4 gap-4 items-center">
                <Logo />
                <Categories />
                
                <Search />
               
            </header>
    </div>
        
    )
}
export default Header