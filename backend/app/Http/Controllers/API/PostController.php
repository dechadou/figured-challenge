<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\PostResource;
use App\Http\Resources\PostsResource;
use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function validateInputs($request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'string|required',
            'body' => 'string|required',
            'is_published' => 'integer|required',
        ]);

        if ($validator->fails()) {
            return false;
        }

        return true;
    }

    public function index()
    {
        return new PostsResource(Post::orderBy('created_at', 'desc')->get());
    }

    public function show(Post $post)
    {
        return new PostResource($post);
    }

    public function store(Request $request)
    {
        if (!$this->validateInputs($request)) {
            return response()->json('Invalid Input');
        }

        $post = Post::create([
            'title' => $request->title,
            'body' => $request->body,
            'is_published' => $request->is_published
        ]);


        return response()->json($post, 201);
    }

    public function update(Request $request, Post $post)
    {
        if (!$this->validateInputs($request)) {
            return response()->json('Invalid Input');
        }

        $post->update([
            'title' => $request->title,
            'body' => $request->body,
            'is_published' => $request->is_published
        ]);


        return response()->json($post, 200);
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json('Post Deleted', 200);
    }
}
