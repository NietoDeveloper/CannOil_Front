import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import api from '../../api';
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { toast } from 'react-toastify';
const Login = (props) => {
    const navigate = useNavigate();
    const [inputs, setInput] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState({})

    // Hàm để thiết lập cookie
    const setCookie = (name, value, days) => {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    const hanldeInput = (e) => {
        const nameInput = e.target.name;
        const valueInput = e.target.value;
        setInput(state => ({ ...state, [nameInput]: valueInput }))
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();
        let isCheck = true;
        const errorSubmit = {}
        if (inputs.username === "") {
            errorSubmit.username = "Please Enter Username *"
            isCheck = false
        }

        if (inputs.password === "") {
            errorSubmit.password = "Please Enter Password *"
            isCheck = false
        }

        if (!isCheck) {
            setError(errorSubmit)
        } else {
            setError("")
            const data = {
                username: inputs.username,
                password: inputs.password
            }

            api.post('/login', data)
                .then(res => {
                    toast.success(res.data.message)
                    localStorage.setItem("login", true)
                    localStorage.setItem("authUsername", JSON.stringify(res.data.username))
                    setCookie('authToken', res.data.token, 7)
                    navigate('/')
                })
                .catch(error => {
                    setError({ login: "Invalid username or password." });
                    toast.error(error.response.data.error);
                });
        }
    }
    return (
        <>
            <div className="dark:bg-slate-800 min-h-screen flex flex-col justify-center">
                <div className='w-full flex justify-center'>
                    <a href="" className='w-20 flex flex-col text-3xl font-bold dark:text-white'>
                        <img src={Logo} alt="" />
                        Shopsy
                    </a>
                </div>
                <form onSubmit={hanldeSubmit} action="" className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md w-full max-w-sm mx-auto">
                    {error.login && <p className='text-red-500'>{error.login}</p>}
                    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="UserName"
                        // autoComplete="username"
                        onChange={hanldeInput}
                    />
                    <p className='text-red-500'>{error.username}</p>
                    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        // autoComplete="current-password"
                        onChange={hanldeInput}
                    />
                    <p className='text-red-500'>{error.password}</p>
                    <div className='flex justify-end'>
                        <Link to="/register" className='text-sky-500'>Sign Up</Link>
                    </div>
                    <button type="submit"
                        className="bg-primary text-white py-2 rounded hover:bg-orange-500 transition-colors duration-300">Login</button>
                    <div className='flex justify-between text-center'>
                        <button className='bg-googleRed rounded-md w-[150px] h-[40px] hover:scale-105 duration-150 text-center flex items-center justify-center gap-2'>
                            <FaGooglePlusG className='text-white' />
                            <span className='text-white font-bold text-xs'>Google Sign In</span>
                        </button>

                        <button className='bg-facebookBlu rounded-md w-[150px] h-[40px] hover:scale-105 duration-150 text-center flex items-center justify-center gap-2'>
                            <FaFacebookF className='text-white' />
                            <span className='text-white font-bold text-xs'>Facebook Login</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;