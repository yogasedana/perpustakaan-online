import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
// import { useState } from "react/cjs/react.production.min";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    console.log(props);
    console.log(props.auth.user.role);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Daftar Buku
                </h2>
            }
        >
            <Head title="Dashboard" />

            {props.auth.user && props.auth.user.role == "admin" ? (
                <div className="py-6">
                    <div className="p-4">
                        <div className="card w-full  shadow-xl m-2">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <div className="btn btn-active btn-primary">
                                    <Link
                                        href={route("create.buku")}
                                        method="get"
                                        as="button"
                                    >
                                        Tambah Buku Baru
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        {props.daftarBukuSaya &&
                        props.daftarBukuSaya.length > 0 ? (
                            props.daftarBukuSaya.map((datas, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="card w-full bg-white shadow-xl m-2"
                                    >
                                        <figure>
                                            <img
                                                src="https://placeimg.com/400/225/arch"
                                                alt="Shoes"
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {datas.judul_buku}
                                                <div className="badge badge-secondary">
                                                    NEW
                                                </div>
                                            </h2>
                                            <p>{datas.deskripsi}</p>
                                            <div className="card-actions justify-end">
                                                <div className="badge badge-inline">
                                                    {datas.kategori}
                                                </div>
                                                <div className="badge badge-outline">
                                                    {datas.penulis}
                                                </div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        href={route(
                                                            "edit.buku"
                                                        )}
                                                        method="get"
                                                        as="button"
                                                        data={{
                                                            id: datas.id,
                                                        }}
                                                    >
                                                        Edit
                                                    </Link>
                                                </div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        href={route(
                                                            "delete.buku"
                                                        )}
                                                        method="post"
                                                        as="button"
                                                        data={{
                                                            id: datas.id,
                                                        }}
                                                    >
                                                        Hapus
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="alert alert-error shadow-lg">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>Anda belum memiliki berita</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="py-6">
                    <div className="p-4">
                        <div className="card w-full  shadow-xl m-2">
                            <div className="p-6 bg-white border-b border-gray-200">
                                <div className="btn btn-active btn-primary">
                                    <Link
                                        href={route("homepage")}
                                        method="get"
                                        as="button"
                                    >
                                        Menuju Halaman Berita
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
