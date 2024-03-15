export function Designation() {
    return (
        <section className='w-screen h-[90vh] border-2 p-10'>
            <h2 className="text-4xl font-bold opacity-70">DESIGNATION MANAGE</h2>

            <div className="flex flex-row justify-between mt-10">

                <div className="flex flex-col gap-5">

                    <div>
                        <label className="">Destination Name</label>
                        <input type="text"  name="designationName"
                               className="w-full h-12 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="">Remark</label>
                        <input type="text"  name="remark"
                               className="w-full h-12 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div className="flex flex-row gap-5">
                       <button className='bg-green-500 text-white text-lg px-12 py-1 rounded'>Save</button>
                        <button className='bg-amber-500 text-white text-lg px-12 py-1 rounded'>Reset</button>
                    </div>


                </div>

                <div className="h-auto">
                    <table className="w-[60vw]">
                        <tr className="bg-[#EAEAEA] h-10">
                            <th className="text-center">DESIGNATION ID</th>
                            <th className="text-center">DESIGNATION NAME</th>
                            <th className="text-center">REMARK</th>
                        </tr>
                        <tbody></tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}
