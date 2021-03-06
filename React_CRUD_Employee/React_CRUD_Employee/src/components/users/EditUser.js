import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: [e.target.value] })
    };
    useEffect(() => {
        loadUser()
    }, []);
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Edit User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label for="inputname">Name</label>
                        <input type="text"
                            className="form-control form-control-lg"
                            id="inputname" name="name" value={name}
                            placeholder="Enter Name"
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label for="inputusername">UserName</label>
                        <input type="text"
                            className="form-control form-control-lg"
                            id="inputusername" name="username" value={username}
                            placeholder="Enter UserName"
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label for="inputemail">Email</label>
                        <input type="email"
                            className="form-control form-control-lg"
                            id="inputemail" name="email" value={email}
                            placeholder="Enter Email"
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label for="inputphone">Phone</label>
                        <input type="phone"
                            className="form-control form-control-lg"
                            id="inputemail" name="phone" value={phone}
                            placeholder="Enter phone"
                            onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group">
                        <label for="inputwebsite">Website</label>
                        <input type="website"
                            className="form-control form-control-lg"
                            id="inputwebsite" name="website" value={website}
                            placeholder="Enter Website"
                            onChange={e => onInputChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-warning btn-black">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;