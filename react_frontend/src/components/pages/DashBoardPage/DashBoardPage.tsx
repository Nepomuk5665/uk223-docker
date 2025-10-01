import { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ActiveUserContext from "../../../Contexts/ActiveUserContext";
import authorities from "../../../config/Authorities";
import UserService from "../../../Services/UserService";
import { User } from "../../../types/models/User.model";

const DashBoardPage = () => {
    const { user } = useContext(ActiveUserContext);
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [newUser, setNewUser] = useState<Partial<User>>({
        firstName: "",
        lastName: "",
        email: "",
        roles: []
    });
    const [showAddForm, setShowAddForm] = useState(false);
    const [error, setError] = useState<string>("");

    const hasAuthority = useCallback((authorityName: string): boolean => {
        return user?.roles?.some(role =>
            role.authorities?.some(auth => auth.name === authorityName)
        ) ?? false;
    }, [user]);

    useEffect(() => {
        if (!user) {
            navigate("/login");
            return;
        }

        if (!hasAuthority(authorities.SEE_DASHBOARD)  ) {
            navigate("/access-denied");
        } else {
            loadUsers();
        }
    }, [user, navigate, hasAuthority]);

    const loadUsers = async () => {
        try {
            const response = await UserService.getAllUsers();
            setUsers(response.data);
        } catch (err) {
            setError("Failed to load users");
        }
    };

    const handleDelete = async (userId: string) => {
        if (userId === user?.id) {
            setError("Admins cant delete themselfs");
            return;
        }
        if (window.confirm("Delete this user?")) {
            try {
                await UserService.deleteUser(userId);
                loadUsers();
            } catch (err) {
                setError("Failed to delete user");
            }
        }
    };

    const handleAdd = async () => {
        try {
            await UserService.addUser(newUser as User);
            setShowAddForm(false);
            setNewUser({ firstName: "", lastName: "", email: "", roles: [] });
            loadUsers();
        } catch (err) {
            setError("Failed to add user");
        }
    };

    const handleUpdate = async () => {
        if (editingUser) {
            try {
                const updateData = {
                    id: editingUser.id,
                    firstName: editingUser.firstName,
                    lastName: editingUser.lastName,
                    email: editingUser.email,
                    roles: editingUser.roles
                };
                await UserService.updateUser(updateData);
                setEditingUser(null);
                loadUsers();
            } catch (err) {
                setError("Failed to update user");
            }
        }
    };

    if (!user || !hasAuthority(authorities.SEE_DASHBOARD)) {
        return null;
    }

    return (
        <div>
            <h1>Admin Dashboard - User Management</h1>

            {error && <div style={{color: "red"}}>{error}</div>}

            <button onClick={() => setShowAddForm(!showAddForm)}>Add New User</button>

            {showAddForm && (
                <div>
                    <h3>Add User</h3>
                    <input
                        placeholder="First Name"
                        value={newUser.firstName}
                        onChange={(e) => setNewUser({...newUser, firstName: e.target.value})}
                    />
                    <input
                        placeholder="Last Name"
                        value={newUser.lastName}
                        onChange={(e) => setNewUser({...newUser, lastName: e.target.value})}
                    />
                    <input
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    />
                    <button onClick={handleAdd}>Save</button>
                    <button onClick={() => setShowAddForm(false)}>Cancel</button>
                </div>
            )}

            <h2>Users List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>
                                {editingUser?.id === u.id ? (
                                    <input
                                        value={editingUser.firstName}
                                        onChange={(e) => setEditingUser({...editingUser, firstName: e.target.value})}
                                    />
                                ) : (
                                    u.firstName
                                )}
                            </td>
                            <td>
                                {editingUser?.id === u.id ? (
                                    <input
                                        value={editingUser.lastName}
                                        onChange={(e) => setEditingUser({...editingUser, lastName: e.target.value})}
                                    />
                                ) : (
                                    u.lastName
                                )}
                            </td>
                            <td>
                                {editingUser?.id === u.id ? (
                                    <input
                                        value={editingUser.email}
                                        onChange={(e) => setEditingUser({...editingUser, email: e.target.value})}
                                    />
                                ) : (
                                    u.email
                                )}
                            </td>
                            <td>
                                {editingUser?.id === u.id ? (
                                    <>
                                        <button onClick={handleUpdate}>Save</button>
                                        <button onClick={() => setEditingUser(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => setEditingUser({...u})}>Edit</button>
                                        <button onClick={() => handleDelete(u.id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashBoardPage;
