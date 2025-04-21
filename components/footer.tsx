import Link from 'next/link';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-lg font-bold tracking-tighter hover:opacity-80 transition-opacity"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Prathamesh Mishra
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mt-1">
              Full Stack Developer
            </p>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Prathamesh Mishra. All rights reserved.
            </p>
            <span className="mx-2">•</span>
            <p className="flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-destructive fill-destructive" /> using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}