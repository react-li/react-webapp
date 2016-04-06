import 'isomorphic-fetch'

export const $q = (api,args) => {
  return new Promise(function (resolve, reject) {
    fetch(`http://localhost:3030/caixie/${api}`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(args)
    }).then(response => response.json()).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })
}