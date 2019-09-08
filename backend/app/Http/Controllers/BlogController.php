<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $posts = Post::with('tags', 'category', 'user')
            ->published()
            ->simplePaginate(5);
        return view('frontend.index', compact('posts'));
    }

    /**
     * @param Post $post
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function post(Post $post)
    {
        $post = $post->load(['tags', 'user', 'category']);
        return view('frontend.post', compact('post'));
    }
}
