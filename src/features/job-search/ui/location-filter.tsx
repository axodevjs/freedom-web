import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/shadcn/components/ui/select";

interface LocationFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const LocationFilter: React.FC<LocationFilterProps> = ({
  value,
  onChange,
}) => (
  <div className="space-y-2">
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Выберите город" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="*">Все города</SelectItem>
        <SelectItem value="Москва">Москва</SelectItem>
        <SelectItem value="Санкт-Петербург">Санкт-Петербург</SelectItem>
        <SelectItem value="Казань">Казань</SelectItem>
        <SelectItem value="Новосибирск">Новосибирск</SelectItem>
        <SelectItem value="Екатеринбург">Екатеринбург</SelectItem>
      </SelectContent>
    </Select>
  </div>
);
