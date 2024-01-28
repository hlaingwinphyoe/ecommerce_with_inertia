<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'name' => "Clothing",
            "slug" => "clothing"
        ]);

        Category::create([
            'name' => "Shoes",
            "slug" => "shoes"
        ]);

        Category::create([
            'name' => "Watch & Accessories",
            "slug" => "watch-accessories"
        ]);

        
        
    }
}
