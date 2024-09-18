import { Slider, SliderProps } from '@mui/material';

interface RangeBarProps {
    min: number;
    max: number;
    value: number;
    onValuePrice: (value: number) => void;
    textLabel:string;
}

export default function RangeBar({ min, max, value, onValuePrice,textLabel}: RangeBarProps) {
    const handleChange: SliderProps['onChange'] = (_, newValue) => {
        onValuePrice(newValue as number);
    };
    return (
        <>
            <div className="flex flex-col">
                <label>{textLabel}</label>
                <Slider
                    className="w-1/2 ps-2"
                    value={value}
                    min={min}
                    max={max}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
            </div>

        </>
    );
}