import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {AppBar,Toolbar,Typography,Avatar,Link} from "@material-ui/core"
import {useSelector,useDispatch} from "react-redux"

const Header = (props)=>{
    const userLogin = useSelector((state)=> state.userLogin)
    const {userInfo} = userLogin; 
    
    const useStyles = makeStyles((theme) =>({
        toolbarTitle:{
            flex: 1
        }
    }));
   console.log("user header "+ userInfo)
    const classes = useStyles();
    const logoutHandler = () =>{
        console.log("logout")
    }
    return(
       <AppBar>
           <Toolbar>
              <Avatar alt="logo" src="img/tigo.png" />
               <Typography 
               component="h2"
               variant="h5"
               color="inherit"
               align="center"
               noWrap
               className={classes.toolbarTitle}>
                   {props.title}
               </Typography>
               {userInfo ? (<Avatar>
                   <Typography>{userInfo.name}</Typography>
               </Avatar>):<Typography><Link>Log In</Link></Typography>}
               
           </Toolbar>
       </AppBar>
    )
}

export default Header;