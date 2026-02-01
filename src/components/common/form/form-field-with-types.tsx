import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface FormFieldWithTypesProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"] | "textarea";
  name: Path<TFieldValues>;
  label: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  accept?: string;
  multiple?: boolean;
  ariaInvalid?: boolean;
}

// If we have different input types, we can extend this component further as needed.

export const FormFieldWithTypes = <TFieldValues extends FieldValues>({
  form,
  type,
  name,
  label,
  placeholder,
  minLength,
  maxLength,
  accept,
  multiple = false,
  ariaInvalid
}: FormFieldWithTypesProps<TFieldValues>) => {
  const isFileType = type === "file";
  const isNumberType = type === "number";
  const isTextareaType = type === "textarea";

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { onChange, value, ...field } }) => (
        <FormItem className="flex-1">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {isTextareaType ? (
              <Textarea
                value={value}
                placeholder="A cozy Italian restaurant known for its authentic wood-fired pizzas..."
                maxLength={maxLength}
                aria-invalid={ariaInvalid}
                className="resize-none"
                onChange={(e) => onChange(e.target.value)}
                {...field}
              />
            ) : (
              <Input
                type={type}
                value={isFileType ? undefined : value}
                placeholder={placeholder}
                // Only set min and max attributes for number input types
                min={isNumberType ? minLength : undefined}
                max={isNumberType ? maxLength : undefined}
                // Only set accept and multiple attributes for file input types
                accept={isFileType ? accept : undefined}
                multiple={isFileType ? multiple : undefined}
                aria-invalid={ariaInvalid}
                onChange={(e) =>
                  isFileType
                    ? onChange(e.target.files?.[0] || null)
                    : isNumberType
                      ? onChange(parseInt(e.target.value, 10) || 0)
                      : onChange(e.target.value)
                }
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
