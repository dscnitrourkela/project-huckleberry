import { deleteMember } from '@/actions/members';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Member } from '@/types/admin/members';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import { toast } from 'sonner';

import MemberAvatar from './member-avatar';
import RoleBadge from './role-badge';
import SocialLinks from './social-links';
import MemberActions from './member-actions';
import EmptyState from './empty-state';

const MemberTable = ({
  members,
  setMembers,
  setCurrentMember,
  setOpen,
  setLoading,
  isAdmin,
}: {
  members: Member[];
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
  setCurrentMember: React.Dispatch<React.SetStateAction<Member | null>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: boolean;
}) => {
  const handleEdit = (member: Member) => {
    setCurrentMember(member);
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!id) {
      toast.error('Member ID is missing');
      return;
    }

    if (!confirm('Are you sure you want to delete this member?')) return;
    setLoading(true);

    try {
      const result = await deleteMember(id);
      if (result.status === 'success') {
        setMembers((prev) => prev.filter((member) => member.id !== id));
        toast.success('Member deleted successfully');
      } else {
        toast.error(result.status || 'Failed to delete member');
      }
    } catch (error) {
      console.error('Error deleting member:', error);
      toast.error('An error occurred while deleting the member');
    } finally {
      setLoading(false);
    }
  };

  const columns: ColumnDef<Member>[] = [
    {
      accessorKey: 'profile_photo',
      header: 'Profile',
      cell: ({ row }) => (
        <MemberAvatar
          src={row.original.profile_photo}
          alt={row.original.user_name}
        />
      ),
    },
    {
      accessorKey: 'user_name',
      header: 'Username',
      cell: ({ row }) => (
        <div className="font-medium text-gdg-dark">
          {row.original.user_name}
        </div>
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ row }) => (
        <div className="text-gdg-gray">{row.original.email}</div>
      ),
    },
    {
      accessorKey: 'mobile_no',
      header: 'Mobile',
      cell: ({ row }) => (
        <div className="text-gdg-gray">{row.original.mobile_no}</div>
      ),
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) => <RoleBadge role={row.original.role} />,
    },
    {
      accessorKey: 'socials',
      header: 'Socials',
      cell: ({ row }) => (
        <SocialLinks
          github={row.original.github}
          linkedin={row.original.linkedin}
          twitter={row.original.twitter}
        />
      ),
    },
    {
      accessorKey: 'permissions',
      header: 'Permissions',
      cell: ({ row }) => (
        <div className="flex gap-2">
          {row.original.is_admin && (
            <Badge
              variant="outline"
              className="bg-gdg-blue/10 text-gdg-blue border-gdg-blue/20 rounded-full px-3 py-0.5"
            >
              Admin
            </Badge>
          )}
        </div>
      ),
    },
    {
      accessorKey: 'created_at',
      header: 'Created At',
      cell: ({ row }) => (
        <div className="text-gdg-gray/80">
          {new Date(row.original.created_at).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </div>
      ),
    },
    ...(isAdmin
      ? [
          {
            id: 'actions',
            header: 'Actions',
            cell: ({ row }) => (
              <MemberActions
                member={row.original}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ),
          },
        ]
      : []),
  ];

  const table = useReactTable({
    data: members,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-6 font-geist-sans">
      {members.length ? (
        <div className="rounded-xl border shadow-sm bg-white overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  className="border-b border-gray-200"
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="text-gdg-dark font-medium py-4"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className="transition-colors hover:bg-gray-50 border-b border-gray-100"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="py-3">
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
                    className="h-24 text-center text-gdg-gray"
                  >
                    No members found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default MemberTable;
