interface IWindowInfo {
    windowSize: {
        width: number;
        height: number;
    };
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
    portrait: boolean;
}
export declare function useWindowInfo(): IWindowInfo;
export {};
