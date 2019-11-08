
const app = {
  state: {
    menuOpen: '0',
    activeMenu: '/'
  },
  mutations: {
    set_MenuOpen: (state, menuOpenPath) => { state.menuOpen = menuOpenPath },
    set_ActiveMenu: (state, menuActivePath) => { state.activeMenu = menuActivePath }
  },
  actions: {

  }
}

export default app
