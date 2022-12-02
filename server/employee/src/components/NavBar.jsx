import { AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
`;

const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: underline;
    text-align: center;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
            <Tabs to="./" exact>Employee Information</Tabs>
            <Tabs to="all" exact>All List Employee</Tabs>
            <Tabs to="add" exact>Create Employee</Tabs>
            </Toolbar>
        </Header>
        
    )
}
export default NavBar;