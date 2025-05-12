import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Loader from '@/components/shared/loader';
import Link from 'next/link';

export const StatCard = ({
  title,
  value,
  icon: Icon,
  link,
  linkText,
  isLoading,
  color = 'gdg-blue',
}: {
  title: string;
  value: number | string;
  icon: any;
  link?: string;
  linkText?: string;
  isLoading: boolean;
  color?: 'gdg-blue' | 'gdg-red' | 'gdg-yellow' | 'gdg-green';
}) => (
  <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden">
    <div className={`h-1 w-full bg-${color}`} />
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-gist text-muted-foreground">
        {title}
      </CardTitle>
      <div
        className={`flex items-center justify-center h-8 w-8 rounded-full bg-${color}/10`}
      >
        <Icon className={`h-4 w-4 text-${color}`} />
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold font-gist">
        {isLoading ? <Loader /> : value}
      </div>
    </CardContent>
    {link && linkText && (
      <CardFooter className="pt-0">
        <Link href={link} className="w-full">
          <Button
            variant="ghost"
            className={`w-full justify-between px-4 py-2 text-sm font-medium text-${color} hover:bg-${color}/10`}
          >
            {linkText}
            <span>→</span>
          </Button>
        </Link>
      </CardFooter>
    )}
  </Card>
);
