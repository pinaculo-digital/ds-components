declare class ThemeManager {
    theme: "light" | "dark";
    constructor();
    setDarkMode(): void;
    setLightMode(): void;
    switch(): void;
    save(): void;
}
declare const themeManager: ThemeManager;
export default themeManager;
