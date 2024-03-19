/// <reference types="react" />
export declare const WeeklyHeader: () => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const Week: ({ children }: any) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const MonthTitle: () => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const NextMonthBtn: () => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const PrevMonthBtn: () => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export type MonthContextType = {
    month: number;
    weeks: Date[];
};
export declare const MonthContext: import('../../../node_modules/react').Context<MonthContextType>;
export declare const Month: {
    ({ weeks, monthNumber, children }: any): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    Header: ({ displayPrevMonthBtn, displayNextMonthBtn, }: any) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
    WeeklyHeader: () => import('../../../node_modules/react/jsx-runtime').JSX.Element;
    Week: ({ children }: any) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
};
export declare const MonthViewHeader: ({ displayPrevMonthBtn, displayNextMonthBtn, }: any) => import('../../../node_modules/react/jsx-runtime').JSX.Element;
export declare const Spacer: () => import('../../../node_modules/react/jsx-runtime').JSX.Element;
