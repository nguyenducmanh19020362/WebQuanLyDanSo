<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permission;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ManageController extends Controller
{
    // Cấp quyền khai báo cho cấp dưới
    public function capQuyen(Request $request) {
        $size = strlen(auth()->user()->username);
        $str = substr((auth()->user()->username), 0, $size);
        if ((strlen($request->username) != ($size+2)) && ($request->username != $str) && (auth()->user()->username != 'admin')) {
            return response()->json(['message' => 'Không được cấp quyền cho tài khoản này']);
        }
        $rules = [
            'username' => 'required',
            'start' => 'required|date_format:d-m-Y',
            'end' => 'required|date_format:d-m-Y'
        ];
        $messages = [
            'username.required' => 'Tên tài khoản là trường bắt buộc',
            'start.required' => 'Vui lòng nhập thời điểm khai báo',
            'start.date_format' => 'Ngày bắt đầu khai báo không đúng định dạng',
            'end.required' => 'Vui lòng nhập ngày kết thúc khai báo',
            'end.date_format' => 'Ngày kết thúc không đúng định dạng'
        ];
        $validator = Validator::make($request->all(), $rules, $messages);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 404);
        } else {
            $permission = Permission::find($request->username);
            if ($permission) {
                $permission->allowed = 1;
                $permission->start = $request->start;
                $permission->end = $request->end;
                $permission->update();
                return response()->json(['status' => 'OK', 'data' => 1]);
            }
        }       
    }

    // Khóa quyền khai báo của cấp dưới
    public function khoaquyen(Request $request) {
        if (auth()->user()->username == 'admin') {
            $name = $request->username;
            DB::table('permissions')->where('username','LIKE', $name.'%')->update(['allowed' => 0]);
        } else {
            $size = strlen(auth()->user()->username);
            $str = substr((auth()->user()->username), 0, $size);
            if ((strlen($request->username) != ($size+2)) && ($request->username != $str)) {
                return response()->json(['message' => 'Không được khóa quyền tài khoản này']);
            }
        }
        return response()->json(['status' => 'OK', 'data' => 1]);
    }

    // Báo cáo hoàn thành thu thập dữ liệu
    public function finished() {
        $permission = Permission::find(auth()->user()->username);
        $permission->status = '1';
        $permission->update();
        return response()->json(['status' => 'OK', 'data' => 1]);
    }

    // Xem tiến độ thu thập dữ liệu
    public function showFinished() {
        $name = auth()->user()->username;
        $role = strlen($name) + 2;
        if ($name == 'admin') {
            $role = '2';
            $permission = DB::table('permissions')->join('area_codes', 'permissions.username', '=', 'area_codes.Ma')
            ->where('permissions.role', $role)
            ->select('permissions.status', 'area_codes.Tenkhuvuc', 'permissions.role', 'permissions.start', 'permissions.end')
            ->get();
        } else {
            $role = strlen($name) + 2;
            $permission = DB::table('permissions')->join('area_codes', 'permissions.username', '=', 'area_codes.Ma')
            ->where('permissions.username', 'LIKE', $name.'%')->where('permissions.role', $role)
            ->select('permissions.status', 'area_codes.Tenkhuvuc', 'permissions.role', 'permissions.start', 'permissions.end')
            ->get();
        }
        return response($permission);
    }

    public function getList() {
        $name = auth()->user()->username;
        $list = DB::table('permissions')->join('area_codes', 'permissions.username', '=', 'area_codes.Ma')
        ->where('permissions.username', 'LIKE', $name.'%')
        ->select('area_codes.Tenkhuvuc', 'permissions.role')
        ->get();
        return($list);
    }

}
