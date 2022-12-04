import React, { useEffect, useState } from 'react'
import { db } from '../../utils/firebase'
import { getDocs, collection, where, query} from 'firebase/firestore'
import './Userdetails.css'
import userEmail from './../Login/Modal'



export default function Userdetails(userEmail) {

  const userColRef = collection(db,'userDetails')
  const [data, setData] = useState([])
  const loginQuery = query(userColRef, where("Email", "==", userEmail))
 console.log(userEmail)


  useEffect(() => {
    const fetchData = async () => {
      try {
        let userData = []
        const userDetailsFirebase = await getDocs(userColRef)
        userDetailsFirebase.forEach((user) => {
          userData.push({ id: user.id, ...user.data() })
        })
        setData(userData)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])


  return (
    <div className='userDetailsContainer'>
      <h1>My Details</h1>
      <h2>Personal Information</h2>
      <hr />
      <br />
      <br />
      {data.map((entry) => (
        <div>
          <img src={entry.profileImg}></img>
          <div className='Info'>

            <h4 id={entry.id}><b>Name:</b>   {entry.Name}</h4>
            <h4 id={entry.id}> <b>Email: </b>   {entry.Email}</h4>
            <h4 id={entry.id}> <b>Phone number:</b>    {entry.phoneNumber}</h4>
          </div> 
          </div>
      ))}

        
    </div>
  )
}