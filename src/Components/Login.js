import { React, useState } from 'react'
import { auth } from '../Config/Config';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  const [errorMsg, setErrorMsg]=useState('');
  const [successMsg, setSuccessMsg]=useState('');
  
  const handleLogin=(e)=> {
    e.preventDefault();
    // console.log(email, password);
    auth.signInWithEmailAndPassword(email,password).then(()=>{
      setSuccessMsg('Login lykkedes. Du vil nu automatisk blive omdirigeret til hjemmesiden');
      setEmail('');
      setPassword('');
      setErrorMsg('');
      setTimeout(()=>{
          setSuccessMsg('');
          navigate.push('/');
      },3000)
  }).catch(error=>setErrorMsg(error.message));
}

  return (
    <div className='container'>
      <br />
      <br />
      login side
      <hr />
      {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
      <form action="form-group" autoComplete='off' onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" className='form-control'required onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <br />
        <label>Adgangskode</label>
        <input type="password" className='form-control' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <div className="btn-box">
          <span>Jeg er ny her Registrér dig <Link to="/signup" className='link'>Her</Link></span>
          <button type='submit' className='btn btn-success btn-md'>Login</button>
        </div>
      </form>
      {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
    </div>
  )
}

export default Login