function Checkbox({checked,onChecked,label}) {
    return (
        <>
            <div className="flex gap-3.5">
                <input
                    onChange={(e) => onChecked(e.target.checked)}
                    type="checkbox"
                    checked={checked}
                />
                <label>{label}</label>
            </div>
        </>
    );
}

export default Checkbox;