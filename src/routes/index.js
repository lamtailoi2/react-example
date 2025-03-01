import UseStateDemo from "../pages/UseStateDemo";
import UseEffectDemo from "../pages/UseEffectDemo";
import UseLayoutEffectDemo from "../pages/UseLayoutEffect";
import UseContextDemo from "../pages/UseContextDemo/UseContextDemo";
import UseCallBackDemo from "../pages/UseCallBackDemo/UseCallBackDemo";
import NotFound from "../pages/NotFound";
import UseMemoDemo from "../pages/UseMemoDemo";

const publicRoutes = [
    { path: "use-state", component: UseStateDemo },
    { path: "use-effect", component: UseEffectDemo },
    { path: "use-layout-effect", component: UseLayoutEffectDemo },
    { path: "use-context", component: UseContextDemo },
    { path: "use-callback", component: UseCallBackDemo },
    { path: "use-memo", component: UseMemoDemo },
    { path: "*", component: NotFound }
]

export { publicRoutes }