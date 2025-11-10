import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { redirect } = router.query; // e.g. /checkout

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      router.push(redirect || "/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container text-center py-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="border p-2 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-forestGreen text-white px-6 py-2 rounded" type="submit">
          Login
        </button>
      </form>

      <p className="mt-4 text-gray-600">
        Don’t have an account?{" "}
        <a href="/register" className="text-green-600 font-semibold">
          Register
        </a>
      </p>
    </div>
  );
}
