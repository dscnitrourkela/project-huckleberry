import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="min-h-screen bg-background p-8 flex items-center justify-center">
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-red-500">Error</CardTitle>
      </CardHeader>
      <CardContent>{message}</CardContent>
    </Card>
  </div>
);
