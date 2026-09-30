import { Head, Link, useForm } from "@inertiajs/react";
interface Props {
    products: Product[];
}
 
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
 
export default function index({ products }: Props) {
    console.log(products);
    return (
        <>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex content-center w-full justify-between items-center flex-row gap-4 overflow-x-auto rounded-xl p-4">
                    <div>
                        <h1 className="text-2xl font-bold">Products Page</h1>
                        <p className="mt-4 text-lg">This is the products page.</p>
                    </div>
                        <Link  href="/admin/products/create" className="rounded bg-blue-600 px-4 py-2 text-white">Create Product</Link>

                    </div>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Price</th>
                                    <th className="border border-gray-300 px-4 py-2">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                                        <td className="border border-gray-300 px-4 py-2">${product.price}</td>
                                        <td className="border border-gray-300 px-4 py-2">{product.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
        </>
    );
}