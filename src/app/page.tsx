"use client"
import SearchBar from "@/app/searchBar";
import ProductTable from "@/app/productTable";
import {useState} from "react";

export default function Home() {
    const [inputProduct, setInputProduct] = useState("")
    const [isCheckedProduct, setCheckedProduct] = useState(false)
  return (
    <>
      <SearchBar
          inputProduct={inputProduct}
          setInputProduct={setInputProduct}
          isCheckedProduct={isCheckedProduct}
          setCheckedProduct={setCheckedProduct}
      />
      <ProductTable
          isCheckedProduct={isCheckedProduct}
          inputProduct={inputProduct}
      />
    </>
  );
}
