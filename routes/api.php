<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
  
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', [AuthController::class, 'logout']);
        // Route::get('/user', [UserController::class, 'index']);
        // Route::put('/user/{id}', [UserController::class, 'update']);
        // Route::delete('/user/{id}', [UserController::class, 'destroy']);
    });
});

Route::get('/auth/user', [UserController::class, 'index']);
Route::post('/auth/user', [UserController::class, 'store']);
Route::put('/auth/user/{id}', [UserController::class, 'update']);
Route::delete('/auth/user/{id}', [UserController::class, 'destroy']);

Route::get('/items', [ItemsController::class, 'index']);
Route::post('/item', [ItemsController::class, 'store']);
Route::put('/item/{id}', [ItemsController::class, 'update']);
Route::delete('/item/{id}', [ItemsController::class, 'destroy']);