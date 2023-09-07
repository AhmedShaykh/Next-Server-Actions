"use client";
import React, { useTransition } from "react";
import { addProduct } from "@/actions/serverActions";

const AddProductButton = () => {

    const [isPending, startTransition] = useTransition();

    const formData = new FormData();

    formData.append("product", "MacBook Pro");

    formData.append("price", "2500");

    return (
        <button
            className="bg-green-600 text-white hover:bg-black font-bold px-4 py-3 cursor-pointer rounded-md"
            onClick={() => startTransition(() => addProduct(formData))}
        >
            {isPending ? "Adding..." : "Add Products"}
        </button>
    )
};

export default AddProductButton;