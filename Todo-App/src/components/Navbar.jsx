import { useNavigate } from "react-router-dom";
const Navbar = () =>{
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate('/');
    };
    return(
        <div className="navbar">
            <h1>Todo App</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default Navbar