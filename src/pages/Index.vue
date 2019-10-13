<template>
  <q-page :style-fn="myTweak" padding>
    <ul>
      <task
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :index='index'
      >{{task.name}}</task>
    </ul>
  </q-page>
</template>

<script>

  import Task from 'components/Task'

export default {
  data() {
    return {
      tasks:[
        {
          id:1,
          name:'Go to Shop',
          dueDate:'2019/05/12',
          dueTime:'18:00'
        },
        {
          id:2,
          name:'Get to Olla',
          dueDate:'2019/05/12',
          dueTime:'14:00'
        },
        {
          id:3,
          name:'Gear to Car',
          dueDate:'2019/05/12',
          dueTime:'13:00'
        }
      ]
    }
  },
  methods: {
    deleteTask(index){
      this.tasks.splice(index, 1)
    }
  },
  components:{
    'task' :  require('components/Task').default
  }
}
</script>

<style>

</style>
