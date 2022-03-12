import ChartPage from "../pages/ChartPage.tsx"
import MainPage from "../pages/MainPage"
import PluginsNModsPage from "../pages/PluginsNModsPage"
export const publicRoutes = [{path: '*', element: MainPage}, {path: '/chart', element: ChartPage}, {path: '/pluginsnmods', element: PluginsNModsPage}]