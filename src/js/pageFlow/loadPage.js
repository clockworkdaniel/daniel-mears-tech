const cache = {};

export default function loadPage(url) {

  if (cache[url]) {
    return new Promise((resolve) => {
      resolve(cache[url]);
    });
  }

  return fetch(url, {
    method: 'GET'
  }).then((response) => {
    cache[url] = response.text();
    return cache[url];
  });
}
