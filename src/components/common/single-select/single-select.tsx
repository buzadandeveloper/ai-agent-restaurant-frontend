import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../ui/select";

interface SingleSelectProps {
  value?: string;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const SingleSelect = ({
  value,
  options = [],
  placeholder,
  onChange,
  disabled
}: SingleSelectProps) => {
  return (
    <Select value={value} onValueChange={(value) => onChange(value)} disabled={disabled}>
      <SelectTrigger className="w-[160px] rounded-lg" aria-label="Select a value">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
