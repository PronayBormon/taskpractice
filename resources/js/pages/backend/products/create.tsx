import { Head, useForm } from "@inertiajs/react";

interface ProductSize {
    size: string;
    quantity: string;
}

interface ProductForm {
    name: string;
    price: string;
    sizes: ProductSize[];
}

export default function ProductCreate() {
    const { data, setData, post, errors, processing } =
        useForm<ProductForm>({
            name: "",
            price: "",
            sizes: [
                {
                    size: "",
                    quantity: "",
                },
            ],
        });

    const addSize = () => {
        setData("sizes", [
            ...data.sizes,
            {
                size: "",
                quantity: "",
            },
        ]);
    };

    const removeSize = (index: number) => {
        setData(
            "sizes",
            data.sizes.filter((_, i) => i !== index)
        );
    };

    const updateSize = (
        index: number,
        field: keyof ProductSize,
        value: string
    ) => {
        const sizes = [...data.sizes];

        sizes[index] = {
            ...sizes[index],
            [field]: value,
        };

        setData("sizes", sizes);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post("/admin/products/store");
    };

    return (
        <>
            <Head title="Create Product" />

            <div className="flex flex-1 flex-col gap-4 p-4">

                {/* Header */}
                <div className="flex min-h-[80px] items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Create Product
                        </h1>

                        <p className="mt-1 text-gray-500">
                            Create a new product.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
                    >
                        Back
                    </button>
                </div>

                {/* Form */}
                <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">

                    <form
                        onSubmit={submit}
                        className="space-y-6"
                    >

                        {/* Product Name */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Product Name
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Enter product name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2"
                            />

                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Price */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold">
                                Price
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                                placeholder="Enter price"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2"
                            />

                            {errors.price && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.price}
                                </p>
                            )}
                        </div>

                        {/* Sizes */}
                        <div>
                            <div className="mb-3 flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Product Sizes
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        Add sizes and their available stock.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={addSize}
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                                >
                                    + Add Size
                                </button>
                            </div>

                            {/* Size rows */}
                            <div className="space-y-3">

                                {data.sizes.map((item, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-1 gap-3 rounded-lg border border-gray-200 p-4 sm:grid-cols-[1fr_1fr_auto]"
                                    >

                                        {/* Size */}
                                        <div>
                                            <label className="mb-1 block text-sm font-medium text-gray-600">
                                                Size
                                            </label>

                                            <input
                                                type="text"
                                                value={item.size}
                                                onChange={(e) =>
                                                    updateSize(
                                                        index,
                                                        "size",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="e.g. S, M, L, XL"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-2"
                                            />

                                            {errors[
                                                `sizes.${index}.size`
                                            ] && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {
                                                        errors[
                                                            `sizes.${index}.size`
                                                        ]
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        {/* Quantity */}
                                        <div>
                                            <label className="mb-1 block text-sm font-medium text-gray-600">
                                                Quantity
                                            </label>

                                            <input
                                                type="number"
                                                min="0"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    updateSize(
                                                        index,
                                                        "quantity",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="e.g. 20"
                                                className="w-full rounded-lg border border-gray-300 px-4 py-2"
                                            />

                                            {errors[
                                                `sizes.${index}.quantity`
                                            ] && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {
                                                        errors[
                                                            `sizes.${index}.quantity`
                                                        ]
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        {/* Remove */}
                                        <div className="flex items-end">
                                            {data.sizes.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeSize(index)
                                                    }
                                                    className="w-full rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-200 sm:w-auto"
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>

                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* Submit */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                            >
                                {processing
                                    ? "Creating..."
                                    : "Create Product"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}