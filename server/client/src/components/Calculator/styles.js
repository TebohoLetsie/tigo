import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    width:"86%"
  },
  form: {
    // display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width:"20%",
    backgroundColor: blue

    
  },
  fileInput: {
    width: '30%',
    margin: '10px 0',
    display:'block',
    padding: "0px",
    
   
  },
  buttonSubmit: {
    marginBottom: 10,
  },
 
}));