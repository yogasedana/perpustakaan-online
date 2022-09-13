<?php

use App\Http\Controllers\DaftarBukuController;
use App\Http\Controllers\HalamanDashboardAdminConttroler;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DaftarBukuController::class, 'index']);

Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {
    // Route::get('/dashboard', [HalamanDashboardAdminConttroler::class, 'index']);
    // Route::get('/dashboard', function () {
        //     return Inertia::render('Dashboard');
        // });
    });
    
    Route::get('/homepage', [DaftarBukuController::class, 'index'])->middleware(['auth', 'verified'])->name('homepage');
    Route::get('/dashboard', [DaftarBukuController::class, 'show'])->middleware(['auth', 'verified'])->name('dashboard');
    Route::get('/simpanbuku/create', [DaftarBukuController::class, 'create'])->middleware(['auth', 'verified'])->name('create.buku');
    Route::post('/simpanbuku', [DaftarBukuController::class, 'store'])->middleware(['auth', 'verified'])->name('show.simpanbuku');
    Route::get('/simpanbuku/edit', [DaftarBukuController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.buku');
    Route::post('/simpanbuku/update', [DaftarBukuController::class, 'update'])->middleware(['auth', 'verified'])->name('update.buku');
    Route::post('/simpanbuku/delete', [DaftarBukuController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.buku');
    Route::get('/detail', [DaftarBukuController::class, 'detail'])->middleware(['auth', 'verified'])->name('detail');
// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';
