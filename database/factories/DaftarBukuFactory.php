<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DaftarBuku>
 */
class DaftarBukuFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'judul_buku' => fake()->sentence(),
            'deskripsi' => fake()->paragraph(2, true),
            'kategori' => fake()->sentence(),
            'penulis' => fake()->name(),
        ];
    }
}
