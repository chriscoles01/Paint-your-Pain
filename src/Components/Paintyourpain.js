//imports the css file
import "./pyp.css"

import React, { Component, Fragment } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//imports all the images from the respective folder
// 
import green from '../Images/green.png'
import blue from '../Images/blue.png'
import brown from '../Images/brown.png'
import orange from '../Images/orange.png'
import purple from '../Images/purple.png'
import red from '../Images/red.png'
import yellow from '../Images/yellow.png'
import Typography from '@material-ui/core/Typography';

import {Form} from 'react-bootstrap'
import ReactCursorPosition from 'react-cursor-position'


class Paintyourpain extends Component {
    constructor(props) {
        super(props);
        this.state = {
          top: false,
          middle: false,
          bottom: false,
          x: 0, y: 0 
         };
       }
       _onMouseMove(e) {
        this.setState({ x: e.screenX, y: e.screenY });
      }
       toggleTop(){
        if(this.state.top){
          this.setState({top: false})
        }else  {
          this.setState({top: true})
        }
        console.log("top toggle")
      }
      toggleBot(){
        if(this.state.bottom){
          this.setState({bottom: false})
        }else  {
          this.setState({bottom: true})
        }
      }
      toggleMid(){
        if(this.state.middle){
          this.setState({middle: false})
        }else  {
          this.setState({middle: true})
        }
      }
      /*
      This method getCard takes the parameters for the title of the card, and the content (text) of the card, then it returns it 
      */
      getCard = (title, text) => {
        const styles = {
          card: {
            minWidth: 275,
            
          },
          bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
          },
          title: {
            fontSize: 14,
          },
          pos: {
            marginBottom: 12,
          },
        };
        return(
  
  <Card className={styles.card}>
        <CardContent>
          <Typography className={styles.title} color="textSecondary" gutterBottom>
  {title}
          </Typography>
          <Typography inline variant="h5" component="h2">
           
          {text.split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;
        })}
          </Typography>
         
        </CardContent>
       
      </Card>
  
        );
      }
    render() {
      //This is a definition of the page style written in JSON format
      const pageStyle = {
        paddingTop:"100px",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        paddingRight: "5%",
        paddingLeft: "5%"
      }
    
      //used to set the font size of the title
      const title = {
        fontSize: "300%"
      }
     
      

    return (
        

            
           
        <Fragment >
        <div onMouseMove={this._onMouseMove.bind(this)}>
   
        <div style={pageStyle}>
        <div style={title}>
          <Form>
            <Form.Group>
              <Form.Label>Paint your Pain</Form.Label>
            </Form.Group>
            {this.getCard("About","Painting has been demonstrated to have a beneficial impact for people when representing their state of mind/body in a visual way, allowing them to produce an image that everybody can relate to. \n In the past, researchers collected various paintings from people dealing with chronic diseases (Kirkham,2015). \n Art therapists believe that the process of painting supports people in expressing and shaping their own emotions which otherwise would stay abstract, hidden, and could affect their mental stability (Edwards,2014). \n Our project is going to provide a better representation of pain and create a network of communication between key stakeholders.")}
          </Form>

      </div>

    
        <div  className="picholder">
        <ReactCursorPosition>

          <img  className="under"  src={green} alt="" />
          <img style={{
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,
                }} className="overlay" src={blue} alt=""/>
          <img style={{
        bottom: 20,
        left: 0,
        top: 0, 
        right: 0,
                }} className="overlay" src={brown} alt=""/>
          <img  style={{
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,
                }}className="overlay" src={purple} alt=""/>
          <img  style={{
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,
                }}className="overlay" src={red} alt=""/>
          <img  style={{
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,
                }}className="overlay" src={orange} alt=""/>
          <img style={{
        bottom: 0,
        left: 0,
        top: 0, 
        right: 0,
                }} className="overlay" src={yellow} alt=""/>
        </ReactCursorPosition>


        </div>

    

         
            


 

    </div>
        </div>

         </Fragment>
        
    );
  }
}

export default Paintyourpain;
