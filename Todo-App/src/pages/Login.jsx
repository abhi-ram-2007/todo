import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import users from "../data/Users"

const Login = () =>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()
    
    useEffect(() => {
        if(localStorage.getItem("user")){
            navigate('/dashboard')
        }
    }, [navigate])
    const loginHandler = (e) =>{
        e.preventDefault()
        const validUser = users.find((i)=>i.user === username && i.pass === password)
        if(validUser){
            localStorage.setItem("user", username);
            navigate('/dashboard')
            alert('Login successful')
        }else{
            setError('Invalid username or password')
        }
    }
    return(
        <div className="Login-container">
            <h1>Login Page</h1>
            <form className="login-form" onSubmit={loginHandler}>
                <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Login</button>
                <p>{error}</p>

            </form>

        </div>
    )
}
export default Login