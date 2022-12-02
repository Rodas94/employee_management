import { useState, useEffect } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from '@mui/material';
import { editUser, getUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const defaultvalue ={
    name: '',
    username:'',
    email:'',
    phone:''
}
const EditUser = () => {
const [user, setUser] = useState(defaultvalue);

const navigate = useNavigate();
const { id } = useParams();

useEffect(() => {
    loadUserDetails();
}, []);

const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
}

const editUserDetails = async () => {
    await editUser(user, id);
    navigate('/all');
}
const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
}

    return (
        <Container>
            <Typography variant="h4">Update  Employee</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel></InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='date_of_birth' value={user.date_of_birth} />
            </FormControl>
            <FormControl>
            <div>   
          <input type="radio"  onChange={(e) => onValueChange(e)} value="Male" name='gender'/> Male
          <input type="radio"  onChange={(e) => onValueChange(e)} value="Female" name='gender' /> Female
          <input type="radio"  onChange={(e) => onValueChange(e)} value="Other" name='gender' /> Other</div>
            </FormControl>
            <FormControl>
                <InputLabel></InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='salary' value={user.salary} />
            </FormControl>
            <FormControl>
            <Button variant="contained" color="success" onClick={() => editUserDetails()}>Update</Button>
            </FormControl>
        </Container>
    )
}
export default EditUser;