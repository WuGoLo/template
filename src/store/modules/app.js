import { Breadcrumb } from "element-ui";

const app = {
  state: {
    activeMenu: '/',
    breadcrumb: [],
  },
  mutations: {
    set_ActiveMenu: (state, menuActivePath) => { state.activeMenu = menuActivePath },
    set_Breadcrumb: (state, breadcrumbArr) => { state.breadcrumb = breadcrumbArr }
  },
  actions: {

  }
}

export default app
