<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',     
        ]);

        if($validator->fails()){
            return response()->json([
                'errors' => $validator->messages(),
            ]);
        }

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
     
        $token = $user->createToken($request->email)->plainTextToken;

        return response()->json([
            'token' => $token,
            'user_id' => $user->id,
        ]);
    }
    
    public function deleteCookie(Request $request){
        
        return response()->json([
            'message' => 'Cookie berhasil dihapus',
            'session' => 'success',
            'cookie' => $request->cookie('token'),
        ])
            ->withCookie(Cookie::forget('token'))
            ->withCookie(Cookie::forget('user_id'));
    }

    public function logout(Request $request){
        $user = Auth::user();
        if(!empty($user)){
            $user->tokens()->delete();
        }
        Auth::logout();
        
        return response([
            'message' => 'Logout berhasil',
            'session' => 'success'
        ])
            ->withCookie(Cookie::forget('token'))
            ->withCookie(Cookie::forget('user_id'));
    }
}
