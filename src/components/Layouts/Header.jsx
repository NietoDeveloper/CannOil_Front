import Logo from '../../assets/LogoCannOil-2.png'
import { BsSearch } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import DarkMore from './DarkMore'
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {

    const checkLogin = JSON.parse(localStorage.getItem('login'))
    const navigate = useNavigate()
    const handleCheckLogin = () => {
        if (checkLogin) {
            return (
                <Link className='bg-primary rounded-full w-[70px] text-center' to="/login" onClick={handleLogout}>Logout</Link>
            )
        } else {
            return (
                <Link className='bg-primary rounded-full w-[70px] text-center' to="/login">Login</Link>
            )
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("login")
        navigate('/login')
    }

    const hanldeCart = () => {
        navigate('/cart')
    }
    return (
        <>
            <header>
                <div className="shadow-md bg-lime-300 dark:bg-lime-950 dark:text-white 
                                duration-200 relative z-40
                ">
                    {/* up navbar */}
                    <div className="bg-primary/40 py-2">
                        <div className="container flex justify-between items-center">
                            {/* logo */}
                            <div>
                                <a href="/" className='font-bold text-2xl sm:text-3xl
                                                        flex gap-2 '>
                                    <img src={Logo} alt="" className='w-10' />
                                    CannOil CBD
                                </a>
                            </div>
                            {/* search */}
                            <div className='flex justify-center items-center gap-4'>
                                <div className='relative group hidden sm:block'>
                                    <input type="text"
                                        placeholder='Buscar'
                                        className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300
                                            rounded-full border border-gray-300 px-2 py-1
                                            focus:outline-none focus:border-1 
                                            focus:border-primary
                                            dark:border-gray-500
                                            dark:bg-gray-800
                                "
                                    />
                                    <BsSearch className='text-Black group-hover:text-primary
                                                absolute top-1/2 -translate-y-1/2 right-3
                            ' />
                                </div>
                                {handleCheckLogin()}
                                {/* order */}
                                <button
                                    onClick={() => hanldeCart()}
                                    className="bg-gradient-to-r from-primary to-secondary transition-all duration-200
                                    text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                                    <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                                </button>
                                {/* Dark More */}
                                <div>
                                    <DarkMore />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* lower Navbar */}
                    <div>
                        <ul className='sm:flex hidden items-center gap-4 justify-center'>
                            <li>
                                <Link to="/" className='inline-block px-4 hover:text-primary duration-200'>Inicio</Link>
                            </li>
                            <li>
                                <a href="" className='inline-block px-4 hover:text-primary duration-200'>Productos</a>
                            </li>
                            <li>
                                <a href="" className='inline-block px-4 hover:text-primary duration-200'>Compra</a>
                            </li>
                            <li>
                                <a href="" className='inline-block px-4 hover:text-primary duration-200'>Blog</a>
                            </li>
                            <li>
                                <a href="" className='inline-block px-4 hover:text-primary duration-200'>Contacto</a>
                            </li>
                            {/* simple Dropdown and Link */}
                            <li className='group relative cursor-pointer'>
                                <a href="#" className='flex items-center gap-[2px] py-2'>
                                    Mas Vendidos
                                    <span>
                                        <IoMdArrowDropdown
                                            className='transition-all duration-200 group-hover:rotate-180'
                                        />
                                    </span>
                                </a>
                                <div className='absolute z-[9999] hidden
                                        group-hover:block w-[150px] rounded-md bg-white p-2 text-black
                                        shadow-md'>
                                    <ul>
                                        <li>
                                            <a href="" className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                                Mas Vendidos
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                                Mejor Calificados
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;