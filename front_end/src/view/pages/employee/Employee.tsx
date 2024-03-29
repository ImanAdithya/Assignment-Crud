import {ChangeEvent, useEffect, useState} from "react";
import {CgClose} from "react-icons/cg";
import {IoClose} from "react-icons/io5";
import axios from "axios";

interface Designations {
    designation_id: number;
    name: string;
    remark: string;
}

interface Employee{
    employee_id:number,
    full_name:string,
    dateOfJoining:string,
    isManager:number,
    designationName:string
}
export function Employee() {

    const [employee, setEmployee] = useState<Employee[]>([]);

    const [isOpen, setIsOpen] = useState(false);

    const [designationNames, setDesignationNames] =useState<Designations[]>([]);

    const [lastIndex, setLastIndex] = useState(0);

    const [formData, setFormData] = useState({
        employee_id: 0,
        full_name: '',
        designationName: '',
        dateOfJoining:"",
        isManager: 0,
    });

    const [isManager, setIsManager] = useState(0);

    const [selectDesName, setSelectDesName] = useState('');


    function fetchDataEmployee() {
        try {
            axios.get('http://localhost:8080/employee/getAllEmployee')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    console.log(jsonData)
                    setEmployee(jsonData);
                    console.log(employee)
                }).catch((error: any)=> {
                console.error('Axios Error:', error)
            });
        } catch (error) {
            console.log('Error fetching data: ', error)
        }
    }

    useEffect(() => {
        fetchDataEmployee();
        fetchDesignationData();
        fetchLastIndex();
    }, []);
    function fetchDesignationData() {
        try {
            axios.get('http://localhost:8080/designation/getDesignation')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    setDesignationNames(jsonData)
                    console.log(designationNames)
                }).catch((error: any)=> {
                console.error('Axios Error:', error)
            });
        } catch (error) {
            console.log('Error fetching data: ', error)
        }
    }

    function fetchLastIndex() {
        try {
            axios.get('http://localhost:8080/employee/getLastIndex')
                .then((res: { data: any }) => {
                    const jsonData = res.data;
                    setLastIndex(jsonData);
                    console.log(jsonData);
                }).catch((error: any)=> {
                console.error('Axios Error:', error)
            });
        } catch (error) {
            console.log('Error fetching data: ', error)
        }
    }

    const togglePopUp=()=>{
        clearEmployeeFields();
        setIsOpen(true);
        setFormData({
            employee_id: lastIndex+1,
            full_name: '',
            designationName: '',
            dateOfJoining:'',
            isManager: 0,
        })

    }
    function newBtn() {
        setFormData({
            employee_id: lastIndex+1,
            full_name: '',
            designationName: '',
            dateOfJoining:'',
            isManager: 0,
        })
    }
    const togglePopClose=()=>{
        setIsOpen(false);
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    function handleManagerCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
        const isChecked = event.target.checked;
        setFormData({ ...formData, isManager: isChecked ? 1 : 0 }); // Update isManager based on the checked status
    }
    function handleDesignationName(event: ChangeEvent<HTMLSelectElement>) {
        const { value } = event.target;
        setSelectDesName(value);
        setFormData({ ...formData, designationName: value });
    }
    function saveEmployee() {

        if (!formData.full_name || !formData.designationName || !formData.dateOfJoining) {
            alert('Please fill in all required fields.');
            return;
        }

        const jsonData = JSON.stringify(formData);
        axios.post('http://localhost:8080/employee/saveEmployee', jsonData,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('Designation saved successfully:', response.data);
                fetchDataEmployee();
                alert('Designation saved successfully !')
            })
            .catch(error => {
                console.error('Error user saving:', error);
                alert('Error user saving:'+error);
            });
    }
    function handleTableRowClick(selectedEmp: Employee) {
        setFormData(selectedEmp)
        setIsOpen(true);
    }
    function clearEmployeeFields() {
        setFormData({
            employee_id:0,
            full_name: "",
            designationName: "",
            dateOfJoining:"",
            isManager: 0 });
    }
    function deleteEmployee() {
        console.log(formData.employee_id);
        axios.delete(`http://localhost:8080/employee/${formData.employee_id}`)
            .then(response => {
                console.log('Employee deleted successfully:', response.data);
                fetchDataEmployee(); // Fetch updated employee data after deletion
            })
            .catch(error => {
                console.error('Error deleting Employee:', error);
            });
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

                            <div className="w-full flex flex-row justify-end">
                                <CgClose className="text-xl" onClick={togglePopClose}></CgClose>
                            </div>


                            <div>
                                <label className="">EMP ID</label>
                                <input type="text"  name="employee_id" onChange={handleInputChange} value={formData.employee_id}
                                       className="w-full h-12 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                            </div>

                            <div>
                                <label className="">FULL NAME</label>
                                <input type="text"  name="full_name" onChange={handleInputChange} value={formData.full_name}
                                       className="w-full h-12 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className="">DESIGNATION</label>
                                <select value={formData.designationName} onChange={handleDesignationName} name="designationName" className='h-12 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500'>
                                    <option value="">Select</option>
                                    {designationNames.map((des) =>(
                                        <option key={des.designation_id} value={des.name}>{des.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="">DATE OF JOIN</label>
                                <input value={formData.dateOfJoining} type="date"  name="dateOfJoining" onChange={handleInputChange}
                                       className="w-full h-12 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                            </div>

                            <div className='flex flex-row items-center gap-5'>
                                <label className="">IS MANAGER</label>
                                <input  checked={formData.isManager === 1} type="checkbox"  name="isManager" onChange={handleManagerCheckboxChange}
                                       className=" h-8 px-3 py-2 text-gray-900 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                            </div>

                            <div className="flex flex-row gap-5">
                                <button onClick={newBtn} className='bg-blue-600 text-white text-lg px-12 py-1 rounded'>NEW</button>
                                <button onClick={saveEmployee} className='bg-green-500 text-white text-lg px-12 py-1 rounded'>SAVE</button>
                                <button onClick={clearEmployeeFields} className='bg-amber-500 text-white text-lg px-12 py-1 rounded'>RESET</button>
                                <button onClick={deleteEmployee} className='bg-red-700 text-white text-lg px-12 py-1 rounded'>DELETE</button>
                            </div>


                        </div>

                    </div>
                </div>
            )}

            <div className="h-auto mt-20">
                <table className="w-full">
                    <thead>
                    <tr className="bg-[#EAEAEA] h-10">
                        <th className="text-center">EMP ID</th>
                        <th className="text-center">DESIGNATION</th>
                        <th className="text-center">FIRST NAME</th>
                        <th className="text-center">LAST NAME</th>
                        <th className="text-center">DATE OF JOIN</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(employee) && employee.map((emp) => {
                        const fullNameArray = emp.full_name ? emp.full_name.split(" ") : ["", ""];
                        const firstName = fullNameArray[0];
                        const lastName = fullNameArray.slice(1).join(" ");
                        return (
                            <tr key={emp.employee_id} className="h-12 text-center" onClick={() => handleTableRowClick(emp)}>
                                <td>{emp.employee_id}</td>
                                <td>{emp.designationName}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{new Date(emp.dateOfJoining).toLocaleDateString()}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>


        </section>
    );
}
