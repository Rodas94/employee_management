import react, { useState } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const defaultvalue = {
    name: '',
    date_of_birth:'',
    gender:'',
    salary:''
}

const AddUser = () => {
const [user, setUser] = useState(defaultvalue);
const navigate = useNavigate();

const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
}

const addUserDetails = async() => {
    await addUser(user);
    navigate('/all');
}

    return (
        <Container>
            <Typography variant="h4">Create Employee</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' placeholder="Enter your name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Date of birth</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='date_of_birth' placeholder="dd-mm-yyyy"/>
            </FormControl>
            <FormControl>
            <div>   
          <input type="radio"  onChange={(e) => onValueChange(e)} value="Male" name='gender'/> Male
          <input type="radio"  onChange={(e) => onValueChange(e)} value="Female" name='gender' /> Female
          <input type="radio"  onChange={(e) => onValueChange(e)} value="Other" name='gender' /> Other</div>
            </FormControl>
            <FormControl>
                <InputLabel>Salary</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='salary' placeholder="Enter your salary" />
            </FormControl>
            <FormControl>
            <Button variant="contained" color="success" onClick={() => addUserDetails()}>Create Employee</Button>
            </FormControl>
        </Container>
    )
}
export default AddUser;