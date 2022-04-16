import React, {useState} from 'react';

export const UseFetching =  (callback:any) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const fetching = async() => {
        try {
            setIsLoading(true)
            await callback()
            setIsLoading(false)

        } catch (e:any) {
            setError(e.message)
        } finally {

        }
    }
    return [fetching, isLoading, error]
}