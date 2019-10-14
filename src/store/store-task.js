const state = {
  tasks:[
    {
      id: 1,
      name: 'Go to Shop',
      completed: false,
      dueDate: '22/06/2019',
      dueTime: '18:00'
    },
    {
      id: 2,
      name: 'Get bananas',
      completed: false,
      dueDate: '22/06/2019',
      dueTime: '18:00'
    },
    {
      id: 3,
      name: 'Get a car',
      completed: false,
      dueDate: '22/06/2019',
      dueTime: '18:00'
    }
  ]

}

const mutations = {

}

const actions = {

}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default{
  namespace: true,
  state,
  mutations,
  actions,
  getters
}
