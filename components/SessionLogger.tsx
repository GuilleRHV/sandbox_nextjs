"use client";  // Marca este archivo como código del cliente

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { createPool} from "@vercel/postgres";
import pool from '@/app/lib/api/db';
const SessionLogger = () => {
  const { data: session, status } = useSession();

  const insertLogin = async (email: string | null | undefined) => {
    try {
      //const conection = db.connect();
      
      
      const result = pool.query(`
        INSERT INTO log_logins (${email}, ${Date.now()})
        VALUES (${email}, ${Date.now()})';
      `);
      
      console.log("INSERTADO");

    } catch (error) {
      console.error('Error al insertar log:', error);
    }
  };

  useEffect(() => {
    console.log("useEffect ejecutado, status:", status);
    console.log("session:", session);

    if (status === "authenticated" && session?.user?.email) {
      insertLogin(session.user.email);
    } else {
      console.log("Usuario no autenticado o sin email");
    }
  }, [status, session]);

  return null;
};

export default SessionLogger;
