type SelectProps<T extends string> = {
  options: { value: T; label: string }[];
  selectedValue: T;
  onChange: (value: T) => void;
};


export function Select<T extends string>({ options, selectedValue, onChange }: SelectProps<T>) {
  return (
    <select
      value={selectedValue}
      onChange={(e) => onChange(e.target.value as T)}
      className="border p-2 rounded-md"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
