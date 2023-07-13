import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectName, SET_LOGIN } from '../../redux/features/auth/authSlice';
import { logoutUser } from '../../services/authServices';





const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const name = useSelector(selectName)


  const logout = async()=>{
    await logoutUser();
    await dispatch(SET_LOGIN(false))
    navigate('/login')
  }
  return (
    <div className='--pad header'>
        <div className='--flex-between'>
        <h3>
           <span className='--fw-thin'>Welcome, </span>
           <span className='--color-danger'>{name}</span> 
        </h3>    
        <Button className='--btn' variant='danger'size='lg' onClick={logout}>Logout</Button>      

        </div>   

        <hr/>   
    </div>
  )
}

export default Header
