import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setfirstName] = useState()
  const [lastName, setlastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [firstNameError, setfirstNameError] = useState(false)
  const [lastNameError, setlastNameError] = useState(false)
  const [emailError, setemailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const [emailErrortx, setemailErrortx] = useState()
  function regex(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }

  function setfNameInput(props){
    setfirstName(props)
  }
  function setlNameInput(props){
    setlastName(props)
  }
  function setemail(props){
    setEmail(props)
  }
  function setpassword(props){
    setPassword(props)
  }
  console.log(firstName)
  console.log(lastName)
  // console.log(Email)
  console.log(password)

  

  function claim(event){
    event.preventDefault();
    if(!firstName){
      setfirstNameError(true)
    }else{
      setfirstNameError(false)
    }
    if(!lastName){
      setlastNameError(true)
    }else{
      setlastNameError(false)
    }
    if(!email){
      setemailErrortx("email cannot be empty")
      setemailError(true)
    }else if(!regex()){
      setemailErrortx("Looks like this is not an email")
      setemailError(true)
    }else{
      setemailError(false)
    }
    if(!password){
      setPasswordError(true)
    }else{
      setPasswordError(false)
    }
    
  }
  return (
    <>
    <div id="page">
      <div id="heading">
        <h1 id="head">Learn to code by watching others</h1>
        <p id="description">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div id="application">
        <div id="freeTrial">
          <p ><span id="suggest">Try it free 7 days </span><span id="default">then<br></br> $20/mo. thereafter</span></p>
        </div>
        <div id="registration">
          <form onSubmit={claim}>
            <div className="input">
              <input type='text' placeholder='First Name' className={`inputBox ${firstNameError  ? "errorImg" : ""}`} name='firstName' onChange={(event) => setfNameInput(event.target.value)}  style={{border:firstNameError ?"1px solid #FF7979" :"1px solid #DEDEDE" }} />
              <p className="Error" style={{display: firstNameError ? "block" : "none"}}>First Name cannot be empty</p>
            </div>
            <div className="input">
              <input type='text' placeholder='First Name' className={`inputBox ${lastNameError  ? "errorImg" : ""}`} name='lastName' onChange={(event) => setlNameInput(event.target.value)} style={{border:lastNameError ?"1px solid #FF7979" :"1px solid #DEDEDE" }}/>
              <p className="Error" style={{display: lastNameError ? "block" : "none"}}>Last Name cannot be empty</p>
            </div>
            <div className="input">
              <input type='text' placeholder='Email Address' className={`inputBox ${emailErrortx  ? "errorImg" : ""}`} name='email' onChange={(event) => setemail(event.target.value)} style={{border:emailError ?"1px solid #FF7979" :"1px solid #DEDEDE" }}/>
              <p className="Error" style={{display:"block"}}>{emailErrortx}</p>
              {/* <p id="wrong">Looks like this is not an email</p> */}
            </div>
            <div className="input">
              <input type='password' placeholder='Password' className={`inputBox ${passwordError  ? "errorImg" : ""}`} name='password'onChange={(event) => setpassword(event.target.value)} style={{border:passwordError ?"1px solid #FF7979" :"1px solid #DEDEDE" }}/>
              <p className="Error" style={{display: passwordError ? "block" : "none"}}>Password cannot be empty</p>
            </div>
            <button id="claim" type='submit'>CLAIM YOUR FREE TRIAL</button>
          </form>
          <div id="ending"><span id="warning">By clicking the button, you are agreeing to our </span><span id="termsServices">Terms and Services</span></div>
        </div>
      </div>
    </div>  
    </>
  )
}

export default App
