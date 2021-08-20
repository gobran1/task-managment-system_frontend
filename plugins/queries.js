export default function ({$axios}, inject) {
  const queries = {
    'fetchAllProjects': "{projects{id,title,description}}",
    'fetchProject': 'query fetchSingleProject($projectId:Int)' +
      '{' +
        'projects(projectId:$projectId){' +
          'id,title,description,' +
          'manager{id,name},' +
          'team{id,name} ' +
          'tasks{' +
      '     id,title,description,statusCode,points,expectedWorkHours,' +
      '     startedAt,finishedAt,' +
      '     createdAt,' +
      '     user{id,name} ' +
      '    }' +
        '}' +
      '}'
  }

  const url = 'backend/graphql'

  async function query(query, variables = null) {
    let data = {};
    let config = {};

    data.query = queries[query]

    if (variables != null) {
      data.variables = variables
    }

    return $axios.post(url, data, config)
  }

  inject('query', query)
}
