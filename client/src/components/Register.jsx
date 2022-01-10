import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link } from 'react-router-dom';
import Axios from 'axios'

import '../css/register.css'

export default function Register() {
    const [open, setOpen] = useState(false);
    const [registerstatus, setregsterstatus] = useState('');
    const [values, setValues] = useState({
        user: '',
        password: '',
        showPassword: false,
    });


    const Register = () => {
        Axios.post("http://localhost:88/register", {
            usernamereg: values.user,
            userpasswordreg: values.password,
        }
        ).then((Response) => {
            console.log(Response)
            if(Response.data.err){
            setOpen(true)
            setregsterstatus('something went wrong try again')
            }else{
                setOpen(true)
                setregsterstatus("successfull go to logn page")
            }
        });
    };


    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleChangeUser = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };


    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const linkStyle = {
        marginLeft: "5px",
    };



    return (
        <div className='login-container'>

<Box sx={{ width: '24%', }}>
                <Collapse in={open}>
                    <Alert
                     variant="filled"
                        severity='info'
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2}}
                    >
                        {registerstatus}
                    </Alert>
                </Collapse>
            </Box>


            <div className="loginform">
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined" sx={{ padding: '15px' }} >
                        <React.Fragment>
                            <CardContent>
                                <Typography variant='h5' sx={{ textAlign: 'center', marginBottom: '2px' }}>
                                    Register
                                </Typography>
                                <Typography sx={{ marginBottom: '8px' }}>
                                    User
                                </Typography>
                                <TextField
                                    label="user name"
                                    id="outlined-size-small"
                                    value={values.user}
                                    size="small"
                                    onChange={handleChangeUser('user')}
                                    sx={{ width: '100%', marginBottom: '5px' }}
                                // onChange={handleChangeUser}
                                />
                                <Typography sx={{ marginBottom: '8px' }}>
                                    Password
                                </Typography>

                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChangePassword('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant='contained'
                                    onClick={Register}
                                >
                                    register</Button>
                            </CardActions>
                        </React.Fragment></Card>
                </Box>

                <Typography sx={{ color: 'white', textAlign: 'center', marginTop: '4px' }}>already have an account
                    <Link to="/login" style={linkStyle}>Login</Link>
                </Typography>
            </div>
        </div>
    )
}
