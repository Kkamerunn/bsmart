<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validate data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        // If validation fails return errors
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
              
        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'token' => $user->createToken('token')->plainTextToken
        ];

        // Return a response
        return response()->json($data);
    }

    public function login(Request $request)
    {
        $errors = [];

        // validate fields
        if (!isset($request->email) || !isset($request->password)) {
            $errors[] = "All fields are required"; 
        }

        if (!empty($errors)) {
            return response()->json(['errors' => $errors], 400);
        }

        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];

        // Check if the password is correct
        if (!Auth::attempt($data)) {
            return response([
                'errors' => ['The email or password is incorrect']
            ], 422);
        }

        // Authenticate the user
        $user = Auth::user();
        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'token' => $user->createToken('token')->plainTextToken
        ];

        return response()->json($data);
    }

    public function logout(Request $request)
    {
        // Request the authenticated user
        $user = $request->user();
        // Delete its authentication token
        $user->currentAccessToken()->delete();

        return [
            'user' => null
        ];
    }
}
