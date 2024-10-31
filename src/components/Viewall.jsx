import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [userData, changeUserData] = useState(
[]
    )
    const fetchData=()=>{
        axios.get("https://logix-space-course-app-1.onrender.com/getdata").then(
            (response)=>{
                changeUserData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{fetchData()},[]
    )
    return (
        <div>
            <Navbar/>
            <div className="contaienr">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">FirstName</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Dob</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">_V</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{value._id}</th>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.college}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.address}</td>
                                            <td>{value.__v}</td>
                                        </tr>
                                    }
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall
