<template>
  <div>
    <div class="text-h4 pa-4">project title</div>

    <v-row class="pa-4">

      <v-col cols="3">
        <div class="headline text-center">Todo</div>
        <v-divider class="mb-4"/>

        <template v-for="task in todoTasks">
          <task-card :task="task" :key="task.id"/>
        </template>
      </v-col>

      <v-col cols="6">
        <div class="headline text-center">In Progress</div>
        <v-divider class="mb-6"/>

        <v-row class="d-flex">
          <v-flex (size)(6)="6">
            <template v-for="userTasks in inProgressTasksGroupedByUserId">
              <div>
                <div class="text-subtitle-1">{{userTasks.user.name}}</div>
                <v-divider class="mb-4"/>

                <template v-for="task in userTasks.tasks">
                  <task-card :key="task.id" :task="task"/>
                </template>

              </div>

            </template>
          </v-flex>

        </v-row>

      </v-col>

      <v-col cols="3">
        <div class="headline text-center">Done</div>
        <v-divider class="mb-4"/>

        <template v-for="task in doneTasks">
          <task-card :task="task" :key="task.id"/>
        </template>
      </v-col>


    </v-row>

  </div>
</template>

<script>
  import TaskCard from "~/components/task/TaskCard";
  import {mapGetters} from 'vuex'

  export default {
    name: "projectDetails",
    components: {TaskCard},
    computed: {
      ...mapGetters({
        project: 'getProject',
        todoTasks: 'getTodoTasks',
        inProgressTasks: 'getInProgressTasks',
        doneTasks: 'getDoneTasks',
        inProgressTasksGroupedByUserId: 'getInProgressTasksGroupedByUserId',
      })
    },
    created() {
      this.$store.dispatch('fetchProject', this.$route.params.projectId)
    }
  }
</script>

<style scoped>

</style>
