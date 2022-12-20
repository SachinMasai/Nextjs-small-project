import React from 'react'
import Layout from '../../components/Layout'
import axios from "axios"

export async function getdata1(){
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
      )
 return {
  props : {
    users : data
  }
 
}
  } catch (error) {
    console.log(error.message);
  }
  console.log(data)
}


const Users = ({users}) => {
  return (
    
    <Layout>
      <div style={{background:"red"}} className='container' >
      <h1  style={{marginLeft:"50px" ,color:"yellow"}}>All user</h1>
     
      </div>
    </Layout>
  )
}

export default Users;


