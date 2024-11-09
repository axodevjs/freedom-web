import { Input } from "@/shared/shadcn/components/ui/input";
import { Label } from "@/shared/shadcn/components/ui/label";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <div className="space-y-2">
    <Label htmlFor="search">Поиск по ключевым словам</Label>
    <Input
      id="search"
      type="text"
      placeholder="Например, Frontend Developer"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
