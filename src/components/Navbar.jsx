import React from 'react';
import hero from "../assets/react.svg"
import { Menu } from 'lucide-react';
import { Link } from 'react-router';
const Navbar = () => {
    return (
        <>
        <header className='bg-base-300 '>
            <nav className='navbar flex container flex-row-reverse justify-between '>
            <section>
                <img src={hero} width={40} alt="" />
                Leader
            </section>
            <section>
                <button className='btn text-2xl btn-ghost'>Leader</button>
            </section>
            <section>
                <div className="dropdown">
                <button tabIndex={0} className='btn btn-ghost'><Menu/>Menu</button>
                
                <ul tabIndex={-1} className="dropdown-content bg-base-100 rounded-box menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={"/food"}>Food</Link></li>
                   <li> <Link to="/posts">User 10</Link></li>
                   <li> <Link to="/posts/9">User 99</Link> </li>
                </ul>
                </div>
            </section>
        </nav>
        </header>
            <h2>The quick brown fox jumped over the lazy dogs</h2>

        </>
    );
};

export default Navbar;