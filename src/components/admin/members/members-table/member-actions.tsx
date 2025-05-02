import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Member } from '@/types/admin/members';

interface MemberActionsProps {
  member: Member;
  onEdit: (member: Member) => void;
  onDelete: (id: string) => void;
}

const MemberActions: React.FC<MemberActionsProps> = ({
  member,
  onEdit,
  onDelete,
}) => (
  <div className="flex gap-2">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(member)}
            className="h-9 w-9 rounded-full hover:bg-gdg-blue/10 hover:text-gdg-blue transition-colors"
          >
            <Pencil className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Edit member</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(member.id)}
            className="h-9 w-9 rounded-full hover:bg-gdg-red/10 hover:text-gdg-red transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Delete member</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);

export default MemberActions;
