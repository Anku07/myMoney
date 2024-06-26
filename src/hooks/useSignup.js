import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'



export const useSignup = () => {
    const[isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const Signup = async (Email, Password, Name) => {
        setError(null)
        setIsPending(true)
 
        try {
            //signup user
            const res = await projectAuth.createUserWithEmailAndPassword(Email, Password)


            if (!res) {
                throw new Error('Could not complete signup')
            }

            //add Nmae to user
            await res.user.updateProfile({ Name })

            //dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

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

    return { error, isPending, Signup }
}