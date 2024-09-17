import ProductCategoryRow from "@/app/productCategoryRow";

export default function ProductTable({inputProduct, isCheckedProduct}) {
    return (
        <>
            <ProductCategoryRow
                inputProduct={inputProduct}
                isCheckedProduct={isCheckedProduct}
            />
        </>
    );
}
