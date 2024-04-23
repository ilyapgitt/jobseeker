'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Сохранение данных пользователя в localStorage
    localStorage.setItem('credentials', JSON.stringify({ name, email, password }));
    router.push('/profile');
  };


  return (
    <main className="overflow-hidden mt-20 max-width">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </main>
  )
}