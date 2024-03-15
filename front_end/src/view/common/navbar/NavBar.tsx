
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";
import {FiHeart} from "react-icons/fi";

export function NavBar() {
    return (
        <section className="w-screen shadow-lg p-4 flex flex-row justify-between">
            <h2 className='text-2xl font-bold'>TECHXONIC</h2>

            <div className='flex flex-row gap-2'>
                <h2 className='opacity-70'>DESIGNATION</h2>
                <h2 className='opacity-70'>EMPLOYEE</h2>
            </div>

            <div className='flex flex-row gap-3'>
                <a href="#">
                    <FiHeart className="nav-icons text-2xl o" />
                </a>
                <a href="">
                    <AiOutlineShoppingCart className="nav-icons text-2xl" />
                </a>
                <a href="">
                    <AiOutlineUserAdd className="nav-icons text-2xl" />
                </a>
            </div>
        </section>
    );
}
