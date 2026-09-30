interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface Props {
    products: Product[];
}

const addToCart = (productId: number, quantity: number) => {
    // Implement the logic to add the product to the cart
    console.log(`Product with ID ${productId} added to cart.`);
}

export default function Products({ products }: Props) {
    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Products
                </h1>
                <p className="mt-1 text-gray-500">
                    Browse all products.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                        {/* Image */}
                        <div className="flex h-48 items-center justify-center bg-gray-100">
                            <span className="text-5xl">📦</span>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h2 className="truncate text-base font-semibold text-gray-900">
                                {product.name}
                            </h2>

                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-lg font-bold text-blue-600">
                                    ${product.price}
                                </span>

                                <span className="text-sm text-gray-500">
                                    Qty: {product.quantity}
                                </span>
                            </div>

                            <button
                                type="button"
                                className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                                onClick={() => addToCart(product.id, 1)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}