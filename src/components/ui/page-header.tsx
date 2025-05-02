// @ts-nocheck

import { cn } from '@/lib/utils';
interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function PageHeader({ className, children, ...props }: PageHeaderProps) {
  return (
    <section className={cn('grid gap-1', className)} {...props}>
      {children}
    </section>
  );
}

interface PageHeaderHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function PageHeaderHeading({
  className,
  ...props
}: PageHeaderHeadingProps) {
  return (
    <h1
      className={cn(
        'text-3xl font-bold leading-tight tracking-tighter md:text-4xl',
        className
      )}
      {...props}
    />
  );
}

interface PageHeaderDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function PageHeaderDescription({
  className,
  ...props
}: PageHeaderDescriptionProps) {
  return (
    <p
      className={cn(
        'text-muted-foreground max-w-[750px] text-lg sm:text-xl',
        className
      )}
      {...props}
    />
  );
}
