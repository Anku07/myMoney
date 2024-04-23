import { useState } from 'react'
import { projectAuth } from '../firebase/config'




export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const Signup = async (Email, Password, Name) => {
        setError(null)
        setIsPending(true)
 
        try {
            //signup user
            const res = await projectAuth.createUserWithEmailAndPassword(Email, Password)
            console.log(res.user)

            if (!res) {
                throw new Error('Could not complete signup')
            }

            //add Nmae to user
            await res.user.updateProfile({ Name })

            setIsPending(false)
            setError(null)
        }
        catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }
    return { error, isPending, Signup }
}