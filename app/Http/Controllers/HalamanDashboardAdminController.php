<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HalamanDashboardAdmin extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
    }

    public function index()
    {
        // $daftarBuku = new DaftarBukuCollection(DaftarBuku::OrderByDesc('id')->paginate(8));
        return inertia::render('Dashboard', [
            'title' => 'Perpustakaan Online',
            'desc'  => 'Selamat datang',
            // 'daftarBuku'  => $daftarBuku,
        ]);
    }
}
