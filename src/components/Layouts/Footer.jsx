import Logo from '../../assets/logo.png'
import Banner from '../../assets/website/footerImg.jpg'
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    witdh: "100%"
}

const FooterLink = [
    {
        title: "Inicio",
        link: "/#"
    },
    {
        title: "Productos",
        link: "/#"
    }, {
        title: "Comprar",
        link: "/#"
    },
    {
        title: "Contacto",
        link: "/#"
    },
]
const Footer = () => {
    return (
        <>
            <footer>
                <div style={BannerImg} className='text-white '>
                    <div className='container'>
                        <div className='grid md:grid-cols-3 pb-44 pt-5'>
                            {/* company */}
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify
                                                mb-3 flex items-center gap-3
                                '>
                                    <img src={Logo} alt="" className='max-w-[50px]' />
                                    CannOil CBD
                                </h1>
                                <p>Somos Importadores y Distribuidores De Aceite CBD De Cannabies En Diferentes Laboratorios y Concentraciones.</p>
                            </div>
                            {/* footer link */}
                            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                                <div>
                                    <div className='py-8 px-4'>
                                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                                        <ul className='flex flex-col gap-3'>
                                            {
                                                FooterLink.map((link) => (
                                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                                        <span>{link.title}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className='py-8 px-4'>
                                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                                        <ul className='flex flex-col gap-3'>
                                            {
                                                FooterLink.map((link) => (
                                                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                                        <span>{link.title}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {/* social link */}
                                <div>
                                    <div className="flex items-center mt-6 gap-3">
                                        <a href="">
                                            <FaInstagram className="text-3xl" />
                                        </a>
                                        <a href="">
                                            <FaFacebook className='text-3xl' />
                                        </a>
                                        <a href="">
                                            <FaLinkedin className='text-3xl' />
                                        </a>
                                    </div>
                                    <div className='mt-6'>
                                        <div className='flex items-center gap-3'>
                                            <FaLocationArrow />
                                            <p>Noida, Uttar Preadesh</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <MdOutlinePhoneIphone />
                                            <p>+91 123456789</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;