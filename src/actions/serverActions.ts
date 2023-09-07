"use server";
import { Product } from "../../Types";
import { revalidateTag } from "next/cache";

export const addProduct = async (e: FormData) => {

    const product = e.get("product")?.toString();

    const price = e.get("price")?.toString();

    if (!product || !price) return;

    const newProduct: Product = {
        product,
        price
    };

    await fetch("https://64f9ee044098a7f2fc15315f.mockapi.io/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
            "Content-Type": "application/json"
        }
    });

    revalidateTag("products");

};