import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import ListDaftarBuku from "@/Components/Homepage/ListDaftarBuku";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar />
            <div className="flex justify-center flrx-col lg:flex-row flex-wrap lg:items-stretch items-center gap-4 p-4">
                <ListDaftarBuku data={props.daftarBuku.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.daftarBuku.meta} />
            </div>
        </div>
    );
}
