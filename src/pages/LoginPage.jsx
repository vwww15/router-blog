
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [name, setName] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname ?? '/';

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) return;

    login(name.trim());
    navigate(from, { replace: true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Вхід</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ваше ім'я"
      />

      <button type="submit">
        Увійти
      </button>
    </form>
  );
}
