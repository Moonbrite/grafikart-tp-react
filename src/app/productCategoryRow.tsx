import ProductRow from "@/app/productRow";

export default function ProductCategoryRow({inputProduct, isCheckedProduct}){
    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
    ]
    const categories = [...new Set(PRODUCTS.map(product => product.category))];
    return (
        <>
            {categories.map(category => (
                <div key={category}>
                    <ProductRow
                        isCheckedProduct={isCheckedProduct}
                        inputProduct={inputProduct}
                        products={PRODUCTS.filter(product => product.category === category)}
                    />
                </div>
            ))}
        </>
    );
}
