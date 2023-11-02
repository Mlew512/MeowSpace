import { useState,useEffect } from "react";

import ProfilePic from "./ProfilePic";
import Facts from "./Facts";
import LikeButton from "./LikeButton";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Name from './Names';
import Comments from './Comments.jsx'

function Post() {
      
    return (
      <>



  <Card style={{ borderRadius: '10px' }}className="m-auto mt-4 border-2 w-10/12 p-0">
  
    
        <div className=" pt-3 flex img-fluid items-center justify-start mb-3">
        <div className="img-fluid"> 
        <ProfilePic/>
        </div>
        <div className="img-fluid pt-6 ml-6"> 
        <Name/>
        </div>
        </div>
   
      <Card.Body>
     
        <Card.Text>
          <div className="ml-8">
          <Facts/>
          </div>
        </Card.Text>
      
      </Card.Body>
      <Nav variant="pills" defaultActiveKey="#first">

      <div className="ml-8 mr-4">
            <LikeButton/>
            </div>
          <Nav.Item>
            <Comments/>
          </Nav.Item>
 
        </Nav>
    </Card>










</>
      
    )
    }
  
  export default Post
  