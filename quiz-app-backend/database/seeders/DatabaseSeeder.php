<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Answers;
use App\Models\Questions;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'name' => 'Arsalan Warsi',
            'email' => 'warsi@mail.com'
        ]);

        $q = Questions::factory()->create();

        Answers::factory(4)->create([
            'question_id' => $q
        ]);

        $q = Questions::factory()->create();

        Answers::factory(4)->create([
            'question_id' => $q
        ]);

        $q = Questions::factory()->create();

        Answers::factory(4)->create([
            'question_id' => $q
        ]);

        $q = Questions::factory()->create();

        Answers::factory(4)->create([
            'question_id' => $q
        ]);
    }
}
