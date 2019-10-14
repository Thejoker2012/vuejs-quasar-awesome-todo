<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>

      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Comissão Própria de Avaliação
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          class="text-grey-4"
          :to="nav.to"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>



      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      navs:[
        {
          label:'Todo',
          icon:'list',
          to:'/'
        },
        {
          label:'Settings',
          icon:'settings',
          to:'/settings'
        },
        {
          label:'Answer',
          icon:'speaker_notes',
          to:'/answer'
        },
        {
          label:'Course',
          icon:'picture_in_picture',
          to:'/course'
        },
        {
          label:'Discipline',
          icon:'bookmarks',
          to:'/discipline'
        },
        {
          label:'Evaluation',
          icon:'menu_book',
          to:'/evaluation'
        },
        {
          label:'Institution',
          icon:'domain',
          to:'/institution'
        },
        {
          label:'Institution Type',
          icon:'domain',
          to:'/institutiontype'
        },
        {
          label:'Local',
          icon:'room',
          to:'/local'
        },
        {
          label:'Option',
          icon:'ballot',
          to:'/option'
        },
        {
          label:'Period',
          icon:'label',
          to:'/period'
        },
        {
          label:'Question',
          icon:'assignment',
          to:'/question'
        },
        {
          label:'Role',
          icon:'assignment_ind',
          to:'/role'
        },
        {
          label:'Scala Likerts',
          icon:'adjust',
          to:'/scalalikert'
        },
         {
          label:'Student',
          icon:'school',
          to:'/student'
        },
         {
          label:'Teacher',
          icon:'person',
          to:'/teacher'
        },
         {
          label:'User',
          icon:'supervised_user_circle',
          to:'/user'
        },
      ]

    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {

    .q-footer{
      display: none;
    }
  }
  .q-drawer {
    .q-router-link--exact-active{
      color:white !important;
    }
  }
</style>
