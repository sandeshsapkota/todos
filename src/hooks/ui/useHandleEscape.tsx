import { useEffect } from 'react'

const UseHandleEscape = (fn: any) => {
    function handleEscDown(e: any) {
        if (e.code === 'Escape') {
            fn()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscDown)

        return () => {
            document.removeEventListener('keydown', handleEscDown)
        }
    }, [])
}

export default UseHandleEscape
