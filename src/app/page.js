"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function TradeGuard() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>TradeGuard</h1>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button
          onClick={async () => {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) alert(error.message);
          }}
        >
          Sign Up
        </button>

        <button
          onClick={async () => {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) alert(error.message);
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to TradeGuard</h1>
      <button onClick={() => supabase.auth.signOut()}>
        Logout
      </button>
    </div>
  );
}