import { useEffect, useState } from "react";

export default function UseEffectExamples() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState("Hello!");

    // 1. No Dependency Array (Runs on every render)
    useEffect(() => {
        console.log("Effect triggered on every render");

        const timer = setTimeout(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => clearTimeout(timer); // Cleanup to prevent memory leaks
    });

    // 2. Empty Dependency Array (Runs only once)
    useEffect(() => {
        console.log("Effect runs only once (on mount)");

        const fetchAPI = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchAPI();
    }, []);

    // 3. With Dependencies (Runs when dependencies change)
    useEffect(() => {
        console.log(`Effect triggered because 'count' changed: ${count2}`);

        if (count2 > 5) {
            setMessage("Count is greater than 5!");
        } else {
            setMessage("Hello!");
        }
    }, [count2]); // Runs only when 'count' changes

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6 space-y-6">
                {/* No Dependency Effect */}
                <div className="bg-blue-100 p-4 rounded-lg">
                    <h2 className="text-lg font-bold text-blue-700">No Dependency (Runs every render)</h2>
                    <p className="text-blue-600">Count (auto-increases): <span className="font-semibold">{count}</span></p>
                </div>

                {/* Empty Dependency Effect */}
                <div className="bg-green-100 p-4 rounded-lg">
                    <h2 className="text-lg font-bold text-green-700">Empty Dependency (Runs only on mount)</h2>
                    <h3 className="text-green-600 font-semibold">Posts</h3>
                    <ul className="list-disc list-inside text-green-600">
                        {posts.slice(0, 5).map((el) => ( // Show only first 5 posts
                            <li key={el.id} className="text-sm">{el.title}</li>
                        ))}
                    </ul>
                </div>

                {/* With Dependency Effect */}
                <div className="bg-purple-100 p-4 rounded-lg">
                    <h2 className="text-lg font-bold text-purple-700">With Dependency (Runs when count changes)</h2>
                    <h3 className="text-purple-600 font-semibold">Count: {count2} </h3>
                    <h4 className="text-purple-600 font-semibold">Count: {message}</h4>

                    <button
                        onClick={() => setCount2(count2 + 1)}
                        className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                        Increase Count
                    </button>
                </div>
            </div>
        </div>
    );
}
