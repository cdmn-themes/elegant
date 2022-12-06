import { error } from '@sveltejs/kit'

export async function load({url, parent, fetch}) {
  const site = await parent()
  const dataURL = `API_URL/page?path=${url.pathname}`
  
  return fetch(dataURL, {
    headers: {
      'Authorization': `Bearer SITE_TOKEN`,
      'Accept': 'application/json'
    }
  })
  .then(res => res.json().then(function(data) {
    // console.log(data,{site})
    return Object.assign(data,{site})
  })
  )
  .catch(e => {
    // console.log(e)
    throw error(404, 'Not found')
  })
}