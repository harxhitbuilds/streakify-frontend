"use client";
import { User } from "@supabase/supabase-js";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { supabase } from "@/configuration/supabase";
import { useAuthStore } from "@/stores/auth";

type AuthContextType = {
  user: User | null;
};

const AuthContext = createContext<AuthContextType>({ user: null });

export function AuthProvider({ children }: { children: ReactNode }) {
  const setuser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setuser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setuser(session?.user ?? null);
      },
    );
    return () => listener?.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user: useAuthStore.getState().user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
