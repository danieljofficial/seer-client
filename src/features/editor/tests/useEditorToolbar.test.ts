import { renderHook, act } from "@testing-library/react";
import { useEditorToolbar } from "../hooks/useEditorToolbar";

describe("useEditorToolbar", () => {
  it("initializes with dark theme and 100% zoom", () => {
    const { result } = renderHook(() => useEditorToolbar());

    expect(result.current.theme).toBe("dark");
    expect(result.current.zoomLevel).toBe(100);
  });

  it("toggles theme between light and dark", () => {
    const { result } = renderHook(() => useEditorToolbar());

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("light");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("dark");
  });

  it("adjusts zoom level correctly", () => {
    const { result } = renderHook(() => useEditorToolbar());

    act(() => {
      result.current.handleZoomIn();
    });

    expect(result.current.zoomLevel).toBe(110);

    act(() => {
      result.current.handleZoomOut();
    });

    expect(result.current.zoomLevel).toBe(100);
  });

  it("resets zoom level to 100%", () => {
    const { result } = renderHook(() => useEditorToolbar());

    // Zoom in first
    act(() => {
      result.current.handleZoomIn();
      result.current.handleZoomIn();
    });

    expect(result.current.zoomLevel).toBe(120);

    // Then reset
    act(() => {
      result.current.handleResetView();
    });

    expect(result.current.zoomLevel).toBe(100);
  });

  it("provides all action groups", () => {
    const { result } = renderHook(() => useEditorToolbar());

    expect(result.current.desktopFileActions).toBeDefined();
    expect(result.current.mobileMenuSections).toBeDefined();
    expect(result.current.exportActions).toBeDefined();
    expect(result.current.viewControlActions).toBeDefined();
    expect(result.current.rightSectionActions).toBeDefined();
    expect(result.current.mobileSettingsActions).toBeDefined();
  });
});
