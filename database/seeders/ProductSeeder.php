<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'title' => "Men Wave & Letter Graphic Lace Up Sneakers",
            'price' => 26.99,
            'quantity' => 5,
            'category_id' => 2,
            'brand_id' => 1,
            'description' => 'Lorem ipsum dolor sit amet consectetur adipiscing elit tortor etiam, faucibus maecenas aptent penatibus ullamcorper augue lectus sapien taciti, nullam lobortis vivamus nunc dis netus quis urna. Imperdiet at nam lacus malesuada montes aenean phasellus varius sociis nullam, purus commodo maecenas dictumst sociosqu auctor gravida eu lectus, cubilia habitant posuere odio ligula platea nibh fusce ac. Congue massa nostra litora cum placerat mattis ante sociosqu, natoque vehicula molestie netus senectus tempus imperdiet erat, purus nullam platea hendrerit aptent laoreet mi. Proin ultrices ligula ornare diam eu penatibus etiam phasellus integer, conubia id dictumst at velit tristique habitasse nulla, taciti vivamus commodo egestas nunc lobortis facilisis sed. Dictumst erat ligula senectus sagittis posuere cras nibh conubia facilisis mus',
        ]);
    }
}
