import ProductCategoryRow from "@/app/productCategoryRow";

function ProductTable({inputProduct, isCheckedProduct}) {

    return (
        <>
            <ProductCategoryRow
                inputProduct={inputProduct}
                isCheckedProduct={isCheckedProduct}
            />
        </>
    );
}

export default ProductTable;