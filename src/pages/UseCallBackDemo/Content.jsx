import { memo } from "react";

function Content({ onIncrease }) {
    console.log("Re-render from Content");

    return (
        <div className="flex flex-col gap-5">
            <h1>Hello F-Codes</h1>
            <button className="bg-red-300" onClick={onIncrease}>Click</button>
        </div>

    )
}

export default memo(Content)