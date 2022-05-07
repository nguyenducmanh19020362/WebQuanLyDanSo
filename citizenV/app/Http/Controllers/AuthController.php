<?php

namespace App\Http\Controllers;

use App\Models\AreaCode;
use App\Models\User;
use App\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    // Tạo tài khoản cho cấp dưới
    public function register(Request $request) {
        $rule = [
            'username' => 'required|unique:users',
            'password' => 'required|confirmed',
            'Tenkhuvuc' => 'required'
        ];
        $messages = [
            'username.required' => 'Tên tài khoản là trường bắt buộc',
            'username.unique' => 'Tài khoản này đã được tạo',
            'password.required' => 'Mật khẩu là trường bắt buộc',
            'password.confirmed' => 'Mật khẩu nhập lại không khớp',
            'Tenkhuvuc.required' => 'Tên khu vực là trường bắt buộc'
        ];
        $fields = Validator::make($request->all(), $rule, $messages);
        if ($fields->fails()) {
            return response()->json($fields->errors(), 404);
        } else {
            $size = strlen(auth()->user()->username);
            $str = substr((auth()->user()->username), 0, $size);
            if ((strlen($request->username) != ($size + 2)) && ($request->username != $str) && (auth()->user()->username != 'admin')) {
                return response()->json(['message' => 'Mã đăng nhập không đúng định dạng']);
            };
            AreaCode::create([
                'Tenkhuvuc' => $request->Tenkhuvuc,
                'Ma' =>  $request->username
            ]);
            $len = strlen($request->username);
            Permission::create([
                'username' => $request->username,
                'allowed' => 0,
                'status' => 0,
                'role' => $len,               
            ]);
            $user = User::create([
                'username' => $request->username,
                'password' => bcrypt($request->password),
            ]);
    
            // $token = $user->createToken('laravelapi')->plainTextToken;
    
            $response = [
                'status' => 'OK',
                'data' => 1,
            ];
    
            return response($response, 200);
        }
    }

    // Đăng nhập
    public function login(Request $request) {
        $data = [
            'username' => $request->tsd,
            'password' => $request->mk
        ];
        if (!auth()->attempt($data)) {
            return response()->json(['message' => 'Tài khoản hoặc mật khẩu không đúng'], 401);
        } 
        
        else {
            $user = User::where('username', $data['username'])->firstOrFail();
            $token = $user->createToken('laravelapi')->plainTextToken;
            return response()->json(['status' => 'OK', 'data' => 1, 'token' => $token], 200);
        }
        
    }
    
    // Đăng xuất
    public function logout(Request $request) {
        $request->user()->tokens()->delete();

        return  [
            'status' => "OK",
            'data' => 1
        ];
    }
}
