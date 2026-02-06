import { User } from "@supabase/supabase-js";
import { create } from "zustand";

import { supabase } from "@/configuration/supabase";

type AuthState = {
  user: User | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  login: async () => {
    set({ loading: true });
    await supabase.auth.signInWithOAuth({ provider: "github" });
    set({ loading: false });
  },
  logout: async () => {
    set({ loading: true });
    await supabase.auth.signOut();
    set({ user: null, loading: false });
  },
}));
