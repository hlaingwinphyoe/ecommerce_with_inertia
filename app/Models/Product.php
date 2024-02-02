<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Product extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'price',
        'inStock',
        'published',
        'created_by',
        'updated_by',
        'deleted_by'
    ];
    /**
     * Get the options for generating the slug.
     */
    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function product_images()
    {
        return $this->hasMany(ProductImages::class);
    }

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }

    public function scopeFiltered(Builder $query)
    {
        $query->when(request('brands'), function (Builder $q) {
            return $q->whereIn('brand_id', request('brands'));
        })
            ->when(request('categories'), function (Builder $q) {
                return $q->whereIn('category_id', request('categories'));
            })
            ->when(request('prices'), function (Builder $q) {
                return $q->whereBetween('price', [
                    request('prices.from', 0), request('prices.to', 100000)
                ]);
            });
    }
}
