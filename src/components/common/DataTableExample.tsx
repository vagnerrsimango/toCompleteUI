"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  List,
  ListOrderedIcon,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toHumanDate } from "@/utils/date";
import { Card } from "../ui/card";
import Link from "next/link";

export type Task = {
  id: string;
  name: string;
  status: string;
  created_at: Date;
  start_at: Date;
  end_at: Date;
};

const completedTasks = [
  {
    id: "3",
    name: "Enviar Emails",
    status: "completo",
    created_at: new Date("2024-05-03"),
    start_at: new Date("2024-05-14"),
    end_at: new Date("2024-05-20"),
  },
  {
    id: "3",
    name: "Submeter Proposta",
    status: "completo",
    created_at: new Date("2024-05-03"),
    start_at: new Date("2024-05-14"),
    end_at: new Date("2024-05-20"),
  },
  {
    id: "3",
    name: "Reunião de Emergência",
    status: "completo",
    created_at: new Date("2024-05-03"),
    start_at: new Date("2024-05-14"),
    end_at: new Date("2024-05-20"),
  },
];

const ongoingTasks = [
  {
    id: "1",
    name: "Preparar Apresentação",
    status: "em progresso",
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
    status: "em progresso",
    created_at: new Date("2024-05-01"),
    start_at: new Date("2024-05-10"),
    end_at: new Date("2024-05-15"),
  },
];

const yetToStartTasks = [
  {
    id: "2",
    name: "Pesquisa de Mercado",
    status: "pendente",
    created_at: new Date("2024-05-02"),
    start_at: new Date("2024-05-12"),
    end_at: new Date("2024-05-18"),
  },
  {
    id: "2",
    name: "Planejamento Orçamentário",
    status: "pendente",
    created_at: new Date("2024-05-02"),
    start_at: new Date("2024-05-12"),
    end_at: new Date("2024-05-18"),
  },
  {
    id: "2",
    name: "Campanha de Recrutamento",
    status: "pendente",
    created_at: new Date("2024-05-02"),
    start_at: new Date("2024-05-12"),
    end_at: new Date("2024-05-18"),
  },
];

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estado Atual
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status");
      let color = "";
      switch (status) {
        case "completo":
          color = "green";
          break;
        case "pendente":
          color = "red";
          break;
        case "em progresso":
          color = "yellow";
          break;
        default:
          color = "gray"; // Cor default
      }
      return (
        <div
          className="flex justify-center w-8 h-8"
          style={{
            borderRadius: "50%",
            backgroundColor: color,
          }}
        ></div>
      );
    },
  },
  ,
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },

  {
    accessorKey: "start_at",
    header: () => <div className="text-right">Início</div>,
    cell: ({ row }) => {
      // Format the amount as a dollar amount

      return (
        <div className="text-right font-medium">
          {toHumanDate(new Date(row.getValue("start_at")))}
        </div>
      );
    },
  },
  {
    accessorKey: "end_at",
    header: () => <div className="text-right">Fim</div>,
    cell: ({ row }) => {
      // Format the amount as a dollar amount

      return (
        <div className="text-right font-medium">
          {toHumanDate(new Date(row.getValue("end_at")))}
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-right">Criada em</div>,
    cell: ({ row }) => {
      // Format the amount as a dollar amount

      return (
        <div className="text-right font-medium">
          {toHumanDate(new Date(row.getValue("created_at")))}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const task = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(task.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function DataTableDemo({ data }: { data: Task[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Pesquisar Tarefa"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <div className="flex ml-4 items-center py-4">
            <Link href="/">
              <List className="h-6 w-6 cursor-pointer mr-4" />
            </Link>
            <Link href="/">
              <ListOrderedIcon className="h-6 w-6 cursor-pointer" />
            </Link>
          </div>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex justify-between space-x-6">
        {/* Por Iniciar */}
        <div className="flex-1 bg-gray-700 rounded-lg shadow-lg p-6 m-4 ">
          <div className="text-white">
            <h2 className="text-xl font-extrabold mb-4">Por Iniciar</h2>
            {data
              .filter((task) => task.status === "pendente")
              .map((task) => (
                <div key={task.id} className="mb-4">
                  <p className="text-gray-300 text-lg font-bold">{task.name}</p>
                  <p className="text-gray-300">
                    Início em: {task.start_at.toLocaleDateString()}
                  </p>
                  <p className="text-gray-300">
                    Término em: {task.end_at.toLocaleDateString()}
                  </p>
                  <hr className="border-white my-2" />
                </div>
              ))}
          </div>
        </div>

        {/* Em Acção */}
        <div className="flex-1 bg-gray-800 rounded-lg shadow-lg p-6 m-4 ">
          <div className="text-white">
            <h2 className="text-xl font-extrabold mb-4">Em Ação</h2>
            {data
              .filter((task) => task.status === "em progresso")
              .map((task) => (
                <div key={task.id} className="mb-4">
                  <p className="text-gray-300 text-lg font-bold">{task.name}</p>
                  <p className="text-gray-300">
                    Início em: {task.start_at.toLocaleDateString()}
                  </p>
                  <p className="text-gray-300">
                    Término em: {task.end_at.toLocaleDateString()}
                  </p>
                  <hr className="border-white my-2" />
                </div>
              ))}
          </div>
        </div>

        {/* Tarefas Completas */}
        <div className="flex-1 bg-gray-900 rounded-lg shadow-lg p-6 m-4 ">
          <div className="text-white">
            <h2 className="text-xl font-extrabold mb-4">Completas</h2>
            {data
              .filter((task) => task.status === "completo")
              .map((task) => (
                <div key={task.id} className="mb-4">
                  <p className="text-gray-300 text-lg font-bold">{task.name}</p>
                  <p className="text-gray-300">
                    Início em: {task.start_at.toLocaleDateString()}
                  </p>
                  <p className="text-gray-300">
                    Término em: {task.end_at.toLocaleDateString()}
                  </p>
                  <hr className="border-white my-2" />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}
