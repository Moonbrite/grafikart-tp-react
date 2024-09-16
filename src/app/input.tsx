"use client"
import {Input} from '@mui/base/Input';


function InputTuto({onChangeProduct}) {

    return (
        <>
            <Input
                slotProps={{
                    input: {
                        className:
                            'w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 shadow-slate-900 focus:shadow-outline-purple focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 hover:border-purple-500 focus:border-purple-500 focus:border-purple-500 border-slate-600 bg-white bg-slate-900 text-slate-900 text-slate-300 focus-visible:outline-0',
                    },
                }}
                placeholder="Search"
                onChange={(e) => onChangeProduct(e.target.value)}
            />
        </>
    );
}

export default InputTuto;