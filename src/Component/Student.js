import { useContext } from "react";
import { Store } from "./Store";
import { NavLink } from "react-router-dom";




function Student(){
    const [StoreData] = useContext(Store);
    console.log(StoreData);


    return(
        <>
        <h1>STUDENT</h1>
        <button>Add Student</button>
        <table border="1px">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>

                </tr>

            </thead>
            <tbody>
                {StoreData.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Course}</td>
                            <td>{item.Batch}</td>
                            <td><NavLink>EDIT</NavLink></td>

                        </tr>
                    )
                })}

            </tbody>
        </table>
        </>
    )
}
export default Student;