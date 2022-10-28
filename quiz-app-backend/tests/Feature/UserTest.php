<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;
    public function test_user_login()
    {
        $user = User::factory()->create();
        $userData = [
            'email' => $user->email,
            'password' => '123123123'
        ];
        $res = $this->post('/api/login', $userData);
        $res->assertStatus(200);
    }

    public function test_wrong_user_login()
    {
        $user = User::factory()->create();
        $userData = [
            'email' => $user->email,
            'password' => 'wrong-password'
        ];

        $res = $this->post('/api/login', $userData);
        $res->assertStatus(401);
    }

    public function test_add_question()
    {
        $this->test_user_login();

        $question = [
            'question' => 'this is question',
            'option1' => 'opt 1',
            'option2' => 'opt 2',
            'option3' => 'opt 3',
            'option4' => 'opt 4',
        ];

        $res = $this->post('/api/question', $question);

        $res->assertStatus(201);
    }

    public function test_get_all_questions()
    {
        $this->test_user_login();

        $res = $this->get('/api/question');

        $res->assertStatus(200);
    }

    public function test_get_question_by_id()
    {
        $this->test_add_question();

        $res = $this->get('/api/question/1');

        $res->assertStatus(200);
    }

    public function test_get_question_by_wrong_id()
    {
        $this->test_user_login();

        $res = $this->get('/api/question/1');

        $res->assertStatus(200);
    }

    public function test_user_logout()
    {
        $this->test_user_login();

        $res = $this->post('/api/logout');

        $res->assertStatus(200);
    }

    public function test_is_user_login()
    {
        $this->test_user_login();

        $res = $this->get('/api/islogin');

        $res->assertStatus(200);
    }
}
