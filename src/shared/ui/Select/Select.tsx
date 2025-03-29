import { ChevronDownIcon } from '@heroicons/react/16/solid';

type SelectProps<T extends string> = {
    id: string;
    options: { value: T; label: string }[];
    selectedValue: T;
    onChange: (value: T) => void;
};

export const Select = <T extends string>({
    id,
    options,
    selectedValue,
    onChange,
}: SelectProps<T>) => {
    return (
        <div className='grid shrink-0 grid-cols-1 focus-within:relative'>
            <select
                id={id}
                value={selectedValue}
                onChange={(e) => onChange(e.target.value as T)}
                className='col-start-1 row-start-1 border p-2 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-(--color-secondary) placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <ChevronDownIcon
                aria-hidden='true'
                className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-(--color-secondary) sm:size-4'
            />
        </div>
    );
};
