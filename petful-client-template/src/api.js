import config from './config'

const api = {
  getDog() {
    return fetch(`${config.REACT_APP_API_BASE}/dogs`)
      .then((dog) => {
      if (!dog.ok) {
        throw new Error('no dogs left')
      }
      return dog.json();
    })
},

  getCat() {
    return fetch(`${config.REACT_APP_API_BASE}/cats`)
      .then((cat) => {
        if (!cat.ok) {
          throw new Error('no cats left')
        }
        return cat.json();
      })
},

  getPeople() {
    return fetch(`${config.REACT_APP_API_BASE}/people`)
      .then((people) => {
      if (!people.ok) {
        throw new Error('no peoples left')
      }
      return people.json();
    })
},

  addPerson(name) {
    return fetch(`${config.REACT_APP_API_BASE}/people`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        person: name,
      }),
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
  },

  deleteDog() {
    return fetch(`${config.REACT_APP_API_BASE}/dogs`, {
      method: "DELETE",
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
},

  deleteCat() {
    return fetch(`${config.REACT_APP_API_BASE}/cats`, {
      method: "DELETE",
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
},

  deletePerson(person) {
    return fetch(`${config.REACT_APP_API_BASE}/people`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: person,
    }),
  })
    .then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
}

export default api