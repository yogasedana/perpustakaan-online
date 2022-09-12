<?php

namespace App\Http\Controllers;

use App\Http\Resources\DaftarBukuCollection;
use App\Models\DaftarBuku;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DaftarBukuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $DaftarBuku = new DaftarBukuCollection(DaftarBuku::paginate(8));
        return inertia::render('Homepage', [
            'title' => 'Perpustakaan Online',
            'desc'  => 'Selamat datang',
            'daftarBuku'  => $DaftarBuku,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DaftarBuku  $daftarBuku
     * @return \Illuminate\Http\Response
     */
    public function show(DaftarBuku $daftarBuku)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DaftarBuku  $daftarBuku
     * @return \Illuminate\Http\Response
     */
    public function edit(DaftarBuku $daftarBuku)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DaftarBuku  $daftarBuku
     * @return \Illuminate\Http\Response
     */
    public function destroy(DaftarBuku $daftarBuku)
    {
        //
    }
}
