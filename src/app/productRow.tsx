export default function ProductRow({inputProduct, isCheckedProduct, productColorStock = "red", products, inputPrice}) {
    const category = products[0].category
    const productSearch = products.filter(p =>
        p.name.toLowerCase().includes(inputProduct.toLowerCase()) &&
        p.stocked === isCheckedProduct &&
        p.price.includes(inputPrice.toString())
    )
    return (
        <>
            {productSearch.length > 0 || (inputPrice === 0 && !isCheckedProduct ) ? <h1>{category}</h1> : ""}
            {(inputProduct === "" && !isCheckedProduct && inputPrice === 0 ? products : productSearch).map((product, i) => (
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
