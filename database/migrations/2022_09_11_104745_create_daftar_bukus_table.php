<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('daftar_bukus', function (Blueprint $table) {
            $table->id();
            $table->string('judul_buku');
            $table->string('deskripsi');
            $table->string('kategori');
            $table->string('penulis');
            $table->string('pembuat');
            $table->string('image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('daftar_bukus');
    }
};
