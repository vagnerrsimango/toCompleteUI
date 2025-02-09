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
  Eye,
  MoreHorizontal,
  Table2Icon,
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
import { ITaskStatus } from "@/interface/task.interface";
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
import { useState } from "react";

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
        case "COMPLETED":
          color = "green";
          break;
        case "IN_PROGRESS":
          color = "amber";
          break;
        case "NOT_STARTED":
          color = "gray";
          break;
        default:
          color = "red"; // Cor default
      }
      return (
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full shadow-md"
          style={{
            backgroundColor: color,
          }}
        >
          <div className="w-8 h-8 rounded-full bg-white"></div>
        </div>
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
            <DropdownMenuItem>Atualizar Estado</DropdownMenuItem>
            <DropdownMenuItem>Editar Tarefa</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Remover Tarefa</DropdownMenuItem>
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

  const [selectedTab, setSelectedTab] = useState("table");

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
            <List
              onClick={() => setSelectedTab("table")}
              className="h-6 w-6 cursor-pointer mr-4"
            />

            <Table2Icon
              onClick={() => setSelectedTab("cards")}
              className="h-6 w-6 cursor-pointer"
            />
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
      {selectedTab === "cards" && (
        <div className="flex justify-between space-x-6">
          <div className="flex-1 h-screen bg-gray-googleBG rounded-lg shadow-lg px-12 p-6 m-4 ">
            <div className="text-white">
              <h2 className="text-xl font-extrabold mb-4 underline-offset-8 ">
                Por Iniciar
              </h2>
              {data
                .filter((task) => task.status === "pendente")
                .map((task) => (
                  <div key={task.id} className="mb-4">
                    <p className="text-gray-300 text-lg font-bold">
                      {task.name}{" "}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Atualizar Estado</DropdownMenuItem>
                          <DropdownMenuItem>Editar Tarefa</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Remover Tarefa</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </p>
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

          <div className="flex-1 bg-gray-800 rounded-lg shadow-lg p-6 m-4 ">
            <div className="text-white">
              <h2 className="text-xl font-extrabold mb-4 underline-offset-8">
                Em Ação
              </h2>
              {data
                .filter((task) => task.status === "em progresso")
                .map((task) => (
                  <div key={task.id} className="mb-4">
                    <p className="text-gray-300 text-lg font-bold">
                      {task.name}{" "}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Atualizar Estado</DropdownMenuItem>
                          <DropdownMenuItem>Editar Tarefa</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Remover Tarefa</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </p>
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

          <div className="flex-1 bg-gray-900 rounded-lg shadow-lg p-6 m-4 ">
            <div className="text-white">
              <h2 className="text-xl font-extrabold mb-4 underline-offset-8">
                Completas
              </h2>
              {data
                .filter((task) => task.status === "completo")
                .map((task) => (
                  <div key={task.id} className="mb-4">
                    <p className="text-gray-300 text-lg font-bold">
                      {task.name}{" "}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Atualizar Estado</DropdownMenuItem>
                          <DropdownMenuItem>Editar Tarefa</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Remover Tarefa</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </p>
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
      )}

      {selectedTab === "table" && (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}

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
