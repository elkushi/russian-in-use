import * as React from "react";

interface AvatarProps {
  className?: string;
  children: React.ReactNode;
}

interface AvatarImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

interface AvatarFallbackProps {
  className?: string;
  children: React.ReactNode;
}

export function Avatar({ className = "", children }: AvatarProps) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt, className = "" }: AvatarImageProps) {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  
  if (error || !src) return null;
  
  return (
    <img
      src={src}
      alt={alt}
      className={`aspect-square h-full w-full ${loaded ? 'block' : 'hidden'} ${className}`}
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
    />
  );
}

export function AvatarFallback({ className = "", children }: AvatarFallbackProps) {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}>
      {children}
    </div>
  );
}