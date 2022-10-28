<?php

use App\Http\Controllers\QuizController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->get('/question', [UserController::class, 'allQuestion']);

Route::middleware('auth:sanctum')->post('/question', [UserController::class, 'addQuestion']);

Route::middleware('auth:sanctum')->get('/question/{id}', [UserController::class, 'showQuestion']);

Route::middleware('auth:sanctum')->post('/logout', [UserController::class, 'logout']);

Route::middleware('auth:sanctum')->get('/islogin', [UserController::class, 'isLogin']);




/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/