"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Download, Settings, Menu, Eye, Network } from "lucide-react";
import { useEditorToolbar } from "../hooks/useEditorToolbar";

export function EditorToolbar() {
  const {
    theme,
    zoomLevel,
    desktopFileActions,
    mobileMenuSections,
    exportActions,
    viewControlActions,
    rightSectionActions,
    mobileSettingsActions,
  } = useEditorToolbar();

  return (
    <div className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {mobileMenuSections.map((section, index) => (
                <div key={section.id}>
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem key={item.id} onClick={item.action}>
                        <Icon className="w-4 h-4 mr-2" />
                        {item.label}
                      </DropdownMenuItem>
                    );
                  })}
                  {section.separator &&
                    index < mobileMenuSections.length - 1 && (
                      <DropdownMenuSeparator />
                    )}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold leading-none bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Seer
              </span>
              <span className="text-[10px] text-muted-foreground leading-none mt-0.5">
                IDL Visualizer
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 ml-4">
            {desktopFileActions.map((action) => {
              const Icon = action.icon;
              return (
                <Button
                  key={action.id}
                  variant={action.variant}
                  size={action.size}
                  className={action.className}
                  onClick={action.action}
                >
                  <Icon className="w-4 h-4" />
                  {action.showLabel && action.label}
                </Button>
              );
            })}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {exportActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <DropdownMenuItem key={action.id} onClick={action.action}>
                      {index === exportActions.length - 1 && (
                        <DropdownMenuSeparator />
                      )}
                      <Icon className="w-4 h-4 mr-2" />
                      {action.label}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {viewControlActions.slice(0, 2).map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                variant={action.variant}
                size={action.size}
                className="h-8 w-8"
                onClick={action.action}
              >
                <Icon className="w-4 h-4" />
              </Button>
            );
          })}
          <Badge variant="secondary" className="px-3 h-8 font-mono text-xs">
            {zoomLevel}%
          </Badge>
          {viewControlActions.slice(2).map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                variant={action.variant}
                size={action.size}
                className="h-8 w-8"
                onClick={action.action}
              >
                <Icon className="w-4 h-4" />
              </Button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center gap-1 mr-2">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 h-8"
              onClick={rightSectionActions[0].action}
            >
              <Eye className="w-4 h-4" />
              <span className="hidden lg:inline">Preview</span>
            </Button>
          </div>

          {rightSectionActions.slice(1).map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                variant={action.variant}
                size={action.size}
                className={`h-8 w-8 ${
                  action.id === "settings" || action.id === "help"
                    ? "hidden lg:flex"
                    : ""
                }`}
                onClick={action.action}
              >
                <Icon className="w-4 h-4" />
              </Button>
            );
          })}

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {mobileSettingsActions.map((section, index) => (
                <div key={section.id}>
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <DropdownMenuItem key={item.id} onClick={item.action}>
                        <Icon className="w-4 h-4 mr-2" />
                        {item.label}
                      </DropdownMenuItem>
                    );
                  })}
                  {section.separator &&
                    index < mobileSettingsActions.length - 1 && (
                      <DropdownMenuSeparator />
                    )}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
