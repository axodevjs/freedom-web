import { Card, CardContent } from "@/shared/shadcn/components/ui/card";

export function CompatibilityMeter({
  compatibility,
}: {
  compatibility: number;
}) {
  return (
    <Card className="mb-8">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="relative w-20 h-20">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-300 stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                className="text-primary stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray={`${compatibility * 2.51}, 251.2`}
                transform="rotate(-90 50 50)"
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">{compatibility}%</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Ваша совместимость</h3>
            <p className="text-sm text-gray-600">
              {compatibility < 40 && "Есть потенциал для роста"}
              {compatibility >= 40 && compatibility < 70 && "Хороший кандидат"}
              {compatibility >= 70 && "Отличное совпадение"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
