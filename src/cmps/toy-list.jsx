import { useEffect, useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Mounted')
        document.title = 'Counter!'

        // Unmount
        return () => {
            document.title = 'Counter out!'
        }
    }, [])


    useEffect(() => {
        console.log('count:', count)
        if (!count) return
        document.title = count

    }, [count])


    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    console.log('render')
    return (
        <div >
            <p>You clicked {count} times</p>
            <button onClick={increment}>
                Click me
            </button>
        </div>
        )
}