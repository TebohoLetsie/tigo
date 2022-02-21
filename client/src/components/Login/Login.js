import React,{useState,useEffect} from "react"
import {FormGroup,FormLabel,Button,Row,Col,Input} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux"
import {login,register} from "../../actions/postLogin.js"
import FormContainer from "./FormContainer"
import Header from "../Header/Header.js"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import VisibilityIcon from "@material-ui/icons/Visibility"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"
import {makeStyles} from '@material-ui/core/styles'
import {CssBaseline,Typography,TextField,Box,FormControlLabel,Grid,Container,Avatar} from "@material-ui/core"
import {Link} from "react-router-dom"

const LoginScreen = ({location,history}) =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [visible,setVisible] = useState(false);
    const userLogin = useSelector((state)=>state.userLogin);
    const {loading,error,userInfo}= userLogin;
    const [registration,setRegistration] = useState(false);
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const  [confirmPassword,setConfirmPassword] = useState("")
    
    const toggleVisibility = () =>{
        setVisible(!visible);
    }
    const useStyles=makeStyles((theme) => ({
       paper:{
           marginTop: theme.spacing(8),
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center'
       },
       avatar: {
           margin: theme.spacing(1),
          
           width:'100%',
           height:'100%'


       },
       form:{
           width: '100%',
           marginTop: theme.spacing(1)
        
       },
       submit: {
           margin:theme.spacing(3, 0, 2)
       }
    }))
    const classes = useStyles();
    const redirect = location.search ? location.search.split("=")[1] : "/"
    useEffect(()=>{
        if(userInfo){
            history.push('/home')
        }
        
    },[userInfo,history,redirect])
    const dispatch = useDispatch();


    const submitHandler =(e)=>{
        e.preventDefault();
       
      
       
     dispatch(login(email,password))
        
    }
    const handleRegister = (e) =>{

       if(password===confirmPassword){
        e.preventDefault();
        dispatch(register(firstname,lastname,email,password))
       }
       
    }
    const switchToRegister = (e) =>{
       
        setRegistration(true);
    }
    if(registration)
    {
        return(
            <Container>
               <Header  title="Registration" />
                 <Container component="main" maxWidth="xs">
         
              <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                 <img alt="image" src="img/tigo.png" />
               </Avatar>
               <Typography component="h1" variant="h5">
                   Sign Up
               </Typography> 
                <form  className={classes.form} onSubmit={submitHandler}>
             
               
                <TextField variant="outlined"
                margin="normal"
                required
                fullWidth
                id="text"
                autoFocus value={firstname} onChange= {(e)=>setFirstname(e.target.value)} label="first name" />
            
                
                <TextField variant="outlined"
                margin="normal"
                required
                fullWidth
                id="text"
                 value={lastname} onChange= {(e)=>setLastname(e.target.value)} label="last name" />
                
                <TextField variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                 value={email} onChange= {(e)=>setEmail(e.target.value)} label="email" autoComplete="off" />
                
                <TextField variant="outlined"
                margin="normal"
                required
                fullWidth
                type="password"
                 value={password} onChange= {(e)=>setPassword(e.target.value)} label="password" />
                
                <TextField variant="outlined"
                margin="normal"
                required
                fullWidth
                type="password"
                 value={confirmPassword} onChange= {(e)=>setConfirmPassword(e.target.value)} label="confirm password" />
                <button
                 className="btn-login" onClick={handleRegister}>Submit</button>
              </form> 
              </div>
              </Container>
            
            </Container>
           
           
           
           
            
    
        )
    }
    else{
        return(
            <Container>
            <Header title="Log In" />
            <Container component="main" maxWidth="xs">
            
              <CssBaseline />
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                 <img alt="image" src="img/tigo.png" />
               </Avatar>
               <Typography component="h1" variant="h5">
                   Sign In
               </Typography> 
                <form  className={classes.form} onSubmit={submitHandler}>
             
            
                
            <TextField 
            variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                value={email} onChange= {(e)=>setEmail(e.target.value)} label="enter email" autoComplete="off"  />
            
             <TextField
             variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password" type={visible ? "text" : "password"} InputProps={{
                     endAdornment: (
                     <InputAdornment position="end" >
                      <IconButton onClick={toggleVisibility}>
                            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                      </InputAdornment>   
                     )
                 }} value={password} onChange={(e)=>setPassword(e.target.value)} label="enter password" />
                
             
                <button
                 className="btn-login" onClick={submitHandler}>Submit</button>
                <Link onClick={switchToRegister}>Don't have an account? Sign Up</Link>
              </form> 

              </div>
              </Container>

            </Container>

            
        )
    }
    
    
}

export default LoginScreen;