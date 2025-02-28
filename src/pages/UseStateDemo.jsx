import { useState } from "react"

export default function UseStateDemo() {

    const [count, setCount] = useState(0)
    const [name1, setName1] = useState("")
    console.log("🚀 ~ UseStateDemo ~ name1:", name1)
    const [name2, setName2] = useState("")
    console.log("🚀 ~ UseStateDemo ~ name2:", name2)

    const handleIncrease = () => {
        setCount(prev => prev + 1)
    }

    const handleChange1 = (e) => {
        setName1(e.target.value)
    }
    const handleChange2 = (e) => {
        setName2(e.target.value)
    }


    console.log("Re-render");
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-y-[100px]">
            <div className="flex justify-center gap-5 items-center flex-col">
                <p className="text-5xl">Count: {count}</p>
                <button className="bg-blue-400 w-20 rounded p-2 text-center cursor-pointer" onClick={handleIncrease}>Click</button>
                <button className="bg-blue-400 w-20 rounded p-2 text-center cursor-pointer" onClick={() => setCount(0)}>Reset</button>

            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <label htmlFor="name1">Name </label>
                    <input type="text" name="name1" id="name1" value={name1} className="border-2 border-gray-500" onChange={handleChange1} />
                    <button className="bg-blue-400 w-20 rounded mx-2 p-2 text-center cursor-pointer" onClick={() => setName1("Two-way binding")}>Click</button>
                </div>
                <div>
                    <label htmlFor="name2">Name </label>
                    <input type="text" name="name2" id="name2" className="border-2 border-gray-500" onChange={handleChange2} />
                    <button className="bg-blue-400 w-20 rounded mx-2 p-2 text-center cursor-pointer" onClick={() => setName2("One-way binding")}>Click</button>
                </div>
            </div>
        </div>
    )
}
