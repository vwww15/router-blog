
import { useAuth } from '../context/AuthContext';

export default function AdminPage() {
  const { user } = useAuth();

  return (
    <h1>
      Панель адміністратора. Вітаємо, {user.name}!
    </h1>
  );
}
