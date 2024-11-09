import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/components/ui/card";
import { Input } from "@/shared/shadcn/components/ui/input";
import { Label } from "@/shared/shadcn/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/shadcn/components/ui/select";
import { useFiltersStore } from "../model/use-filters-store";

export const Filters: React.FC = () => {
  const { searchTerm, setSearchTerm, locationFilter, setLocationFilter } =
    useFiltersStore();

  return (
    <Card className="md:col-span-1">
      <CardHeader>
        <CardTitle>Фильтры</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">Поиск по ключевым словам</Label>
            <Input
              id="search"
              type="text"
              placeholder="Например, Frontend Developer"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Местоположение</Label>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger id="location">
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
          <Button type="button" className="w-full">
            Применить фильтры
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
