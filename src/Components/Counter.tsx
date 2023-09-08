"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { adjustLikes } from "@/actions/adjustLikes";

type Prop = {
    likes: number;
};

const Counter = ({ likes }: Prop) => {

    const [optimisticLikes, addOptimisticLikes] = useOptimistic(
        likes,
        (state, amount) => state + Number(amount)
    );

    const updateLikes = async (amount: number) => {

        addOptimisticLikes(amount);

        await adjustLikes(amount);
    };

    return (
        <div className="flex justify-center items-center space-x-10 p-5 mb-4">
            <h2 className="my-2 text-2xl text-center">
                Optimistic Counter
            </h2>

            <button
                onClick={() => updateLikes(1)}
                className="text-xl"
            >
                +
            </button>

            <p className="text-xl">{optimisticLikes}</p>

            <button
                onClick={() => updateLikes(-1)}
                className="text-xl"
            >
                -
            </button>
        </div>
    )
};

export default Counter;