
import { Link, useLoaderData } from 'react-router';

export default function PostPage() {
  const post = useLoaderData();

  return (
    <article>
      <Link to="/">← Усі пости</Link>

      <h1>{post.title}</h1>

      <p>{post.body}</p>
    </article>
  );
}
