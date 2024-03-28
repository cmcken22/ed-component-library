/// <reference types="react" />
export declare const WeeklyHeader: () => import("react/jsx-runtime").JSX.Element;
export declare const Week: ({ children }: any) => import("react/jsx-runtime").JSX.Element;
export declare const MonthTitle: () => import("react/jsx-runtime").JSX.Element;
export declare const NextMonthBtn: () => import("react/jsx-runtime").JSX.Element;
export declare const PrevMonthBtn: () => import("react/jsx-runtime").JSX.Element;
export type MonthContextType = {
    month: number;
    weeks: Date[];
};
export declare const MonthContext: import('../../../node_modules/react').Context<MonthContextType>;
export declare const Month: {
    ({ weeks, monthNumber, children }: any): import("react/jsx-runtime").JSX.Element;
    Header: ({ displayPrevMonthBtn, displayNextMonthBtn, }: any) => import("react/jsx-runtime").JSX.Element;
    WeeklyHeader: () => import("react/jsx-runtime").JSX.Element;
    Week: ({ children }: any) => import("react/jsx-runtime").JSX.Element;
};
export declare const MonthViewHeader: ({ displayPrevMonthBtn, displayNextMonthBtn, }: any) => import("react/jsx-runtime").JSX.Element;
export declare const Spacer: () => import("react/jsx-runtime").JSX.Element;
