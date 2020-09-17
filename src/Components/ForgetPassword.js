import React,{useState} from "react";
import {Link} from "react-router-dom";
import {Input, Space, Button, Row, Col} from 'antd';
import 'antd/dist/antd.css';
function ForgetPassword(){
    let [email, setemail]=useState("");
    let [error, seterror]=useState("");
    

const handleChange=(e)=>{
    e.preventDefault();
    setemail(e.target.value);
}

const passwordClick = (e) =>{
   
    seterror(validate(email));
}  
 function validate(email){
    
    let error={};
    let IsValid = true;
    if (!email === "") {
        IsValid = false;
        error.email = "*Please enter your email-ID.";
      }

      if (typeof email !== "undefined") {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
        if (!reg.test(email)) {
          IsValid = false;
          error.email = "*Please enter valid email-ID.";
        }
      }
      return error;
}
 
    return(
        <div style={{backgroundColor:"grey",display:"flex",height:570}}>
        <Row style={{marginTop:200,marginLeft:250,height:250,width:700}}>
            <Col span={12} style={{width:350,height:250,backgroundColor:"black",borderRadius:"6px"}}>
                <div style={{height:250,border:1}}>
                    <p style={{color:"blue",fontFamily:"San Francisco",fontWeight:"bolder",fontSize:"20px",textAlign:"center"}}>LMS</p>
                    <p style={{color:"white",paddingLeft:"30px",paddingRight:"30px"}}>
                    LMS handles the management and delivery of eLearning courses.it lets you create learning 
                            Content, organize it, delivery it, deliver the content,entroll students, monitor and assess 
                            their performance.</p>
                </div>        
            </Col>
            <Col span={12} style={{width:350,height:250,backgroundColor:"white",borderRadius:"6px"}}>
                <div style={{height:250,borderRadius:"6px"}}>
                    
                        <div style={{paddingLeft:"30px",paddingRight:"30px",width:350,borderRadius:"6px",height:250}}><br/>
                        <Link to={"/"}>Back to Login</Link><br/>
                        <p style={{color:"black",fontSize:12,width:350}}><h2>Forgot Password?</h2></p>
                        <p style={{color:"black",fontSize:12}}>Please enter your email address registerd with us to received your password reset link</p>
                        <Space direction="vertical">
                        <Input type="text" 
                        size="medium"
                        value={email}
                        onChange={handleChange}
                        placeholder="Email"
                        style={{width:290}}
                        />
                        <div>{error.email && <p style={{color:"red"}}>{error.email}</p>}</div>
                        <Button type="primary" onClick={passwordClick} style={{width:290,alignItem:"center",borderRadius:"20px"}}>Email Reset link</Button>
                        </Space>
                        </div>
                   
                </div>
            </Col>

        </Row>  
        
        </div>
    );
}
export default ForgetPassword;