"use client"
import SearchBar from "@/app/searchBar";
import ProductTable from "@/app/productTable";
import {useState} from "react";

export default function Home() {
    const [inputProduct, setInputProduct] = useState("")
    const [isCheckedProduct, setCheckedProduct] = useState(false)
    const [priceValue, setPriceValue] = useState(0)
  return (
    <>
      <SearchBar
          inputProduct={inputProduct}
          setInputProduct={setInputProduct}
          isCheckedProduct={isCheckedProduct}
          setCheckedProduct={setCheckedProduct}
          inputPrice={priceValue}
          setInputPrice={setPriceValue}
      />
      <ProductTable
          isCheckedProduct={isCheckedProduct}
          inputPrice={priceValue}
          inputProduct={inputProduct}
      />
    </>
  );
}
