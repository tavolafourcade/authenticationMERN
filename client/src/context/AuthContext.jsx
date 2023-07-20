import { createContext, useState, useContext, useEffect } from 'react'
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth'
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)

  const signup = async (user) => {
    try {
      const res = await registerRequest(user)
      console.log(res)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error.response.data)
      setErrors(error.response.data)
    }
  }

  const signin = async (user) => {
    try {
      const res = await loginRequest(user)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log('ERRORRRRRR', error)
      // if(Array.isArray(error.response.data))
      //   return setErrors(error.response.data)
      // else
      //   setErrors([error.response.data.message])

    }
  }

  const logout = () => {
    Cookies.remove('token')
    setIsAuthenticated(false)
    setUser(null)
  }

  useEffect(() => {
    if(errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get()

      if (!cookies.token) {
        setIsAuthenticated(false)
        setLoading(false)
        setUser(null)
        return
      }

      try {
          const res = await verifyTokenRequest(cookies.token)
          console.log(res) 
          if(!res.data) {
            setIsAuthenticated(false)
            setLoading(false)
            return
          }
          setUser(res.data)
          setIsAuthenticated(true)
          setLoading(false)

      } catch (error) {
        setIsAuthenticated(false)
        setUser(null)
        setLoading(false)
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider value={{
      signup,
      signin,
      logout,
      user,
      isAuthenticated,
      errors,
      loading
      }}>
      {children}
    </AuthContext.Provider>
  )
}