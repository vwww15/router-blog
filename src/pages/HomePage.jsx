
import {
  Link,
  useLoaderData,
  useSearchParams
} from 'react-router';

export default function HomePage() {
  const posts = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') ?? '';

  function updateParam(key, value) {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);

        if (value) {
          next.set(key, value);
        } else {
          next.delete(key);
        }

        return next;
      },
      { replace: true }
    );
  }

  const visible = posts.filter((post) =>
    post.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section>
      <h1>Останні пости</h1>

      <div className="filters">
        <input
          type="search"
          placeholder="Пошук…"
          value={q}
          onChange={(e) => updateParam('q', e.target.value)}
        />
      </div>

      {visible.length === 0 && (
        <p>Нічого не знайдено</p>
      )}

      <ul className="post-list">
        {visible.map((post) => (
          <li key={post.id} className="post-card">
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
