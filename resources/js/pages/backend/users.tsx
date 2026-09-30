import { Head, Link } from "@inertiajs/react";

export default function Users() {
    return (
        <>
            <Head title="Users" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                    <div>
                        <h1 className="text-2xl font-bold">Users Page</h1>
                        <p className="mt-4 text-lg">This is the users page.</p>
                    </div>
                    <div className="">
                        <Link  href="/admin/users/create" className="rounded bg-blue-600 px-4 py-2 text-white">Create User</Link>
                    </div>
                </div>
            </div>
        </>
    );
}