import Img5 from "../../assets/top/FoliuMedWL.png"
import Img6 from "../../assets/top/LogoAlchemy.png"
import Img7 from "../../assets/top/LogoGorilla.png"
import Img from "../../assets/banner/banner.png"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import Banner from "../../assets/website/orange-pattern.jpg"
import ProductHome from "../Products/ProductHome"

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    witdh: "100%"
}

const TopProductList = [
    {
        id: 1,
        img: Img5,
        title: "FoliuMed",
        discription: "Concentraciones CBD del 5% 10% 15% "
    },
    {
        id: 2,
        img: Img6,
        title: "Alchemy",
        discription: "Concentraciones CBD del 20% 30% 35% "
    },
    {
        id: 3,
        img: Img7,
        title: "Gorilla Grillz",
        discription: "Concentracion CBD del 30% 35% 40%"
    }
]
const Home = (props) => {
    return (
        <>
            {/* Banner */}
            <ProductHome />
            {/* Product List */}
            <div className='dark:bg-green-950 pt-14 -scroll-mb-12'>
                <div className='container'>
                    {/* header top products */}
                    <div className='text-left mb-24'>
                        <p className='text-primary text-sm'>Laboratorios Mas Solicitados</p>
                        <h3 className='text-3xl font-bold dark:text-white'>Mas Vendidos</h3>
                        <p className='text-xs text-gray-400'>Estos son los laboratorios mas vendidos por CannOil en los ultimos 3 meses</p>
                    </div>
                    {/* products top card */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sm:gap-5 place-items-center '>
                        {
                            TopProductList.map((data) => (
                                <div
                                    data-aos="zoom-in"
                                    className='rounded-2xl bg-emerald-300 dark:bg-emerald-800 hover:bg-black/80
                                            dark:hover:bg-primary hover:text-white
                                            relative shadow-xl duration-high group max-w-[300px]
                            '>
                                    {/* imgage */}
                                    <div className='h-[100px]'>
                                        <img className='max-w-[160px] block mx-auto transform -translate-y-20
                                                    group-hover:scale-105 duration-300 drop-shadow-md
                                    '
                                            src={data.img}
                                            alt=""
                                        />
                                    </div>
                                    {/* rating */}
                                    <div className='p-4 text-center'>
                                        <div className='w-full flex items-center justify-center gap-1'>
                                            <FaStar className=' text-yellow-400' />
                                            <FaStar className=' text-yellow-400' />
                                            <FaStar className=' text-yellow-400' />
                                            <FaStar className=' text-yellow-400' />
                                            <FaStar className=' text-yellow-400' />
                                        </div>
                                        <h3 className='dark:text-white font-bold text-xl'>{data.title}</h3>
                                        <p className='text-gray-500 group-hover:text-while duration-300 text-sm line-clamp-2'>{data.discription}</p>
                                        <button className='bg-primary hover:scale-105 duration-300
                                     text-white py-1 px-4 rounded-full mt-4 
                                     group-hover:bg-white group-hover:text-primary'>
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Best Product */}
            <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 dark:bg-green-950 dark:text-white'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                        {/* image section */}
                        <div data-aos="zoom-in">
                            <img src={Img}
                                alt=""
                                className='max-w-[400px] h-[350px] w-full 
                                    mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover
                        '/>
                        </div>
                        {/* text details section */}
                        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>Mejores Productos Para Tu Bienestar y Salud</h1>
                            <p
                                data-aos="fade-up"
                                className='text-sm text-gray-500 tracking-wide leading-5'
                            >El aceite de cannabis rico en CBD se usa como complemento o suplemento alimenticio, remedio tópico o tratamiento farmacológico para el alivio del dolor crónico, la inflamación en enfermedades inflamatorias intestinales o cutáneas, la ansiedad, la depresión o la gravedad y frecuencia de las convulsiones en epilepsias refractarias.
                                Se emplea asimismo para tratar síntomas de enfermedades neurológicas o neuropsiquiátricas como la esclerosis múltiple, el alzhéimer, el párkinson o la esquizofrenia. Junto con el otro cannabinoide más estudiado, el THC, ha demostrado inducir la muerte de células cancerosas in vitro e in vivo en modelos animales, inhibiendo la progresión del tumor.</p>
                            <div className='flex flex-col gap-4'>
                                <div
                                    data-aos="fade-up"
                                    className='flex items-center gap-4'>
                                    <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100
                                                    dark:bg-violet-400
                                ' />
                                    <p>Productos De Calidad</p>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    className='flex items-center gap-4'>
                                    <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100
                                                    dark:bg-orange-400
                                ' />
                                    <p>Envio GRATIS y Rapido</p>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    className='flex items-center gap-4'>
                                    <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100
                                                    dark:bg-green-400
                                ' />
                                    <p>Faciles Metodos De Pago</p>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    className='flex items-center gap-4'>
                                    <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100
                                                    dark:bg-yellow-400
                                ' />
                                    <p>Precios Justos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner */}
            <div data-aos="zoom-in" className='bg-white dark:bg-gray-800 text-white' style={BannerImg}>
                <div className='container backdrop-blur-sm py-10'>
                    <div className='space-y-6 max-w-xl mx-auto'>
                        <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Mensaje a CannOil Servicio Al Cliente</h1>
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            data-aos="fade-up"
                            className='w-full p-3 text-black'
                        />
                    </div>
                </div>
            </div>
            <ProductHome />
        </>
    )
}
export default Home;