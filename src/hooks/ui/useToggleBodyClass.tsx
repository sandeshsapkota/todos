import { useEffect } from 'react'

const UseToggleBodyClass = (className: string) => {
    useEffect(() => {
        document.body.classList.add(className)

        return () => {
            document.body.classList.remove(className)
        }
    }, [])
}

export default UseToggleBodyClass
