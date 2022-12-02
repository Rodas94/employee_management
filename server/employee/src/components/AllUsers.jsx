import { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell, styled, Button } from '@mui/material'
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';


const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TBody = styled(TableRow)`
& > td {
    font-size:20px;
}`;

const AllUsers = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        getAllUser();

    },[]);
    const getAllUser = async () => {
        let response = await getUsers();
        setUser(response.data);
        console.log(response.data);
    }
    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUser();
    }
    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Date of birth</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
            {users.map((user) => (
                    <TBody key={user.id}>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.date_of_birth}</TableCell>
                        <TableCell>{user.gender}</TableCell>
                        <TableCell>{user.salary}</TableCell>
                        <TableCell>
                            <Button color="success" variant="outlined" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`} >Update </Button>
                            <Button color="error" variant="outlined" onClick={() => deleteUserDetails(user._id)}> Remove</Button> 
                        </TableCell>
                    </TBody>
                ))}
            </TableBody>
        </StyledTable>
    )
}
export default AllUsers;