import React, { useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function EditDaftarBuku(props) {
    const [judul_buku, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [kategori, setKategori] = useState("");
    const [penulis, setPenulis] = useState("");

    console.log(props);
    const handleSubmit = () => {
        const getData = {
            id: props.daftarBukuSaya.id,
            judul_buku,
            deskripsi,
            kategori,
            penulis,
        };
        Inertia.post("/simpanbuku/update", getData);
        setJudul("");
        setDeskripsi("");
        setKategori("");
        setPenulis("");
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="card w-full bg-white shadow-xl m-2">
                <div className="p-4 text-2xl">Edit Data Buku</div>
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Judul"
                        className="m-2 input input-bordered w-full bg-white shadow-sm"
                        onChange={(judul_buku) =>
                            setJudul(judul_buku.target.value)
                        }
                        defaultValue={props.daftarBukuSaya.judul_buku}
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="m-2 input input-bordered w-full bg-white shadow-sm"
                        onChange={(deskripsi) =>
                            setDeskripsi(deskripsi.target.value)
                        }
                        defaultValue={props.daftarBukuSaya.deskripsi}
                    />
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="m-2 input input-bordered w-full bg-white shadow-sm"
                        onChange={(kategori) =>
                            setKategori(kategori.target.value)
                        }
                        defaultValue={props.daftarBukuSaya.kategori}
                    />
                    <input
                        type="text"
                        placeholder="Penulis"
                        className="m-2 input input-bordered w-full bg-white shadow-sm"
                        onChange={(penulis) => setPenulis(penulis.target.value)}
                        defaultValue={props.daftarBukuSaya.penulis}
                    />
                    <button
                        className="m-2 btn btn-primary"
                        onClick={() => handleSubmit()}
                    >
                        Ubah
                    </button>
                </div>
            </div>
        </div>
    );
}
