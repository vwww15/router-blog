
import { data } from 'react-router';

const API = 'https://jsonplaceholder.typicode.com';

export async function postsLoader() {
  const res = await fetch(`${API}/posts?_limit=20`);

  if (!res.ok) {
    throw data('Не вдалося завантажити пости', {
      status: res.status
    });
  }

  return res.json();
}

export async function postLoader({ params }) {
  const res = await fetch(`${API}/posts/${params.postId}`);

  if (res.status === 404) {
    throw data(`Пост №${params.postId} не знайдено`, {
      status: 404
    });
  }

  if (!res.ok) {
    throw data('Помилка сервера', {
      status: res.status
    });
  }

  return res.json();
}
