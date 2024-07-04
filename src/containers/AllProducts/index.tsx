import * as React from "react"
import DefaultLayout from "../DefaultLayout";
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
  } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import  { ChevronDown, MoreHorizontal } from "lucide-react"


export type Product = {
    id: string
    Price: number
    status: "pending" | "processing" | "success" | "canceled"
    product: string
    quantity: number
  }

const data: Product[] = [
    {
      id: "m5gr84i9",
      Price: 316,
      status: "success",
      product: "Coca-Cola",
      quantity: 12,
    },
    {
      id: "3u1reuv4",
      Price: 242,
      status: "success",
      product: "Short Bread",
      quantity:32,
    },
    {
      id: "derv1ws0",
      Price: 837,
      status: "processing",
      product: "Tin Milk",
      quantity:32,
    },
    {
      id: "5kma53ae",
      Price: 874,
      status: "success",
      product: "Malta Guniess",
      quantity:32,
    },
    {
      id: "bhqecj4p",
      Price: 721,
      status: "canceled",
      product: "Masked Beans",
      quantity:32,
    },
  ]

export const columns: ColumnDef<Product>[] = [
    // {
    //   accessorKey: "status",
    //   header: "Status",
    //   cell: ({ row }) => (
    //     <div className="capitalize">{row.getValue("status")}</div>
    //   ),
    // },
    {
      accessorKey: "product",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            //onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
           Product Name
            {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
          </Button>
        )
      },
      cell: ({ row }) => <div className="uppercase">{row.getValue("product")}</div>,
    },
    {
        accessorKey: "quantity",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              //onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Quantity
             {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
            </Button>
          )
        },
        cell: ({ row }) => <div className="uppercase">{row.getValue("quantity")}</div>,
      },
    {
      accessorKey: "Price",
      header: () => <div className="text-right">Price</div>,
      cell: ({ row }) => {
        const Price = parseFloat(row.getValue("Price"))
   
        // Format the Price as a dollar Price
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "GHS",
        }).format(Price)
   
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const product = row.original
   
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
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer"
                onClick={() => {
                  localStorage.setItem('productID', product.id)
                  window.location.href = `/dashboard/edit/product/:${product.id}`
                }}
              >
                Edit Item
              </DropdownMenuItem>
              {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
  


const AllProducts = () => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

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
      })
    
  return (
   <DefaultLayout>
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter products..."
          value={(table.getColumn("product")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("product")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
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
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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
                  )
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
   </DefaultLayout>
  )
}

export default AllProducts;