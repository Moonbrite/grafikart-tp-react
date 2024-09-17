"use client"
import Checkbox from "@/app/checkbox";
import InputTuto from "@/app/input";


export default function SearchBar({ inputProduct, setInputProduct, isCheckedProduct, setCheckedProduct}) {
    return (
        <>
            <InputTuto
                value={inputProduct}
                placeholder="Search"
                onChangeProduct={setInputProduct}
            />
            <Checkbox
                label="Montre uniquement les produit en stock"
                checked={isCheckedProduct}
                onChecked={setCheckedProduct}
            />
        </>
    );
}

