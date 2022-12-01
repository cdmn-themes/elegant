import { error } from '@sveltejs/kit'

export async function load({url, parent}) {
  const site = await parent()
  return fetch(`API_URL/page?path=${url.pathname}`, {
    headers: {
      'Authorization': `Bearer SITE_TOKEN`,
      'Accept': 'application/json'
    }
  })
  .then(res => {return res.json().then(data => Object.assign(data,{site}))})
  .catch(e => {throw error(404, 'Not found')})
}