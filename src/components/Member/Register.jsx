import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from "../../api"
const Register = (props) => {

    const navagate = useNavigate()
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
        address: "",
        avatar: ""
    })

    const [file, setFile] = useState("")
    const [avatar, setAvatar] = useState("")
    const [error, setError] = useState({})
    const hanldeInput = (e) => {
        const nameInput = e.target.name
        const valueInput = e.target.value
        setInputs(state => ({ ...state, [nameInput]: valueInput }))
    }

    function validateEmail(email) {
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    const handleFile = (e) => {
        const files = e.target.files; // Sử dụng số nhiều cho biến
        const styleFile = ['jpg', 'png', 'PNG', 'jpeg', 'svg']

        if (files.length > 0) {
            const file = files[0];
            const fileExemple = file.name.split('.').pop().toLowerCase()

            if (!styleFile.includes(fileExemple)) {
                toast.error("Invalid file. Please choose a jpg or png file.")
                setError(state => ({ ...state, avatar: "Invalid file. Please choose a jpg or png file" }))
            } else if (file.size > 1024 * 1024) {
                toast.error("File is too large. Please choose a file smaller than 1MB.")
            } else {
                const reader = new FileReader();

                reader.onload = (event) => {
                    setAvatar(event.target.result); // Cập nhật URL hình ảnh
                    setFile(file); // Lưu file gốc
                };

                reader.onerror = (error) => {
                    console.error("Error reading file:", error);
                };
                reader.readAsDataURL(file); // Đọc file dưới dạng data URL
            }
        } else {
            console.warn("No file selected");
        }
    };


    const hanldeSubmit = (e) => {
        e.preventDefault()
        let isCheck = true
        const errorSubmit = {}
        console.log(avatar);
        console.log(file);
        if (inputs.username === "") {
            errorSubmit.username = "Please Enter Username"
            isCheck = false
        }

        if (inputs.password === "") {
            errorSubmit.password = "Please Enter Password"
            isCheck = false
        }

        if (inputs.email === "") {
            errorSubmit.email = "Please Enter Email"
            isCheck = false
        } else if (!validateEmail(inputs.email)) {
            errorSubmit.email = "Please Enter The Correct Format"
            isCheck = false
        }

        if (inputs.phone === "") {
            errorSubmit.phone = "Please Enter Phone"
            isCheck = false
        }

        if (inputs.address === "") {
            errorSubmit.address = "Please Enter Address"
            isCheck = false
        }

        if (!isCheck) {
            setError(errorSubmit)
        } else {
            setError("")
            const formData = new FormData()
            formData.append('username', inputs.username)
            formData.append('password', inputs.password)
            formData.append('email', inputs.email)
            formData.append('phone', inputs.phone)
            formData.append('address', inputs.address)

            console.log('Avatar file:', file); // Kiểm tra dữ liệu avatar
            if (avatar) {
                formData.append('avatar', file)
            }


            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'  // Important for file uploads
                }
            };


            api.post("/register", formData, config)
                .then((response) => {
                    if (response.data.errors) {
                        console.log(response.data.errors);
                    } else {
                        navagate('/login')
                        toast.success(response.data.message)
                        setInputs({
                            username: '',
                            password: '',
                            email: '',
                            phone: '',
                            address: ''
                        })
                    }
                })
                .catch(function (error) {
                    setError(error.response.data)
                    console.log(error.response.data);
                })
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
                    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="UserName"
                        onChange={hanldeInput}
                    />
                    <p className='text-red-500'>{error.username}</p>
                    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={hanldeInput}
                    />
                    <p className='text-red-500'>{error.password}</p>
                    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        autoComplete="phone"
                        onChange={hanldeInput}
                    />
                    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={hanldeInput}
                    />
                    <p className='text-red-500'>{error.email}</p>
                    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        autoComplete="address"
                        onChange={hanldeInput}
                    />
                    <input className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="file"
                        name="avatar"
                        id="avatar"
                        placeholder="Avatar"
                        autoComplete=""
                        onChange={handleFile}
                    />
                    <button type="submit"
                        className="bg-primary text-white py-2 rounded hover:bg-orange-500 transition-colors duration-300"
                    >Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default Register;