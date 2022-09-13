import React from "react";
import Navbar from "@/Components/Navbar";

export default function DetailBuku(props) {
    console.log("props :", props);
    return (
        <div className="min-h-screen bg-slate-50">
            {/* <Head title={props.title} /> */}
            <Navbar user={props.auth.user} />
            <div className="card w-full bg-white shadow-xl m-2">
                <div className="p-4 text-2xl">Detail Data Buku</div>
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.daftarBukuSaya.judul_buku}
                    </h2>
                    <p>{props.daftarBukuSaya.deskripsi}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {props.daftarBukuSaya.kategori}
                        </div>
                        <div className="badge badge-outline">
                            {props.daftarBukuSaya.penulis}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
