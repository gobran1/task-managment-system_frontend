export default function ({$axios}, inject) {

  const mutations = {
    login: {
      mutation:
        "mutation loginMutation($email:String,$password:String){" +
        "login(email:$email,password:$password)" +
        "}",
    }
  }
  const url = 'backend/graphql'

  function mutation(name, variables = null) {
    let body = {}

    body.query = mutations[name].mutation

    if (variables != null) {
      body.variables = variables
    }

    return $axios.post(url, body)
  }

  inject("mutation", mutation)
}
