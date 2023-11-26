import UserList from "./UserList";
import { useEffect, useState } from "react";

const UserPage = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
       fetch("https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Users.json")
       .then(response => response.json())
       .then(data => {
        setUsers(data)
       }) 
       .catch(error=> console.log(error));
    }, []);

    return(
        <div>
            <UserList Users= {users}/>
        </div>
    )
}

export default UserPage;