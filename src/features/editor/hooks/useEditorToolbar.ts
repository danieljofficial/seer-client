"use client";

import {
  Download,
  Eye,
  FileUp,
  HelpCircle,
  Maximize2,
  Moon,
  RotateCcw,
  Settings,
  Share2,
  Sun,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useState } from "react";

export interface ToolbarAction {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  variant?: "ghost" | "outline";
  size?: "sm" | "icon";
  className?: string;
  showLabel?: boolean;
}

export interface DropdownMenuSection {
  id: string;
  items: ToolbarAction[];
  separator?: boolean;
}

export const useEditorToolbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [zoomLevel, setZoomLevel] = useState(100);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    console.log("Theme changed to:", newTheme);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 10, 200));
    console.log("Zoom in");
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 10, 50));
    console.log("Zoom out");
  };

  const handleResetView = () => {
    setZoomLevel(100);
    console.log("Reset view");
  };

  const handleFitView = () => {
    console.log("Fit view");
  };

  const handleImportIDL = () => {
    console.log("Import IDL");
  };

  const handlePreview = () => {
    console.log("Toggle preview");
  };

  const desktopFileActions: ToolbarAction[] = [
    {
      id: "import-idl",
      label: "Import IDL",
      icon: FileUp,
      action: handleImportIDL,
      variant: "outline",
      size: "sm",
      className: "gap-2 bg-transparent",
      showLabel: true,
    },
  ];

  const mobileMenuSections: DropdownMenuSection[] = [
    {
      id: "file-actions",
      items: [
        {
          id: "mobile-import-idl",
          label: "Import IDL",
          icon: FileUp,
          action: handleImportIDL,
        },
        {
          id: "mobile-export",
          label: "Export",
          icon: Download,
          action: () => console.log("Export"),
        },
      ],
    },
    {
      id: "settings-section",
      items: [
        {
          id: "mobile-settings",
          label: "Settings",
          icon: Settings,
          action: () => console.log("Settings"),
        },
        {
          id: "mobile-help",
          label: "Help",
          icon: HelpCircle,
          action: () => console.log("Help"),
        },
      ],
      separator: true,
    },
  ];

  const exportActions: ToolbarAction[] = [
    {
      id: "export-png",
      label: "Export as PNG",
      icon: Download,
      action: () => console.log("Export as PNG"),
    },
    {
      id: "export-svg",
      label: "Export as SVG",
      icon: Download,
      action: () => console.log("Export as SVG"),
    },
    {
      id: "export-json",
      label: "Export as JSON",
      icon: Download,
      action: () => console.log("Export as JSON"),
    },
    {
      id: "share-link",
      label: "Share Link",
      icon: Share2,
      action: () => console.log("Share Link"),
    },
  ];

  const viewControlActions: ToolbarAction[] = [
    {
      id: "zoom-out",
      label: "Zoom Out",
      icon: ZoomOut,
      action: handleZoomOut,
      variant: "ghost",
      size: "icon",
    },
    {
      id: "zoom-in",
      label: "Zoom In",
      icon: ZoomIn,
      action: handleZoomIn,
      variant: "ghost",
      size: "icon",
    },
    {
      id: "fit-view",
      label: "Fit View",
      icon: Maximize2,
      action: handleFitView,
      variant: "ghost",
      size: "icon",
    },
    {
      id: "reset-view",
      label: "Reset View",
      icon: RotateCcw,
      action: handleResetView,
      variant: "ghost",
      size: "icon",
    },
  ];

  const rightSectionActions: ToolbarAction[] = [
    {
      id: "preview",
      label: "Preview",
      icon: Eye,
      action: handlePreview,
      variant: "ghost",
      size: "sm",
      showLabel: false,
    },
    {
      id: "theme-toggle",
      label: "Toggle Theme",
      icon: theme === "dark" ? Sun : Moon,
      action: toggleTheme,
      variant: "ghost",
      size: "icon",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      action: () => console.log("Settings"),
      variant: "ghost",
      size: "icon",
    },
    {
      id: "help",
      label: "Help",
      icon: HelpCircle,
      action: () => console.log("Help"),
      variant: "ghost",
      size: "icon",
    },
  ];

  const mobileSettingsActions: DropdownMenuSection[] = [
    {
      id: "view-controls-mobile",
      items: [
        {
          id: "mobile-zoom-in",
          label: "Zoom In",
          icon: ZoomIn,
          action: handleZoomIn,
        },
        {
          id: "mobile-zoom-out",
          label: "Zoom Out",
          icon: ZoomOut,
          action: handleZoomOut,
        },
        {
          id: "mobile-fit-view",
          label: "Fit View",
          icon: Maximize2,
          action: handleFitView,
        },
        {
          id: "mobile-reset",
          label: "Reset",
          icon: RotateCcw,
          action: handleResetView,
        },
      ],
    },
    {
      id: "preview-help-mobile",
      items: [
        {
          id: "mobile-preview",
          label: "Preview Mode",
          icon: Eye,
          action: handlePreview,
        },
        {
          id: "mobile-help",
          label: "Help",
          icon: HelpCircle,
          action: () => console.log("Help"),
        },
      ],
      separator: true,
    },
  ];

  return {
    theme,
    zoomLevel,
    desktopFileActions,
    mobileMenuSections,
    exportActions,
    viewControlActions,
    rightSectionActions,
    mobileSettingsActions,
    toggleTheme,
    handleZoomIn,
    handleZoomOut,
    handleResetView,
  };
};
