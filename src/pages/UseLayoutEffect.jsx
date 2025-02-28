import { useLayoutEffect, useState } from "react";
// Tham khảo từ F8

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI --X--
// 4. Gọi cleanups nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanups nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI --X--

const UseLayoutEffectDemo = () => {
    const [count, setCount] = useState(0);
    console.log("🚀 ~ UseLayoutEffectDemo ~ count:", count)

    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="flex flex-col justify-center items-center my-[20%]">
            <h1 className="text-2xl">Count {count}</h1>
            <button className="bg-blue-500 p-2 rounded cursor-pointer" onClick={handleClick}>Click</button>
        </div>
    );
};

export default UseLayoutEffectDemo;