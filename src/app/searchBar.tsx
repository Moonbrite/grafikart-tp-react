"use client"
import Checkbox from "@/app/checkbox";
import InputTuto from "@/app/input";
import RangeBar from "@/app/rangeBar";

interface SearchBarProps {
    inputProduct: string;
    setInputProduct: (value: string) => void;
    isCheckedProduct: boolean;
    setCheckedProduct: (checked: boolean) => void;
    inputPrice: number;
    setInputPrice: (price: number) => void;
}

export default function SearchBar({inputProduct, setInputProduct, isCheckedProduct, setCheckedProduct, inputPrice, setInputPrice}: SearchBarProps) {
    return (
        <>
            <InputTuto
                type="text"
                value={inputProduct}
                placeholder="Search"
                onChangeProduct={setInputProduct}
            />
            <RangeBar
                value={inputPrice}
                min={0}
                max={10}
                onValuePrice={setInputPrice}
                textLabel="Filtré par prix"
            />
            <Checkbox
                label="Montre uniquement les produit en stock"
                checked={isCheckedProduct}
                onChecked={setCheckedProduct}
            />
        </>
    );
}

