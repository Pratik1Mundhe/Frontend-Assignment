import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faEdit } from "@fortawesome/free-solid-svg-icons";

const Users = ({ users, setUsers }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEdit = (id) => {
        setSelectedUser(users.find((user) => user.id === id));
    };

    const handleBack = () => {
        setSelectedUser(null);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSelectedUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSave = () => {
        setUsers(users.map((user) => (user.id === selectedUser.id ? selectedUser : user)));
        setSelectedUser(null); // Reset to show all users after saving
    };

    return (
        <div>
            {selectedUser ? (
                <div className="m-5 flex justify-center items-center">
                    <div
                        key={selectedUser.id}
                        className="bg-blue-500 text-white p-4 flex-col items-center justify-center rounded-md"
                    >
                        <div className="flex justify-end">
                            <button onClick={handleBack}>
                                <FontAwesomeIcon icon={faCancel} />
                            </button>
                        </div>
                        <img src={selectedUser.image} alt="image" />
                        <h1>
                            Name: <input  className="bg-blue-500" name="firstName" value={selectedUser.firstName} onChange={handleChange} />
                             <input  className="bg-blue-500" name="lastName" value={selectedUser.lastName} onChange={handleChange} />
                        </h1>
                        <h2>
                            Age: <input className="bg-blue-500"  name="age" value={selectedUser.age} onChange={handleChange} />
                        </h2>
                        <h2>
                            Email: <input className="bg-blue-500"  name="email" value={selectedUser.email} onChange={handleChange} />
                        </h2>
                        <h2>
                            Username: <input className="bg-blue-500"  name="username" value={selectedUser.username} onChange={handleChange} />
                        </h2>
                        <h2>
                            Password: <input className="bg-blue-500"  name="password" value={selectedUser.password} onChange={handleChange} />
                        </h2>
                        <button onClick={handleSave} className="mt-4 bg-green-500 text-white p-2 rounded">
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-4 p-4">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="bg-blue-500 text-white p-4 flex-col items-center justify-center rounded-md"
                        >
                            <div className="flex justify-end">
                                <button onClick={() => handleEdit(user.id)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </div>
                            <img src={user.image} alt="image" />
                            <h1>
                                {user.firstName} {user.lastName}
                            </h1>
                            <h2>Age: {user.age}</h2>
                            <h2>Email: {user.email}</h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;
