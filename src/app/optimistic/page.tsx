import React from "react";
import Counter from "@/Components/Counter";

const Optimistic = async () => {

    const res = await fetch("http://localhost:3000/api/likes", {
        cache: "no-cache",
        next: {
            tags: ["likes"]
        }
    });

    const { likes } = await res.json();

    return (
        <div className="flex flex-col justify-center item-center p-5">
            <h1 className="text-4xl font-bold text-center mb-5">
                Use Optimistic
            </h1>

            <Counter likes={likes} />
        </div>
    )
};

export default Optimistic;