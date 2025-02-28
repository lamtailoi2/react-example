import { useCallback, useState } from "react"
import Content from "./Content"

export default function UseCallBackDemo() {
    const [count, setCount] = useState(0)
    // const handleCount = () => {
    //     setCount(prev => prev + 1)
    // }

    const handleWithUseCallback = useCallback(() => {
        console.log(">>>> UseCallback");
        setCount(prev => prev + 1)
    }, [])
    return (
        <div className="flex flex-col">
            <span>Cout: {count}</span>

            <Content onIncrease={handleWithUseCallback} />
        </div>
    )
}
