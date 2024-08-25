"use client";  // Marca este archivo como código del cliente

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { sql } from "@vercel/postgres";
import { NextResponse } from 'next/server';
const SessionLogger = () => {
  const { data: session, status } = useSession();

  const insertLogin = async (email: string | null | undefined) => {
    try {
      await sql`INSERT INTO log_logins (email, timestamp) VALUES (${email}, ${Date.now()});`;
      console.log("INSERTADO")
    } catch (error) {
      console.log("VercelPostgresError - 'missing_connection_string': You did not supply a 'connectionString' and no 'POSTGRES_URL' env var was found.")
      return NextResponse.json({ error }, { status: 500 });
      
    }
    /*
    try {
      console.log("Intentando insertar log para:", email);

      
      const result = await sql`
        INSERT INTO log_logins (email, timestamp)
        VALUES (${email}, ${Date.now()})
        RETURNING *;
      `;
      
      console.log("INSERTADO");

    } catch (error) {
      console.error('Error al insertar log:', error);
    }*/
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
