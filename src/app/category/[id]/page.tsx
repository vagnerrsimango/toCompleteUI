import { CategorySkeleton } from "@/components/category/CategorySkeleton";
import CustomDialog from "@/components/common/CustomDialog";
import DataTableDemo from "@/components/common/DataTableExample";
import TaskCreateForm from "@/components/task/CreateFrom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCategoryById } from "@/db/queries/category";
import { indexTasks } from "@/db/queries/task";
import { Suspense } from "react";

type TaskPageProps = {
  params: {
    id: string;
  };
};

export default async function TaskPage({ params }: TaskPageProps) {
  // const data = await indexTasks(params.id);
  // const category = await getCategoryById(params.id);

  const dummyData = [
    {
      id: "1",
      name: "Preparar Apresentação",
      status: "pendente",
      created_at: new Date("2024-05-01"),
      start_at: new Date("2024-05-10"),
      end_at: new Date("2024-05-15"),
    },
    {
      id: "1",
      name: "Chamada com Cliente",
      status: "em progresso",
      created_at: new Date("2024-05-01"),
      start_at: new Date("2024-05-10"),
      end_at: new Date("2024-05-15"),
    },
    {
      id: "1",
      name: "Treinamento da Equipe",
      status: "completo",
      created_at: new Date("2024-05-01"),
      start_at: new Date("2024-05-10"),
      end_at: new Date("2024-05-15"),
    },
  ];

  return (
    <div className="flex justify-center items-center w-full sm:h-screen my-4">
      <Card className="flex flex-col  items-center sm:w-1/2 sm:h-3/4 sm:border border-none ">
        <CardHeader className="grid grid-col-2 gap-2 items-center">
          <CardTitle>
            <h1>Gestão de Tarefas </h1>
          </CardTitle>

          <CustomDialog
            trigger="ADD +"
            title="Criar Tarefa"
            description={`Criar tarefas para Venancio`}
          >
            <TaskCreateForm categoryId={params.id} />
          </CustomDialog>
          <CardDescription>Gerencie as tarefas de Venancio</CardDescription>
        </CardHeader>
        <Suspense fallback={<CategorySkeleton />}>
          <CardContent className="w-full">
            <DataTableDemo data={dummyData} />
          </CardContent>
        </Suspense>
      </Card>
    </div>
  );
}
