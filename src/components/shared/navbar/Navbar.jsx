
import Link from "next/link";

const Navbar = () => {

    const navLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "#about"
        },
        {
            name: "Skills",
            path: "#skills"
        },
        {
            name: "Portfolio",
            path: "#portfolio"
        },

        {
            name: "Contact",
            path: "#contact"
        },
      
        {
            name: "Services ",
            path: "#services"
        },
    ]

    return (
        <div className="navbar mx-auto bg-[#f8fafc] opacity-100 px-5  shadow-2xl md:px-24 fixed z-10  text-black ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm w-32 bg-[#f8fafc]  dropdown-content rounded-box z-[1] mt-3  p-2 shadow">
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <li className="hover:bg-green-400 hover:text-white mr-3 rounded-md mb-2" key={index}>
                                        <Link className="text-lg "  href={link.path}>{link.name}</Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <Link href="/" className="text-3xl font-serif px-3 shadow-2xl  p-1 rounded-md hover:bg-green-400 hover:text-white   ">GreenGrowth</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map((link, index) => {
                            return (
                                <li className="hover:bg-green-400 hover:text-white mr-3 rounded-md" key={index}>
                                    <Link className="text-lg" href={link.path}>{link.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline text-black hover:bg-green-400 text-2xl">Login</button>
            </div>
        </div>
    );
};

export default Navbar;