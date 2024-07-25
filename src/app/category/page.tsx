import CategoryItem from "@/components/category/CategoryItem";
import { CategorySkeleton } from "@/components/category/CategorySkeleton";
import CategoryCreateForm from "@/components/category/CreateFrom";
import CustomDialog from "@/components/common/CustomDialog";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { indexCategories } from "@/db/queries/category";
import { Suspense } from "react";

export default async function CategoryPage() {
  const categories = await indexCategories();
  return (
    <div className="flex justify-center items-center w-full sm:h-screen my-4">
      <Card className="flex flex-col items-center sm:w-3/4 sm:h-3/4 sm:border border-none">
        <CardHeader className="flex flex-col items-center mb-4">
          <CardTitle>
            <h1 className="text-2xl font-bold">Lista de Categorias de tarefas</h1>
          </CardTitle>

          <CustomDialog
            trigger="ADICIONAR CATEGORIA"
            title="Criar Categoria"
            description="Adicione novas categorias"
          >
            <CategoryCreateForm />
          </CustomDialog>
          <CardDescription className="text-center">
            Tenha acesso a todos agrupamentos de tarefas
          </CardDescription>
        </CardHeader>
        <Suspense fallback={<CategorySkeleton />}>
          <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 items-center w-full p-4">
            {categories.map((category: { id: string; name: string }) => (
              <CategoryItem
                id={category.id}
                name={category.name}
                key={category.id}
              />
            ))}
          </CardContent>
        </Suspense>
      </Card>
    </div>
  );
}
