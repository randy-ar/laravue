<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::view('/{any}', 'index')->where('any', '.*');