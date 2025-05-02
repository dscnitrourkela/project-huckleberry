'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MemberRegistrationModal from '../../../components/admin/members/members-table/create-member';
import { Member } from '@/types/admin/members';
import MemberTable from '@/components/admin/members/members-table/members-table';
import { createMember, getAllMembers, updateMember } from '@/actions/members';
import { useAuth } from '@/contexts/auth-context';
import AdminPageHeader from '@/components/admin/layout/admin-page-header';

const MembersDashboard = () => {
  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [currentMember, setCurrentMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      const result = await getAllMembers();
      if (result.status === 'success' && 'data' in result) {
        setMembers(result.data.data as unknown as Member[]);
      }
      setLoading(false);
    };
    fetchMembers();
  }, []);

  const handleSubmit = async (data: Partial<Member>) => {
    setLoading(true);
    try {
      const result = currentMember
        ? await updateMember(data as Member)
        : await createMember(data as Member);
      if (result.status === 'success' && 'data' in result) {
        setMembers((prev) =>
          currentMember
            ? prev.map((member) =>
                member.id === currentMember.id ? { ...member, ...data } : member
              )
            : [...prev, data as Member]
        );
        toast.success(
          currentMember
            ? 'Member updated successfully'
            : 'Member created successfully'
        );
      } else if (result.status === 'error' && 'message' in result) {
        toast.error(result.message);
      }
    } catch (e) {
      console.log(e);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
      setOpen(false);
      setCurrentMember(null);
    }
  };

  useEffect(() => {});

  return (
    <div className="p-8">
      <AdminPageHeader accentTitle="Members" title="Members" />

      {user?.role === 'admin' && (
        <>
          <MemberRegistrationModal
            key={currentMember ? currentMember.id : 'new-member'}
            open={open}
            onOpenChange={() => setOpen(false)}
            onSubmit={handleSubmit}
            defaultValues={currentMember}
            isEditing={Boolean(currentMember)}
            isLoading={loading}
          />
          <Button onClick={() => setOpen(true)} className="font-geist-sans">
            <Plus className="mr-2" /> Add Member
          </Button>
        </>
      )}

      <MemberTable
        members={members}
        setMembers={setMembers}
        setCurrentMember={setCurrentMember}
        setOpen={setOpen}
        setLoading={setLoading}
        isAdmin={user?.role === 'admin'}
      />
    </div>
  );
};

export default MembersDashboard;
