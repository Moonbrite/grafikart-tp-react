import ProductCategoryRow from "@/app/productCategoryRow";

export default function ProductTable({inputProduct, isCheckedProduct,inputPrice}) {
    return (
        <>
            <ProductCategoryRow
                inputPrice={inputPrice}
                inputProduct={inputProduct}
                isCheckedProduct={isCheckedProduct}
            />
        </>
    );
}
