<?php
/**
 * Created by PhpStorm.
 * User: rodrigocatalano
 * Date: 06/09/2019
 * Time: 17:53
 */

use App\User;
use App\Models\Tag;
use App\Models\Post;
use Faker\Generator;
use App\Models\Category;
use Illuminate\Support\Str;


$factory->define(Post::class, function (Generator $faker) {
    return [
        'title'        => $faker->sentence,
        'body'         => $faker->paragraph(30),
        'user_id'      => rand(1, 10),
        'category_id'  => rand(1, 10),
        'is_published' => rand(0, 1)
    ];
});

$factory->define(Category::class, function (Generator $faker) {
    return [
        'name' => $faker->word
    ];
});

$factory->define(Tag::class, function (Generator $faker) {
    return [
        'name' => $faker->word
    ];
});