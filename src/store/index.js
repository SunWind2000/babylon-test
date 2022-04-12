import { createStore } from 'vuex';

export default createStore({
  state: {
    menuItems: [
      {
        name: '/test1',
        text: 'HelloWorld',
      },
      {
        name: '/test2',
        text: '练习2',
        children: [
          {
            name: '/test2-1',
            text: '练习2-1',
          },
          {
            name: '/test2-2',
            text: '练习2-2',
          },
          {
            name: '/test2-3',
            text: '练习2-3',
          },
        ],
      },
      {
        name: '/test3',
        text: '练习3',
        children: [
          {
            name: '/test3-1',
            text: '练习3-1',
          },
          {
            name: '/test3-2',
            text: '练习3-2',
          },
          {
            name: '/test3-3',
            text: '练习3-3',
          },
        ],
      },
      {
        name: '/about',
        text: '练习4',
      },
    ],
  },
  getters: {},
  mutations: {
    setMenus(state, items) {
      state.menuItems = [...items];
    },
  },
  actions: {},
  modules: {},
});
