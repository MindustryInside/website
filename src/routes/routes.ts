import ChartPage from "../pages/ChartPage"
import MainPage from "../pages/MainPage"
import PluginsNModsPage from "../pages/PluginsNModsPage"
export const publicRoutes = [{path: '*', element: MainPage}, {path: 'InsideSite/chart', element: ChartPage}, {path: 'InsideSite/pluginsnmods', element: PluginsNModsPage}]