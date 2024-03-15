import {useState} from "react";
import {CgClose} from "react-icons/cg";
import {IoClose} from "react-icons/io5";

export function Employee() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopUp=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <section className='relative w-screen h-[90vh] border-2 p-10'>
            <div className='flex flex-row justify-between'>
                <h2 className="text-4xl font-bold opacity-70">EMPLOYEE MANAGE</h2>

                <div className="flex flex-row gap-5">
                    <button onClick={togglePopUp} className='bg-green-500 text-white text-lg px-12 py-1 rounded'>ADD NEW</button>
                    <button className='bg-blue-400 text-white text-lg px-12 py-1 rounded'>REFRESH</button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-md">
                        <div className="flex flex-col gap-5">

                            <div>
                                <label className="">FULL NAME</label>
                                <input type="text"  name="designationName"
                                       className="w-full h-12 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className="">DESIGNATION</label>
                                <select className='h-12 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'>
                                    <option value="">Test</option>
                                </select>
                            </div>

                            <div>
                                <label className="">DATE OF JOIN</label>
                                <input type="date"  name="dateOfJoin"
                                       className="w-full h-12 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                            </div>

                            <div className='flex flex-row items-center gap-5'>
                                <label className="">IS MANAGER</label>
                                <input type="checkbox"  name="isManager"
                                       className=" h-8 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                            </div>

                            <div className="flex flex-row gap-5">
                                <button className='bg-blue-600 text-white text-lg px-12 py-1 rounded'>NEW</button>
                                <button className='bg-green-500 text-white text-lg px-12 py-1 rounded'>SAVE</button>
                                <button className='bg-amber-500 text-white text-lg px-12 py-1 rounded'>RESET</button>
                                <button className='bg-red-700 text-white text-lg px-12 py-1 rounded'>DELETE</button>
                            </div>


                        </div>

                    </div>
                </div>
            )}

        </section>
    );
}