import Chapter01 from "../component/Chapter01";
import Chapter02 from "../component/Chapter02";
import Chapter03 from "../component/Chapter03";
import Chapter04 from "../component/Chapter04";
import Chapter05 from "../component/Chapter05";

interface IRoute {
    path: string,
    component: any,
    disabled?: boolean,
    routes?: IRoute[]
}


const routes: IRoute[] = [
    {
        path: "/chapter01",
        component: Chapter01,
        routes: [
        ]
    },
    {
        path: "/chapter02",
        component: Chapter02,
    },
    {
        path: "/chapter03",
        component: Chapter03,
        disabled: true,
    },
    {
        path: "/chapter04",
        component: Chapter04
    },
    {
        path: "/chapter05",
        component: Chapter05,
    }
];


export { routes }
