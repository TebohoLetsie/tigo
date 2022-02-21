import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import {Card,Button} from "react-bootstrap"

const School = (props)=>{
    return(
        <div>
            <Card>
                <Card.Img className="img" variant="top" src={props.src} />

                
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>
                        <Card.Text>
                           Aps : {props.Aps}
                         
                        </Card.Text>
                        <Card.Text>
                         No : {props.number}
                        </Card.Text>
                    <Button vaariant="primary">Goto Course</Button>
                </Card.Body>
            </Card>
        </div>
    )
}


export default School;

