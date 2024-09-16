"use client"
import Checkbox from "@/app/checkbox";
import InputTuto from "@/app/input";
import {useState} from "react";

function SearchBar({ inputProduct, setInputProduct, isCheckedProduct, setCheckedProduct }) {


    return (
        <>
            <InputTuto onChangeProduct={setInputProduct}/>
            <Checkbox checked={isCheckedProduct} onChecked={setCheckedProduct}/>
        </>
    );
}

export default SearchBar;