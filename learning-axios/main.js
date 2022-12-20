const url = "https://app-kawa-api-dev.azurewebsites.net/v1"

function getUsers() {
  axios.get(`${url}/User`)
    .then(response => {
      const data = response.data

      renderApiResult.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

function getUser() {
  axios.get(`${url}/Clients`)
    .then(response => {
      console.log(response)
      const data = response.data

      // userAvatar.src = data.avatar
      // userNome.textContent = data.name
      // userId.textContent = data.id
      // userCity.textContent = data.city
    })
    .catch(error => console.log(error))
}

function addNewUser(newUser) {

  axios.post(url, newUser)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

function updateUser(user, id) {
  axios.put(`${url}/User/${id}`, user)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

function deleteUser(id) {
  axios.delete(`${url}/User/${id}`)
    .then(response => {
      alert(JSON.stringify(response.data))
      getUsers()
    })
    .catch(error => console.error(error));
}

//calls
getUsers()
getUser()