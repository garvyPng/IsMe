import React, { useState, useEffect, createContext } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../../supabase';

type AuthContextType = {
    session: Session | null;
    setSession: (session: Session | null) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [session, setSession] = useState<Session | null>(null);

    // Инициализация сессии при монтировании
    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const logout = async () => {
        await supabase.auth.signOut();
        setSession(null);
    };

    return (
        <AuthContext.Provider value={{ session, setSession, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
