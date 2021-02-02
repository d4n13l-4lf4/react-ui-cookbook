import Chapter01 from "../component/Chapter01";
import Chapter02 from "../component/Chapter02";
import Chapter03 from "../component/Chapter03";
import Chapter04 from "../component/Chapter04";
import Chapter05 from "../component/Chapter05";
import Chapter06 from "../component/Chapter06";
import Chapter07 from "../component/Chapter07";
import Chapter08 from "../component/Chapter08";
import Chapter09 from "../component/Chapter09";
import Chapter10 from "../component/Chapter10";
import Chapter11 from "../component/Chapter11";
import Chapter12 from "../component/Chapter12";
import Chapter13 from "../component/Chapter13";
import Chapter14 from "../component/Chapter14";
import Chapter15 from "../component/Chapter15";

interface IRoute {
    title: string;
    path: string;
    component: any;
    disabled?: boolean;
    routes?: IRoute[]
}


const routes: IRoute[] = [
    {
        title: "1. Grids Placing Components on the Page",
        path: "/chapter01",
        component: Chapter01,
        routes: [
        ]
    },
    {
        title: "2. App Bars - The Top Level of Every Page",
        path: "/chapter02",
        component: Chapter02,
    },
    {
        title: "3. Drawers",
        path: "/chapter03",
        component: Chapter03,
        disabled: true,
    },
    {
        title: "4. Tabs - Grouping sections",
        path: "/chapter04",
        component: Chapter04
    },
    {
        title: "5. Expansion Panels - Group Content into Panel Sections",
        path: "/chapter05",
        component: Chapter05,
    },
    {
        title: "6. Lists - Display Simple Collection Data",
        path: "/chapter06",
        component: Chapter06,
    },
    {
        title: "7. Tables - Display Complex Collection Data",
        path: "/chapter07",
        component: Chapter07,
    },
    {
        title: "8. Cards",
        path: "/chapter08",
        component: Chapter08,
    },
    {
        title: "9. Snackbars - Temporary Messages",
        path: "/chapter09",
        component: Chapter09,
    },
    {
        title: "10. Buttons - Initiating Actions",
        path: "/chapter10",
        component: Chapter10,
    },
    {
        title: "11. Text - Collecting Text Input",
        path: "/chapter11",
        component: Chapter11,
    },
    {
        title: "12. Autocomplete and Chips",
        path: "/chapter12",
        component: Chapter12,
    },
    {
        title: "13. Selection - Make Selections from Choices",
        path: "/chapter13",
        component: Chapter13,
    },
    {
        title: "14. Pickers - Selecting Dates and Times",
        path: "/chapter14",
        component: Chapter14,
    },
    {
        title: "15. Dialogs - Modal Screen for User",
        path: "/chapter15",
        component: Chapter15,
    }
];


export { routes }
