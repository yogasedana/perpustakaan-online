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
        DaftarBuku::factory()->count(50)->create();
    }
}
