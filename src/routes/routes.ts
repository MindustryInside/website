import ChartPage from "../pages/ChartPage"
import MainPage from "../pages/MainPage"
import PluginsNModsPage from "../pages/PluginsNModsPage"
export const publicRoutes = [{path: '*', element: MainPage}, {path: 'website/chart', element: ChartPage}, {path: 'website/pluginsnmods', element: PluginsNModsPage}]