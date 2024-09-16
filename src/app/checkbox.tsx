function Checkbox({checked,onChecked}) {
    return (
        <>
            <div className="flex gap-3.5">
                <input
                    onChange={(e) => onChecked(e.target.checked)}
                    type="checkbox"
                    checked={checked}
                />
                <label>Montre uniquement les produit en stock</label>
            </div>
        </>
    );
}

export default Checkbox;