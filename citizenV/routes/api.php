<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ManageController;
use App\Http\Controllers\personalInfoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Đăng nhập
Route::post('/login', [AuthController::class, 'login']);

// Route::post('/register', [AuthController::class, 'register']);

Route::group(['middleware' => ['auth:sanctum']], function() {
    //Tạo tài khoản mới cho cấp dưới
    Route::post('/register', [AuthController::class, 'register']);

    //Cấp quyền khai báo
    Route::post('/capquyen', [ManageController::class, 'capQuyen']);

    // KHóa quyền
    Route::post('/khoaquyen', [ManageController::class, 'khoaquyen']);

    //Hiện thị danh sách thông tin
    Route::get('/personalInfo', [personalInfoController::class, 'index']); 

    // Nhập dữ liệu thông tin dân cư
    Route::post('/khaibao', [personalInfoController::class, 'store'])->middleware('checkPermission');

    // Cập nhật dữ liệu thông tin dân cư
    Route::patch('/personalInfo/{id}', [personalInfoController::class, 'update'])->middleware('checkPermission');

    // Xóa thông tin
    Route::delete('/personalInfo/{id}', [personalInfoController::class, 'destroy'])->middleware('checkPermission');

    // Tìm kiếm theo khu vực
    Route::post('/getInformations', [personalInfoController::class, 'getInformations']);

    // Kiểm tra tiến độ của cấp dưới
    Route::get('/kiemtratiendo', [ManageController::class, 'showFinished']);

    // Báo cáo hoàn thành thu thập thông tin dân cư
    Route::post('/hoanthanh', [ManageController::class, 'finished']);

    // Đăng xuất
    Route::post('/logout', [AuthController::class, 'logout']);
});

