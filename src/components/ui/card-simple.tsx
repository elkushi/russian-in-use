import * as React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = "", children }: CardProps) {
  const classes = ["rounded-lg", "border", "bg-card", "text-card-foreground", "shadow-sm", className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }: CardHeaderProps) {
  const classes = ["flex", "flex-col", "space-y-1.5", "p-6", className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children }: CardTitleProps) {
  const classes = ["text-2xl", "font-semibold", "leading-none", "tracking-tight", className]
    .filter(Boolean)
    .join(' ');
  return (
    <h3 className={classes}>
      {children}
    </h3>
  );
}

export function CardContent({ className = "", children }: CardContentProps) {
  const classes = ["p-6", "pt-0", className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classes}>
      {children}
    </div>
  );
}