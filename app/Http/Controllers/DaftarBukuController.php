<?php

namespace App\Http\Controllers;

use App\Http\Resources\DaftarBukuCollection;
use App\Models\DaftarBuku;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class DaftarBukuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
        public function index()
        {
            $daftarBuku = new DaftarBukuCollection(DaftarBuku::OrderByDesc('id')->paginate(8));
            return inertia::render('Homepage', [
                'title' => 'Perpustakaan Online',
                'desc'  => 'Selamat datang',
                'daftarBuku'  => $daftarBuku,
            ]);
        }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(DaftarBuku $daftarBuku, Request $request)
    {
        $tampilBuku = $daftarBuku::where('pembuat', auth()->user()->role)->get();
        return inertia::render('TambahDaftarBuku', [
            'title' => 'Tambah Buku',
            'daftarBukuSaya'  => $tampilBuku,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $this->validate($request, [
        //     'image' => 'required|image|mimes:jpeg,png,jpg,svg',
        // ]);

        $fileImage = $request->file('image');
    
        $folder = '/images';

        // $itemGambar = $this->upload($fileImage, $folder);

        $simpanBuku = new DaftarBuku;
        $simpanBuku->judul_buku = $request->judul_buku;
        $simpanBuku->deskripsi = $request->deskripsi;
        $simpanBuku->kategori = $request->kategori;
        $simpanBuku->penulis = $request->penulis;
        $simpanBuku->pembuat = auth()->user()->role;
        // $simpanBuku->image = $fileImage->all();
        $simpanBuku->image = "";
        $simpanBuku->save();
        return redirect()->back()->with('message', 'Buku berhasil disimpan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DaftarBuku  $daftarBuku
     * @return \Illuminate\Http\Response
     */
    public function show(DaftarBuku $daftarBuku)
    {
        $tampilBuku = $daftarBuku::where('pembuat', auth()->user()->role)->get();
        return inertia::render('Dashboard', [
            'daftarBukuSaya'  => $tampilBuku,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DaftarBuku  $daftarBuku
     * @return \Illuminate\Http\Response
     */
    public function edit(DaftarBuku $daftarBuku, Request $request)
    {
        return Inertia::render('EditDaftarBuku', [
            'daftarBukuSaya' => $daftarBuku->find($request->id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DaftarBuku  $daftarBuku
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DaftarBuku $daftarBuku)
    {
        DaftarBuku::where('id', $request->id)->update([
            'Judul_buku' => $request->judul_buku,
            'deskripsi' => $request->deskripsi,
            'kategori' => $request->kategori,
            'penulis' => $request->penulis,
        ]);
        return to_route('dashboard')->with('message', 'Data buku berhasil diperbaharui!!!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DaftarBuku  $daftarBuku
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data = DaftarBuku::find($request->id);
        $data->delete();
        return redirect()->back()->with('message', 'Buku berhasil dihapus');
    }

    public function upload($fileImage, $folder)
    {
        // $path = $fileImage->store($folder);
        // $inputGambar['url'] = $path;
        // return DaftarBuku::create($fileImage);
    }
}
