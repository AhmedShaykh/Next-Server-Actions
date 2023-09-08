import GetProducts from "@/Components/GetProducts";
import { addProduct } from "@/actions/serverActions";
import { Product } from "../../Types";
import AddProductButton from "@/Components/AddProductButton";
import Link from "next/link";

const Home = async () => {

    const res = await fetch("https://64f9ee044098a7f2fc15315f.mockapi.io/products", {
        cache: "no-store",
        next: {
            tags: ["products"]
        }
    });

    const products: Product[] = await res.json();

    return (
        <div className="my-2">
            <h1 className="text-4xl font-bold text-center py-3">
                Product Warehouse
            </h1>

            <form
                className="flex flex-col max-w-2xl mx-auto mt-6 gap-6"
                action={addProduct}
            >
                <input
                    className="text-black font-semibold border border-gray-300 p-2 rounded-md"
                    placeholder="Enter Product Name"
                    name="product"
                    type="text"
                />

                <input
                    className="text-black font-semibold border border-gray-300 p-2 rounded-md"
                    placeholder="Enter Product Price"
                    name="price"
                    type="text"
                />

                <button
                    className="bg-blue-600 text-white hover:bg-white hover:text-black font-bold px-4 py-3 cursor-pointer rounded-md"
                >
                    Add Product
                </button>
            </form>

            <div className="flex justify-center mt-10">
                <AddProductButton />
            </div>

            <Link href="/optimistic">
                <h3 className="text-xl text-center text-blue-600 hover:text-white mt-6">
                    Go To Use Optimistic
                </h3>
            </Link>

            <h2 className="text-4xl font-bold text-center py-4 mt-12">
                List Of Products:
            </h2>

            <div className="flex flex-wrap gap-6 my-8">
                {products.map((product) => (
                    <GetProducts product={product} />
                ))}
            </div>
        </div>
    )
};

export default Home;