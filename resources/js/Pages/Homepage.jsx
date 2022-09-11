import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) { 
    console.log(props);
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-50">
            <Head title={props.title} />
            <div>
                <h1>{props.desc}</h1>
                {props.daftarBuku ? props.daftarBuku.map((data, i) => {
                    return (
                        <div key={i} className='p-4 m-2 bg-white text-black shadow-md rounded-md'>
                            <p className='text-2xl'>{data.judul_buku}</p>
                            <i className='text-sm'>{data.kategori}</i>
                            <p>{data.deskripsi}</p>
                            <i className='text-base'>{data.penulis}</i>
                        </div>
                    );
                }) : <p>Daftra buku tidak ditemukan</p>}
            </div>
        </div>
    )
}