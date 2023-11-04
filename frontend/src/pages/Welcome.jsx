import axios from "axios"
import { useState } from "react"
import Form from "../components/Form"
import Details from "../components/Details"

const Welcome = () => {
  const [sending, setSending] = useState(false)
  const [data, setData] = useState(null)
  const [notExists, setNotExists] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const {email} = Object.fromEntries(formData)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(email)) {
      setSending(true)
      try {
        const response = await axios.patch('https://gdsc-schools.onrender.com/api/user/auth', {email})
        setData(response.data)
      } catch (error) {
        console.log('error', error)
        setNotExists('This email does not exist')
      } finally {
        setSending(false)
          
      }
      
    }else {
      setNotExists('write a valid email address')
    }
  }


  return (
    <div className="container">

      <div className="flex items-center justify-center h-screen">
        <div className="back p-10 w-96 border-2 rounded-lg">
          <div className="flex justify-center">
            <img className="w-64" src="https://res.cloudinary.com/dcplfifkl/image/upload/v1698964476/school_tmlf51.svg" />
          </div>
          {data 
          ? <Details data={data} />
          : <Form notExists={notExists} sending={sending} handleSubmit={handleSubmit} />
          }

        </div>
      </div>

    </div>
  )
}

export default Welcome