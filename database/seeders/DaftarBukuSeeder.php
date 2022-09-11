<?php

namespace Database\Seeders;

use App\Models\DaftarBuku;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DaftarBukuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 20; $i++) {
            DB::table('daftar_bukus')->insert([
                'judul_buku' => fake()->title(),
                'deskripsi' => fake()->paragraph(2, true),
                'kategori' => fake()->sentence(),
                'penulis' => fake()->sentence(),
            ]);
        }
    }
}
