<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PersonalInfomation;
use Illuminate\Support\Facades\DB;

class personalInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // Hiện thị danh sách dân cư
    public function index()
    {
        $name = auth()->user()->username;
        if ($name == 'admin') {
            $users = DB::table('personal_infomations')->get();
        }
        $users = DB::table('personal_infomations')->where('Ma', 'LIKE', $name.'%')->get();
        return response($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    //  Lưu thông tin dân cư
    public function store(Request $request)
    {
        $data = $request->validate([
                'CCCD' => 'nullable|size:12',
                'Hovaten' => 'required',
                'Ngaysinh' => 'required|date_format:d-m-Y|before:today',
                'Gioitinh' => 'required',
                'Quequan' => 'required',
                'Diachithuongtru' => 'required',
                'Diachitamtru' => 'required',
                'Tongiao' => 'required',
                'Trinhdovanhoa' => 'required',
                'Nghenghiep' => 'required'
            ]);
        $str  = explode('-', $request->Diachithuongtru);
        $name = auth()->user()->username;
        $len = strlen($name); 
        if ($len == 8) {
            $data['Ma'] = $name;
        } else if($len == 6) {
            $area = DB::table('area_codes')->where('Ma', 'LIKE', $name.'%')->where('Tenkhuvuc',$str[0])->first();
            $data['Ma'] = $area->Ma; 
        } else if($len == 4) {
            $area = DB::table('area_codes')->where('Ma', 'LIKE', $name.'%')->where('Tenkhuvuc',$str[1])->first();
            $name = $area->Ma;
            $area = DB::table('area_codes')->where('Ma', 'LIKE', $name.'%')->where('Tenkhuvuc',$str[0])->first();
            $data['Ma'] = $area->Ma;
        } else if($len == 2) {
            $area = DB::table('area_codes')->where('Ma', 'LIKE', $name.'%')->where('Tenkhuvuc',$str[2])->first();
            $name = $area->Ma;
            $area = DB::table('area_codes')->where('Ma', 'LIKE', $name.'%')->where('Tenkhuvuc',$str[1])->first();
            $name = $area->Ma;
            $area = DB::table('area_codes')->where('Ma', 'LIKE', $name.'%')->where('Tenkhuvuc',$str[0])->first();
            $data['Ma'] = $area->Ma;
        }
        $person = PersonalInfomation::create($data);
        return response()->json(['status' => "OK", 'data' => 1]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // Xem chi tiết thông tin của 1 người dân
    public function show($id)
    {
        $person = PersonalInfomation::find($id)->get();
        return response($person);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // Sửa thông tin của người dân
    public function update(Request $request, $id)
    {
        $person = PersonalInfomation::find($id);
        if ($person) {
            $person->update($request->all());
            return response()->json(['status' => 'OK', 'data' => 1]);
        } else return response()->json(['message' => 'Không tìm thấy thông tin']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // Xóa dữ liệu của 1 người dân
    public function destroy($id)
    {
        $person = PersonalInfomation::find($id);
        if ($person) {
            $person->delete();
            return response()->json(['status' => 'OK', 'data' => 1]);
        } else return response()->json(['message' => 'Không tìm thấy thông tin']);
    }

    // lấy dữ liệu của nhóm khu vực
    public function getInformations(Request $request) {
        $name = auth()->user()->username;
        $arr = explode('-', $request->Tenkhuvuc);
        $list = [];
        foreach ($arr as $value) {
            if ($name == 'admin') $area = DB::table('area_codes')->where('Tenkhuvuc',$value)->first();
            else $area = DB::table('area_codes')->where('Ma', 'LIKE', $name.'%')->where('Tenkhuvuc',$value)->first();
            $person = DB::table('personal_infomations')->where('Ma', $area->Ma)->get();
            array_push($list, $person);
        };
        return $list;
    }
}
