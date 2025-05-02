import { Pencil, Trash2 } from 'lucide-react';
import { JSX, useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './table';

import { DataTableProps, SortConfig } from '@/types/ui';

export const DataTable = <T extends { id: string }>({
  columns,
  data,
  onEdit,
  onDelete,
  isAdmin,
}: DataTableProps<T>): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: 'asc',
  });

  const handleSort = (key: keyof T) => {
    setSortConfig({
      key: key as string,
      direction:
        sortConfig.key === key && sortConfig.direction === 'asc'
          ? 'desc'
          : 'asc',
    });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key as keyof T];
    const bValue = b[sortConfig.key as keyof T];

    if (sortConfig.direction === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const filteredData = sortedData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-sm"
      />
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.key as string}
                onClick={() => handleSort(column.key)}
                className="cursor-pointer"
              >
                {column.label}
              </TableHead>
            ))}
            {isAdmin && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.key as string}>
                  {column.format
                    ? column.format(row[column.key])
                    : row[column.key]?.toString()}
                </TableCell>
              ))}
              {isAdmin && (
                <TableCell className="flex items-center gap-2">
                  <Button
                    variant={'outline'}
                    size={'icon'}
                    onClick={() => onEdit(row)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={'outline'}
                    size={'icon'}
                    onClick={() => onDelete(row)}
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
