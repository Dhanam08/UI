
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Input, Space, Button, Layout,Row, Col} from 'antd';
import 'antd/dist/antd.css';
import {LockOutlined} from "@ant-design/icons";
import ketset from './ketset.jpg';
function ResetPassword(){
    const history=useHistory();
   
   
    let[password, setpassword]=useState("");
    let[confpassword, setconfpassword]=useState("");
    let[error, seterror]=useState("");


    function validate(password, confpassword){
        
        let error={};
        let IsValid = true;
     
    if(!password){
        IsValid=false;
        error.password="* please Enter Your Password";
    }
    else if(!password.length < 8){
        IsValid=false;
        error.password="* Minimum 8 character length";
    }

    if(!confpassword){
        IsValid=false;
        error.confpassword="* Please Enter Your Confirm Password";
    }
    else if(password === confpassword){
        IsValid=true;
        alert("Success...");
        history.push("./");
               
    }
    else{
        IsValid=false;
        error.confpassword ="* Not Match Password";
    }
    
    return error;
    
}
const onSubmit=()=>{

     seterror(validate(password, confpassword));
}

    return(
    
        <div style={Main}>
                <div style={content}>
                
                <img src={ketset} alt="ketset" style={{width:330,height:200}}/>
                <div style={items}>
                        <Space direction="vertical">
                        <Input.Password 
                            size="medium"
                            prefix={<LockOutlined/>}
                            value={password} 
                            onChange={e=>setpassword(e.target.value)}
                            placeholder=" password" 
                            style={{width:290}}
                        />
                        <div style={{marginLeft:20}}>{error.password && <p style={{color:"red"}}>{error.password}</p>}</div>
                        <Input.Password 
                            size="medium"
                            prefix={<LockOutlined/>}
                            value={confpassword} 
                            onChange={e=>setconfpassword(e.target.value)}
                            placeholder="Confirm password" 
                            style={{width:290}}
                        />
                        <div style={{marginLeft:20}}>{error.confpassword && <p style={{color:"red"}}>{error.confpassword}</p>}</div>
                        <Space direction="horizondal">
                            <Button type="primary" style={{width:290,borderRadius:"20px"}} onClick={onSubmit}>Reset Password</Button>
                        </Space>
                    </Space>
                    </div>
                </div>
                
           
            
        </div>         
    )

}
export default ResetPassword;

const Main={
    backgroundColor:"grey",display:"flex",height:570
}

const content={
    border:1,
    width:330,
    borderRadius:"6px",
    marginLeft:450,
    marginTop:100,
    height:350,
     backgroundColor:"#131339"
}
const items={
    paddingLeft:"20px",backgroundColor:"#131339",borderRadius:"6px",width:330,paddingRight:"20px"
}
const head={
    color:"dodgerblue",fontFamily:"sans-serif",fontSize:24,textAlign:"center"
}
