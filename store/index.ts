export const state = () => ({
  people: []
})

export const mutations = {
  setPeople(state, people) {
    state.people = people
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    commit("setPeople", [])
  }
}
