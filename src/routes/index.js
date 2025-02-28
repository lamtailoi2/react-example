import UseStateDemo from "../pages/UseStateDemo";
import UseEffectDemo from "../pages/UseEffectDemo";
import UseLayoutEffectDemo from "../pages/UseLayoutEffect";
import UseContextDemo from "../pages/UseContextDemo/UseContextDemo";
import UseCallBackDemo from "../pages/UseCallBackDemo/UseCallBackDemo";

const publicRoutes = [
    { path: "use-state", component: UseStateDemo },
    { path: "use-effect", component: UseEffectDemo },
    { path: "use-layout-effect", component: UseLayoutEffectDemo },
    { path: "use-context", component: UseContextDemo },
    { path: "use-callback", component: UseCallBackDemo },
]

export { publicRoutes }