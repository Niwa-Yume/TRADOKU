import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <>
      <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            {error && <div className="mb-4 text-red-600">{error}</div>}
            {success && <div className="mb-4 text-green-600">Account created! Check your email to confirm.</div>}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border px-3 py-2 rounded"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full border px-3 py-2 rounded"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
            <div className="mt-4 text-center text-sm">
              Already have an account? <Link to="/login" className="text-purple-600 hover:underline">Login</Link>
            </div>
          </form>
        </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
