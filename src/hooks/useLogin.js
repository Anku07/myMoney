import { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { projectAuth } from '../firebase/config'

export const useLogin = () => {
    const[isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()


    const login = async (Email, Password) => {
        setError(null)
        setIsPending(true)

        // sign the user out
        try{
            const res = await projectAuth.signInWithEmailAndPassword(Email, Password)

            //dispatch the logout action
            dispatch({ type: 'LOGIN', payload: res.user})
            
            //update state
            if (!isCancelled) {
                setIsPending(false)
                setError(null)
                
            }
        }
        catch(err){
            if (!isCancelled){
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
    return { login, error, isPending  }
}