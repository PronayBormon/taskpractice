import { Head, Link, useForm } from "@inertiajs/react";

export default function create() {

        const {
        data,
        setData,
        processing,
        post,
        errors,
    } = useForm({
        name: '',
        email: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/users/store');
    }


    return (
        <>
            <Head title="Create User" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex h-full h-[80px] items-center justify-between flex-row gap-4 overflow-x-auto rounded-xl p-4">
                    <div>
                        <h1 className="text-2xl font-bold">Create User</h1>
                        <p className="mt-4 text-lg">This is the create user page.</p>
                    </div>
                        <Link  onClick={() => {history.back()}} className="rounded text-center w-[100px] bg-blue-600 px-4 py-2 text-white">Back</Link>
                </div>

                <div className="card bg-white p-4 shadow dark:bg-gray-800 sm:p-6 lg:p-8 rounded-lg">
                    <form onSubmit={submit} className="space-y-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            onChange={(e) => setData('name', e.target.value)}
                            id="name" type="text" placeholder="Name" />
                                                                {errors.name && (
                                        <div className="text-danger mt-1">
                                            {
                                                errors.name
                                            }
                                        </div>
                                    )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            onChange={(e) => setData('email', e.target.value)}
                            id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Create User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}