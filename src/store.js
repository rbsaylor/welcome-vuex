import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    inputs: [{val: ''}, {val: '2'}, {val: ''}, {val: ''}],
    code: '',
    comp: 'app-input',
    codeFull: false,
    error: false,
    reps: [
      {
        code: '1234',
        name: 'Becky Reynolds',
        phone: '(740) 753-9100 x2090',
        email: 'rebecca.reynolds@lehighoutfitters.com'
      },
      {
        code: 'abcd',
        name: 'Ashley Campbell',
        phone: '(740) 753-9100 x2112',
        email: 'ashley.campbell@lehighoutfitters.com'
      }
    ],
    lead: {
      name: 'John'
    }
  }
});
