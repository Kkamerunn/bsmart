<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            array( 
                'name' =>  "Chocolate coffee caramel",
                'price' => 59.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Café Frio con Chocolate Grande",
                'price' => 49.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Latte Frio con Chocolate Grande",
                'price' => 54.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Latte Frio con Chocolate Grande",
                'price' => 54.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Malteada Fria con Chocolate Grande",
                'price' => 54.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Café Mocha Caliente Chico",
                'price' => 39.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Café Mocha Caliente Grande con Chocolate",
                'price' => 59.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Café Caliente Capuchino Grande",
                'price' => 59.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Café Mocha Caliente Mediano",
                'price' => 49.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Café Mocha Frio con Caramelo Mediano",
                'price' => 49.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Café Mocha Frio con Chocolate Mediano",
                'price' => 49.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Café Espresso",
                'price' => 29.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Café Capuchino Grande con Caramelo",
                'price' => 59.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Café Caramelo Grande",
                'price' => 59.9,
                'category_id' => 1,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete de 3 donas de Chocolate",
                'price' => 39.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete de 3 donas Glaseadas",
                'price' => 39.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Dona de Fresa",
                'price' => 19.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Dona con Galleta de Chocolate",
                'price' => 19.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Dona glass con Chispas Sabor Fresa",
                'price' => 19.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Dona glass con Chocolate",
                'price' => 19.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Dona de Chocolate con MÁS Chocolate",
                'price' => 19.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete de 3 donas de Chocolate",
                'price' => 39.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete de 3 donas con Vainilla y Chocolate",
                'price' => 39.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete de 6 Donas",
                'price' => 69.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete de 3 Variadas",
                'price' => 39.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Dona Natural con Chocolate",
                'price' => 19.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete de 3 Donas de Chocolate con Chispas",
                'price' => 39.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Dona Chocolate y Coco",
                'price' => 19.9,
                'category_id' => 4,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete Galletas de Chocolate",
                'price' => 29.9,
                'category_id' => 6,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete Galletas de Chocolate y Avena",
                'price' => 39.9,
                'category_id' => 6,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete de Muffins de Vainilla",
                'price' => 39.9,
                'category_id' => 6,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete de 4 Galletas de Avena",
                'price' => 24.9,
                'category_id' => 6,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Galletas de Mantequilla Variadas",
                'price' => 39.9,
                'category_id' => 6,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Galletas de sabores frutales",
                'price' => 39.9,
                'category_id' => 6,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Hamburguesa Sencilla",
                'price' => 59.9,
                'category_id' => 2,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Hamburguesa de Pollo",
                'price' => 59.9,
                'category_id' => 2,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Hamburguesa de Pollo y Chili",
                'price' => 59.9,
                'category_id' => 2,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Hamburguesa Queso y Pepinos",
                'price' => 59.9,
                'category_id' => 2,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Hamburguesa Cuarto de Libra",
                'price' => 59.9,
                'category_id' => 2,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Hamburguesa Doble Queso",
                'price' => 69.9,
                'category_id' => 2,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Hot Dog Especial",
                'price' => 49.9,
                'category_id' => 2,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Paquete 2 Hot Dogs",
                'price' => 69.9,
                'category_id' => 2,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "4 Rebanadas de Pay de Queso",
                'price' => 69.9,
                'category_id' => 5,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Waffle Especial",
                'price' => 49.9,
                'category_id' => 5,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Croissants De la casa",
                'price' => 39.9,
                'category_id' => 5,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pay de Queso",
                'price' => 19.9,
                'category_id' => 5,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pastel de Chocolate",
                'price' => 29.9,
                'category_id' => 5,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Rebanada Pastel de Chocolate",
                'price' => 29.9,
                'category_id' => 5,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Spicy con Doble Queso",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Jamón y Queso",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Doble Queso",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Especial de la Casa",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Chorizo",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Hawaiana",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Tocino",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Vegetales y Queso",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Pepperoni y Queso",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Aceitunas y Queso",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'name' =>  "Pizza Queso, Jamón y Champiñones",
                'price' => 69.9,
                'category_id' => 3,
                'stock' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
        ];

        DB::table('products')->insert($data);
    }
}