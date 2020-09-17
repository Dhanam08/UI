
import React, {useState} from "react";
import {useHistory, Link} from "react-router-dom";
import {Input, Space, Button, Layout, Row, Col} from 'antd';
import 'antd/dist/antd.css';

import {UserOutlined, LockOutlined} from "@ant-design/icons";
const {Header, Content }=Layout;
function Login(){
    const history=useHistory();
    let [userName, setuserName]=useState("");
    let [password, setpassword]=useState("");
    
const handleClick=()=>{
    
    if(userName==="admin" && password==="admin"){    
        alert("Success...!");                                                                                                                                                                                                                                                                                                                                                                                    
         history.push("./DashBoard");
        
    } 
    else{
        alert("Invalid User...")
    }
    
}

    return(
    
        <div style={Main}>
            <Row style={row}>
                <Col span={12} style={col1}>
                    <div style={leftside}>
                        <p style={lefthead}>LMS</p>
                        <p style={leftpara}>
                            LMS handles the management and delivery of eLearning courses.it lets you create learning 
                            Content, organize it, delivery it, deliver the content,entroll students, monitor and assess 
                            their performance.
                             </p>
                    </div>        
                    
                </Col>
                <Col span={12} style={col2}>
                    <div style={rightside}>
                    <Layout style={{borderRadius:"6px",height:250}}>
                        <Content style={{paddingLeft:"33px",paddingRight:"33px",marginTop:20,borderRadius:"6px",height:250,width:350}}>
                            <br/>
                            <Space direction="vertical">
                            <Input type="text" 
                            prefix={<UserOutlined/>}
                            size="medium"
                            value={userName}
                            onChange={e=>setuserName(e.target.value)}
                            placeholder="UserName"
                            style={{width:285}}
                             />
                            <Input.Password 
                            size="medium"
                            prefix={<LockOutlined/>}
                            value={password} 
                            onChange={e=>setpassword(e.target.value)}
                            placeholder="input password" 
                            style={{width:285}}
                            />
                            <center><Link to={"/ForgetPassword"}>forgot password?</Link></center>
                            <Space direction="horizondal">
                            <Button type="primary" style={{width:285,borderRadius:"20px"}} onClick={()=>handleClick()}>LOG_IN</Button>
            
                            </Space>
            
                            </Space>
                        </Content>
                    </Layout>
                    </div>
                </Col>

            </Row>  
            </div>         
        
        
    )

}
export default Login;

const Main={
    backgroundColor:"grey",
    display:"flex",
    height:570
}

const leftside={
    
        border:1,
        height:250
    
}
const row={
    marginTop:200,
    marginLeft:250,
        height:250,
        width:700
}
const col1={
    width:350,height:250,backgroundColor:"black",borderRadius:"6px"
}
const lefthead={
    color:"blue",fontFamily:"San Francisco",fontWeight:"bolder",fontSize:"20px",textAlign:"center"
}
const leftpara={
    color:"white",paddingLeft:"30px",paddingRight:"30px"
}
const col2={
    width:350,height:250,backgroundColor:"white",borderRadius:"6px"
}
const rightside={
    border:1, height:250
}