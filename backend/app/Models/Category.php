<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Category extends Eloquent
{
    protected $connection = 'mongodb';
    protected $table = 'categories';
    protected $fillable = ['name'];

    /**
     *
     */
    protected static function boot()
    {
        parent::boot();
        static::deleting(function ($category) {
            $category->posts()->delete();
        });
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
