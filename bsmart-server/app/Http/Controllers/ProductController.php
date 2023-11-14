<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\ProductsCollection;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ProductsCollection(Product::orderBy('name', 'ASC')->paginate(20));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request;  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $errors = [];

        try {
            // Validate & save data
            if (!isset($request->name)) {
                $errors[] = "The name is required"; 
            }

            if (!isset($request->price)) {
                $request->price = 0.00;
            } elseif (!is_numeric($request->price)) {
                $errors[] = "The price must be a number"; 
            }

            if (!isset($request->stock)) {
                $request->stock = 1;
            } elseif (!is_numeric($request->stock)) {
                $errors[] = "The stock must be a number";
            }

            if (!isset($request->category_id)) {
                $errors[] = "The category is required"; 
            } elseif (!Category::find($request->category_id)) {
                $errors[] = "This category does not exist"; 
            }

            // Check if errors exist, if so, return them, if not create the new product
            if (!empty($errors)) {
                return response()->json(['errors' => $errors], 400);
            } else {
                $product = new Product;
                $product->name = $request->name;
                $product->price = $request->price;
                $product->stock = $request->stock;
                $product->category_id = $request->category_id;

                $product->save();

                return response()->json(['message' => 'Product successfully created!']);
            }
        } catch (\Exception $e) {
            // In case of exception return a message
            $errors[] = $e->getMessage();
            
            return response()->json(['errors' => $errors], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $data = [
            'id' => $product->id,
            'name' => $product->name,
            'price' => $product->price,
            'stock' => $product->stock,
            'category_id' => $product->category_id,
        ];
        
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request;  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $errors = [];

        try {
            // Validate & save data
            if (isset($request->name)) {
                $product->name = $request->name;
            }

            if (isset($request->price)) {
                if (!is_numeric($request->price)) {
                    $errors[] = "The price must be a number"; 
                } else {
                    $product->price = $request->price;
                }
            }

            if (isset($request->stock)) {
                if (!is_numeric($request->stock)) {
                    $errors[] = "The stock must be a number";
                } else {
                    $product->stock = $request->stock;
                }
            }

            if (isset($request->category_id)) {
                if (!Category::find($request->category_id)) {
                    $errors[] = "This category does not exist"; 
                } else {
                    $product->category_id = $request->category_id;
                }
            }

            // Check if errors exist, if so, return them
            if (!empty($errors)) {
                return response()->json(['errors' => $errors], 400);
            }

            $product->save();

            return response()->json(['message' => 'Product successfully updated!']);

        } catch (\Exception $e) {
            // In case of exception return a message
            $errors[] = $e->getMessage();
            
            return response()->json(['errors' => $errors], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(['message' => 'Product successfully deleted!']);
    }
}
