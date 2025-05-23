async function fetchPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  const h1 = document.createElement('h1');
  h1.textContent = data.title;

  const p = document.createElement('p');
  p.textContent = data.body;

  const postList = document.querySelector('#post-list');
  if (postList) {
    postList.appendChild(h1);
    postList.appendChild(p);
  }
}

fetchPost();
