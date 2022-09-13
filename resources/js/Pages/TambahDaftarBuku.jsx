import React, { useState, useEffect, useForm } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
// import { useState } from "react/cjs/react.production.min";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [judul_buku, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [kategori, setKategori] = useState("");
    const [penulis, setPenulis] = useState("");
    const [isNotif, setIsNotif] = useState(false);
    const [image, setImage] = useState("");
    // const [image, setImage] = useForm("");

    const handleSubmit = () => {
        const getData = {
            judul_buku,
            deskripsi,
            kategori,
            penulis,
            image,
        };
        Inertia.post("/simpanbuku", getData);
        setIsNotif(true);
        setJudul("");
        setDeskripsi("");
        setKategori("");
        setPenulis("");
        setImage("");
    };

    console.log(setImage);
    useEffect(() => {
        if (!props.daftarBukuSaya) {
            Inertia.get("/simpanbuku");
        }
        // console.log("data ku", props);
        return;
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Input Buku
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        {isNotif ? (
                            <div className="m-2 alert alert-success shadow-lg">
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
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{props.flash.message}</span>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}

                        <input
                            type="text"
                            placeholder="Judul"
                            className="m-2 input input-bordered w-full bg-white shadow-sm"
                            onChange={(judul_buku) =>
                                setJudul(judul_buku.target.value)
                            }
                            value={judul_buku}
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="m-2 input input-bordered w-full bg-white shadow-sm"
                            onChange={(deskripsi) =>
                                setDeskripsi(deskripsi.target.value)
                            }
                            value={deskripsi}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="m-2 input input-bordered w-full bg-white shadow-sm"
                            onChange={(kategori) =>
                                setKategori(kategori.target.value)
                            }
                            value={kategori}
                        />
                        <input
                            type="text"
                            placeholder="Penulis"
                            className="m-2 input input-bordered w-full bg-white shadow-sm"
                            onChange={(penulis) =>
                                setPenulis(penulis.target.value)
                            }
                            value={penulis}
                        />

                        <div className="m-2 flex flex-row">
                            <div className="m-2 shrink-0">
                                <img
                                    className="h-36 w-36 object-cover"
                                    src="/images/default-placeholder.png"
                                    alt="Current profile photo"
                                />
                            </div>
                            <div className="flex flex-wrap justify-center items-center">
                                <label className="block">
                                    <span className="sr-only">
                                        Choose Image
                                    </span>
                                    <input
                                        type="file"
                                        className="
                                block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100
                                "
                                        onChange={(image) =>
                                            setImage(image.target.files)
                                        }
                                        name="image"
                                        id="image"
                                    />
                                </label>
                            </div>
                        </div>

                        <button
                            className="m-2 btn btn-primary"
                            onClick={() => handleSubmit()}
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
