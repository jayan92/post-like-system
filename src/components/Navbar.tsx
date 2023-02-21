import React from 'react'
import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

const Navbar = () => {
  const [user] = useAuthState(auth);

  const userLogout = async () => {
    await signOut(auth);    
  }

  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/">Home</Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createpost">Create Post</Link>
        )}
      </div>
      <div className='user'>
        { user && (
          <>
            <p> {user?.displayName} </p>
            <img src={user?.photoURL || ""} width="40" height="40" alt='user-avatar' />
            <button onClick={userLogout} style={{marginLeft: '10px'}}>Log Out</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar