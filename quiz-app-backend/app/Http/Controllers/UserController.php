<?php

namespace App\Http\Controllers;

use App\Models\Answers;
use App\Models\Questions;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use function PHPUnit\Framework\isEmpty;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $user = Auth::attempt($data);

        if (!$user) {
            return response([
                'message' => 'Invalid Authentication',
                'status' => false,
            ], 401);
        } else {
            $user = User::where('email', $data['email'])->first();
            $token = $user->createToken('personalToken')->plainTextToken;

            return response([
                'user' => ['id' => $user->id, 'email' => $user->email],
                'status' => true,
                'token' => $token
            ], 200);
        }
    }

    public function addQuestion(Request $request)
    {
        $data = $request->validate([
            'question' => 'required|string',
            'option1' => 'required|string',
            'option2' => 'required|string',
            'option3' => 'required|string',
            'option4' => 'required|string'
        ]);

        $q_id = Questions::factory()->create([
            'question' => $data['question']
        ]);

        Answers::factory()->create([
            'question_id' => $q_id,
            'answer' => $data['option1'],
            'option' => true
        ]);

        Answers::factory()->create([
            'question_id' => $q_id,
            'answer' => $data['option2']
        ]);

        Answers::factory()->create([
            'question_id' => $q_id,
            'answer' => $data['option3']
        ]);

        Answers::factory()->create([
            'question_id' => $q_id,
            'answer' => $data['option4']
        ]);

        return response([
            'message' => 'Question added.'
        ], 201);
    }

    public function allQuestion()
    {
        $data = Questions::all();

        return response([
            'question' => $data
        ], 200);
    }

    public function showQuestion($id)
    {
        $question = Questions::find($id);

        if (!$question) {
            return response([
                'message' => 'No question found.'
            ], 200);
        }

        $question->answers;

        return response([
            'question' => $question
        ], 200);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response([
            'message' => 'Logout successfull.'
        ], 200);
    }
}
