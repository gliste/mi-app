import "./User.css";
import User from "./User";
import users from "./MocUsers.js";

export default function UserList(props){
    return (
        <ul className="user-list">
           {users.map(user => {
            return(
                <User
                UserName = {user["Display name"]}
                Title = {user["Display name"]}
                />
            )
           })}
        </ul>
        
    );
}