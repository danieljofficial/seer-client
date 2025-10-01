import { GithubIcon } from "lucide-react";
import { Network } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded flex items-center justify-center">
              <Network className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">Seer</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className=" py-4 border-t border-border/50 text-center text-sm text-primary-background">
          Leave a star ;)
        </div>
      </div>
    </footer>
  );
}
