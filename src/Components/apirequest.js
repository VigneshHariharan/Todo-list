import axios from "axios"

const jsonData = () => {
  const request = axios.get('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(req => req)
    .then(resp => resp)
    .catch((e) => console.log('err in apirequest'))
  return request
}

export let postData = (list) => {
  const response = axios.post('https://jsonplaceholder.typicode.com/posts?userId=1',
    {
      title: list,
    }
  ).then(res => res)
    .catch(e => console.log(e, "e in api"))
  return response
}


export let deleteData = (action) => {
  console.log(action.id, "id")
  const response = axios.delete(`https://jsonplaceholder.typicode.com/posts/id=${action.id}?userId=1/`)
    .then(res => res)
    .catch(e => console.log(e, "e in api"))
  return response
}


export default jsonData
