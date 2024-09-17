export default function ProductRow({inputProduct, isCheckedProduct,productColorStock = "red", products}) {
    const category = products[0].category
    const productSearch = products.filter(p =>
            p.name.toLowerCase().includes(inputProduct.toLowerCase()) &&
            p.stocked === isCheckedProduct
    )
    return (
        <>
            {productSearch.length > 0 ? <h1>{category}</h1> :""}
            {(inputProduct === "" && !isCheckedProduct ? products : productSearch).map((product, i) => (
                <p
                    style={!product.stocked ? {color: productColorStock} : undefined}
                    key={i}
                >
                    {product.name} {product.price}
                </p>
            ))}
        </>
    );
}
