import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useRidirectLoggedOutUser from '../../customHook/useRidirectLoggedOutUser'
import { getUser } from '../../services/authServices'
import { SET_NAME, SET_USER } from '../../redux/features/auth/authSlice'
import './Profile.scss'
import { SpinnerImage } from '../../components/loader/Loader'
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Profile = () => {
    useRidirectLoggedOutUser('/login')

    const [profile, setProfile] = useState(null)

    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{
        setIsLoading(true)
        async function getUserData(){
            const data = await getUser()
            console.log(data)

            setProfile(data)
            setIsLoading(false)
            dispatch(SET_USER(data))
            dispatch((SET_NAME(data.name)))
        }
        getUserData()
    },[dispatch])
  return (
    <div className='profile --my2'>
        {isLoading && <SpinnerImage/>}
        <>
            {!isLoading && profile === null ? (
                <p>Something went wrong, Please reload the page</p>
            ):(
                <Card cardClass={'card --flex-dir-column'}>
                    <span className='profile-photo'>
                        <img src={profile?.image} alt='profilePic'/>
                    </span>
                    <span className='profile-data'> 
                    <p>
                        <b>Name : </b>{profile?.name}
                    </p>
                        <p>
                        <b>Email : </b>{profile?.email}
                        </p>
                        <p>
                        <b>Mobile : </b>{profile?.mobile}
                        </p>
                        <div>
                            <Link to='/edit-profile'>
                                <Button className='--btn --btn-primary' size='lg'>Edit Profile</Button>
                            </Link>
                        </div>
                    </span>

                </Card>
            )}
        </>
    </div>
  )
}

export default Profile
