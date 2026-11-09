
export const posts = [
  {
    id: 1,
    title: 'Знайомство з React Router',
    tag: 'react',
    body: 'React Router дозволяє створювати багатосторінкові SPA.'
  },
  {
    id: 2,
    title: 'Хуки у React',
    tag: 'react',
    body: 'Хуки — це функції для роботи зі станом компонентів.'
  },
  {
    id: 3,
    title: 'Flexbox за 10 хвилин',
    tag: 'css',
    body: 'Flexbox — одновимірна система розмітки.'
  },
  {
    id: 4,
    title: 'Проміси та async/await',
    tag: 'js',
    body: 'Асинхронний код у JavaScript.'
  },
  {
    id: 5,
    title: 'CSS Grid на практиці',
    tag: 'css',
    body: 'Grid — двовимірна система розмітки.'
  }
];

export function getPostById(id) {
  return posts.find((post) => post.id === Number(id));
}
