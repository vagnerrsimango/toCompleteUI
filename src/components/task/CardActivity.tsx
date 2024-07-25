/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sCj1N0NqHPt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const tasks = {
  inProgress: [
    { title: "Desenvolvimento de Landing Page", orderedBy: "Afonso Muchanga", executors: ["Vagner Caetano", "Victor Panguene"], priority: "Alta", priorityVariant: "destructive" },
    { title: "Integração de API", orderedBy: "Victor Panguene", executors: ["Elton Vilanculo"], priority: "Média", priorityVariant: "secondary" },
    { title: "Criação de Mockups", orderedBy: "Elton Vilanculo", executors: ["Victor Panguene"], priority: "Baixa", priorityVariant: "default" },
  ],
  completed: [
    { title: "Auditoria Financeira", orderedBy: "Vagner Caetano", executors: ["Afonso Muchanga", "Elton Vilanculo"], priority: "Alta", priorityVariant: "destructive" },
    { title: "Manutenção do Backend", orderedBy: "Afonso Muchanga", executors: ["Elton Vilanculo"], priority: "Alta", priorityVariant: "destructive" },
    { title: "Redesign do Website", orderedBy: "Vagner Caetano", executors: ["Victor Panguene"], priority: "Média", priorityVariant: "secondary" },
    { title: "Implementação de Funcionalidades", orderedBy: "Victor Panguene", executors: ["Vagner Caetano"], priority: "Baixa", priorityVariant: "default" },
  ],
  overdue: [
    { title: "Relatório de Desempenho", orderedBy: "Vagner Caetano", executors: ["Afonso Muchanga"], priority: "Alta", priorityVariant: "destructive" },
    { title: "Correção de Bugs", orderedBy: "Victor Panguene", executors: ["Elton Vilanculo", "Vagner Caetano"], priority: "Média", priorityVariant: "secondary" },
    { title: "Ajustes no Design", orderedBy: "Elton Vilanculo", executors: ["Victor Panguene"], priority: "Média", priorityVariant: "secondary" },
    { title: "Revisão de Código", orderedBy: "Afonso Muchanga", executors: ["Vagner Caetano"], priority: "Baixa", priorityVariant: "default" },
  ],
};

export default function CardActivity() {
  return (
    <div className="p-4 w-full">
      <div className="grid grid-cols-3 gap-4 py-4">
        <TaskColumn title="Em Progresso" count={tasks.inProgress.length} tasks={tasks.inProgress} />
        <TaskColumn title="Concluídas" count={tasks.completed.length} tasks={tasks.completed} />
        <TaskColumn title="Atrasadas" count={tasks.overdue.length} tasks={tasks.overdue} />
      </div>
    </div>
  );
}

function TaskColumn({ title, count, tasks }) {
  return (
    <div>
      <div className="flex items-center justify-between pb-2">
        <Badge variant="secondary">{title}</Badge>
        <span>{count}</span>
      </div>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
      <Button variant="outline" className="w-full">Novo</Button>
    </div>
  );
}

function TaskCard({ task }) {
  return (
    <Card className="mb-4 shadow-lg rounded-lg">
      <CardContent className="p-4">
        <div className="mb-2">
          <h2 className="text-lg font-bold text-primary">{task.title}</h2>
        </div>
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-sm text-gray-500">Ordenado por:</span>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>{task.orderedBy.split(" ").map(n => n[0]).join("")}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          {task.executors.map((executor, index) => (
            <Avatar key={index} className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>{executor.split(" ").map(n => n[0]).join("")}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <Badge variant={task.priorityVariant} className="text-sm px-3 py-1 rounded-full">
          {task.priority}
        </Badge>
      </CardContent>
    </Card>
  );
}
