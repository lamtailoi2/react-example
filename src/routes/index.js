import UseStateDemo from "../pages/UseStateDemo";
import UseEffectDemo from "../pages/UseEffectDemo";
import UseLayoutEffectDemo from "../pages/UseLayoutEffect";

const publicRoutes = [
    { path: "use-state", component: UseStateDemo },
    { path: "use-effect", component: UseEffectDemo },
    { path: "use-layout-effect", component: UseLayoutEffectDemo }
]

export { publicRoutes }