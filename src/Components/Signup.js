import { React, useState } from 'react'
import { auth, fs } from '../Config/Config';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Signup() {

  const navigate = useNavigate();

  const [fullName, setFullname]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  const [errorMsg, setErrorMsg]=useState('');
  const [successMsg, setSuccessMsg]=useState('');
  
  const handleSignup=(e)=>{
    e.preventDefault();
    // console.log(fullName, email, password);
    auth.createUserWithEmailAndPassword(email,password).then((credentials)=>{
        console.log(credentials);
        fs.collection('users').doc(credentials.user.uid).set({
            FullName: fullName,
            Email: email,
            Password: password
        }).then(()=>{
            setSuccessMsg('Tilmelding lykkedes. Du bliver nu automatisk omdirigeret til Login');
            setFullname('');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                navigate.push('/login');
            },3000)
        }).catch(error=>setErrorMsg(error.message));
    }).catch((error)=>{
        setErrorMsg(error.message)
    })
}


  return (
    <>
    <Navbar/>
    <div className='container'>
      <br />
      <br />
      signup side
      <hr />
      {successMsg &&<>
                <div className='success-msg'>{successMsg}</div>
                <br/>
            </>}
      <form action="form-group" autoComplete='off' onSubmit={handleSignup}>
        <label>Fuldenavn</label>
        <input type="text" className='form-control' required onChange={(e)=>setFullname(e.target.value)} value={fullName}/>
        <br />
        <label>Email</label>
        <input type="email" className='form-control'required onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <br />
        <label>Adgangskode</label>
        <input type="password" className='form-control' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <div className="btn-box">
          <span>Har du allerede en bruger Log på <Link to="/login" className='link'>Her</Link></span>
          <button type='submit' className='btn btn-success btn-md'>Registrér dig</button>
        </div>
      </form>
            {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
    </div>
    </>
  )
}

export default Signup