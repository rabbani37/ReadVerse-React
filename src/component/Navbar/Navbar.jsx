import { NavLink } from "react-router";


const Navbar = () => {

    const navList = <>
        <NavLink to={`/`} className={({ isActive }) => `${isActive ? "text-green-500 border border-green-500" : ""} text-gray-500 rounded py-1 px-3 mx-2 font-semibold `} > <li> Home</li></NavLink>

        <NavLink
            to={`/listedBooks`} className={({ isActive }) => `${isActive ? "text-green-500 border border-green-500" : ""} text-gray-500 rounded py-1 px-3 mx-2 font-semibold `} > <li> Listed Books</li></NavLink>

        <NavLink
            to={`/pagesToRead`} className={({ isActive }) => `${isActive ? "text-green-500 border border-green-500" : ""} text-gray-500 rounded py-1 px-3 mx-2 font-semibold `} > <li>PagesToRead</li></NavLink>


    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl text-green-500">ReadVerse</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end space-x-1">
                <a className="btn btn-outline">Sing In</a>
                <a className="btn btn-success">Sing Up</a>
            </div>
        </div>
    );
};

export default Navbar;