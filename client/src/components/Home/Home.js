import React from "react";
import {Container,Grow} from "@material-ui/core"
import SchoolIcon from '@material-ui/icons/School';
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {Card} from "react-bootstrap"

import Header from "../Header/Header"


const Home= (props) => {

  const styles ={
    largeIcon:{
      width: 60,
      height: 60
    }
   
  }
    return(
      <Grow in>
      <Container>
     
       <Header title="home"/>
       <div className="home-container">
          
       <Card  style={{width:"13rem"}} className="card">
              <Card.Body>
                <Card.Text>
                  <SchoolIcon style={styles.largeIcon} />
                </Card.Text>
                <Card.Text>
                  Find School
                </Card.Text>
                <Link to='/calculator'>Go</Link>
              </Card.Body>
            </Card>

            <Card style={{width:"13rem"}} className="card">
              <Card.Body>
                <Card.Text>
                <InsertCommentIcon style={styles.largeIcon} />
                </Card.Text>
                <Card.Text>
                  Social
                </Card.Text>
                <Link to='/calculator'>Go</Link>
              </Card.Body>
            </Card>

       </div>
    
     
      
      </Container> 
      </Grow>           
            
            
      
    )
}

export default Home;
