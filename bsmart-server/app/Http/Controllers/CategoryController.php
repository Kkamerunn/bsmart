<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\CategoryCollection;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new CategoryCollection(Category::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request; $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         $errors = [];

         try {
            // Validate data
            if (!isset($request->name)) {
                $errors[] = "The name is required"; 
            } 

            if (Category::where('name', $request->name)->exists()) {
                $errors[] = "This category already exists"; 
            }

            // Check if errors exist, if so, return them, if not create the new category
            if (!empty($errors)) {
                return response()->json(['errors' => $errors], 400);
            } else {
                $category = new Category;
                $category->name = $request->name;

                $category->save();

                return response()->json(['message' => 'Category successfully created!']);
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
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $data = [
            'id' => $category->id,
            'name' => $category->name
        ];
        
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request;  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $errors = [];

        try {
            // Validate & save data
            if (!isset($request->name)) {
                $errors[] = "You can't edit a category name with an empty value"; 
            } else {
                $category->name = $request->name;
            }
            
            // Check if errors exist, if so, return them
            if (!empty($errors)) {
                return response()->json(['errors' => $errors], 400);
            }

            $category->save();

            return response()->json(['message' => 'Category successfully updated!']);

        } catch (\Exception $e) {
            // In case of exception return a message
            $errors[] = $e->getMessage();
            
            return response()->json(['errors' => $errors], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return response()->json(['message' => 'Category successfully deleted!']);
    }
}
