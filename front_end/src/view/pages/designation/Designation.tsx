import axios from "axios";
import {ChangeEvent, useEffect, useState} from "react";
import {Employee} from "../employee/Employee";


interface Designations {
    designation_id: number;
    name: string;
    remark: string;
}
export function Designation() {

    const [designation, setDesignation] = useState<Designations[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        remark: ""
    });
    function fetchData() {
        try {
            axios.get('http://localhost:8080/designation/getDesignation')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    setDesignation(jsonData)
                    console.log(designation)
                }).catch((error: any)=> {
                console.error('Axios Error:', error)
            });
        } catch (error) {
            console.log('Error fetching data: ', error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function saveDesignation() {
        const jsonData = JSON.stringify(formData);
        axios.post('http://localhost:8080/designation/saveDesignation', jsonData,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('Designation saved successfully:', response.data);
                fetchData();
                alert('Designation saved successfully !')
            })
            .catch(error => {
                console.error('Error user saving:', error);
                alert('Error user saving:'+error);
            });
    }

    function clearFields() {
        setFormData({ name: "", remark: "" });
    }




    return (
        <section className='w-screen h-[90vh] border-2 p-10'>

            <h2 className="text-4xl font-bold opacity-70">DESIGNATION MANAGE</h2>

            <div className="flex flex-row justify-between mt-10">

                <div className="flex flex-col gap-5">

                    <div>
                        <label className="">Destination Name</label>
                        <input type="text"  name="name" onChange={handleInputChange} value={formData.name}
                               className="w-full h-12 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div>
                        <label className="">Remark</label>
                        <input type="text"  name="remark" onChange={handleInputChange} value={formData.remark}
                               className="w-full h-12 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                    </div>

                    <div className="flex flex-row gap-5">
                       <button onClick={saveDesignation} className='bg-green-500 text-white text-lg px-12 py-1 rounded'>Save</button>
                        <button onClick={clearFields} className='bg-amber-500 text-white text-lg px-12 py-1 rounded'>Reset</button>
                    </div>


                </div>

                <div className="h-auto">
                <table className="w-[60vw]">
                    <thead>
                    <tr className="bg-[#EAEAEA] h-10">
                        <th className="text-center">DESIGNATION ID</th>
                        <th className="text-center">DESIGNATION NAME</th>
                        <th className="text-center">REMARK</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(designation) && designation.map((des) => (
                        <tr className="h-12 text-center" key={des.designation_id}>
                            <td>{des.designation_id}</td>
                            <td>{des.name}</td>
                            <td>{des.remark}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>


            </div>
        </section>
    );
}
