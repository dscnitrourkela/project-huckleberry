import { FormControl } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface BaseFieldProps {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

interface SelectFieldProps extends BaseFieldProps {
  onChange: (value: string) => void;
  value: string;
  options: { label: string; value: string }[];
  label: string;
}

interface FileFieldProps extends BaseFieldProps {
  onChange: (value: FileList | null) => void;
  value?: FileList | null;
  accept?: string;
  type: 'file';
}

export const FormFieldComponent = {
  textarea: ({ className = '', ...props }) => (
    <Textarea className={`min-h-[100px] resize-none ${className}`} {...props} />
  ),

  select: ({
    onChange,
    value,
    options,
    label,
    className = '',
  }: SelectFieldProps) => (
    <Select onValueChange={onChange} defaultValue={value}>
      <FormControl>
        <SelectTrigger className={className}>
          <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options?.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),

  file: ({ onChange, accept, className = '' }: FileFieldProps) => (
    <Input
      type="file"
      onChange={(e) => {
        const files = e.target.files;
        onChange(files);
      }}
      accept={accept}
      className={`cursor-pointer ${className}`}
    />
  ),

  default: (props) => <Input {...props} />,
};

export const getFieldComponent = (type: string) => {
  return (
    FormFieldComponent[type as keyof typeof FormFieldComponent] ||
    FormFieldComponent.default
  );
};
