import React from "react";
import { Link } from "@inertiajs/inertia-react";

const isDaftarBuku = (data) => {
    return data.map((datas, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-white shadow-xl">
                <figure>
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {datas.judul_buku}
                        <Link
                            href={route("detail")}
                            method="get"
                            className="badge badge-secondary"
                            as="button"
                            data={{
                                id: datas.id,
                            }}
                        >
                            Detail
                        </Link>
                    </h2>
                    <p>{datas.deskripsi}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {datas.kategori}
                        </div>
                        <div className="badge badge-outline">
                            {datas.penulis}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noDaftarBuku = () => {
    return <div>Saat ini belum ada data buku tersedia</div>;
};

const ListDaftarBuku = ({ data }) => {
    return !data ? noDaftarBuku() : isDaftarBuku(data);
};

export default ListDaftarBuku;
