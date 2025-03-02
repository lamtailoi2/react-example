import { useRef, useState } from "react"

export default function UseRefDemo() {
    const [isRender, setIsRender] = useState(false);
    const countRef = useRef(0)
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleClick = () => {
        countRef.current += 1
        console.log(countRef.current);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(">>>Submit Data: ", { email: emailRef.current.value, password: passwordRef.current.value });

    }

    return (
        <div>
            <div className="flex gap-x-5">
                <span>{countRef.current}</span>
                <button onClick={handleClick}>Click</button>
                <button onClick={() => setIsRender(!isRender)}>Re-render</button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-[250px] gap-5">
                <input type="text" className="border-2 border-gray-600" placeholder="Enter email...." ref={emailRef} />
                <input type="password" className="border-2 border-gray-600" placeholder="Enter password" ref={passwordRef} />
                <button type="submit">Submit</button>
            </form>

        </div>

    )
}
