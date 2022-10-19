<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', function (Request $request) {


    $user = $request->validate([
        'email' => ['required', 'email'],
        'password' => 'required'
    ]);

    return $user;
});


/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/