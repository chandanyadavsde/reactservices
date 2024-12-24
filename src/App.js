import React, { useEffect } from 'react'
import MainLayout from './layout/MainLayout'
import { getPost } from './services/Index'

function App() {
  useEffect(()=>{
   async function fetchData(){
   const result = await  getPost("https://jsonplaceholder.typicode.com/todos")
   console.log(result)

    }
    fetchData()
  },[])
  return (
    <MainLayout>
      Hello this is composisition 
    </MainLayout>
  )
}

export default App