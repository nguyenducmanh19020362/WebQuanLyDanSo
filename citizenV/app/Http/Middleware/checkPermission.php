<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Permission;

class checkPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (auth()->user()->username == 'admin') return $next($request);
        $permission = Permission::find(auth()->user()->username);
        if ($permission->allowed == 0) return response()->json(['status' => "OK", 'data' => 2]);
        else if ($permission->start > date("d-m-Y"))  return response()->json(['status' => "OK", 'data' => 2]);
        else if ($permission->end < date("d-m-Y")) {
            return response()->json(['status' => "KO", 'data' => 2]);
        }
        else return $next($request);
    }
}
