//components/github.js
"use client";

import React, { useState } from "react";
import { Button, Input, Image } from "@nextui-org/react";
import { GithubIcon } from "@/components/icons";
export default function Githubapi() {
  const [userName, setUserName] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    console.log("Usuario:", userName);
  };

  const handleSubmit = (e) => {
    // Evita que se refresque la página
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      }).catch((error) => console.error("Error fetching user info:", error));
    console.log(userInfo)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-row flex-wrap gap-4">
        <Input
          isRequired
          type="text"
          label="Usuario"
          placeholder="Introduce usuario de GitHub"
          className="max-w-xs"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <div className="flex gap-4 items-center">
          <Button color="success" type="submit">
            Buscar <GithubIcon/>
          </Button>
        </div>
        </div>
      </form>
      

      {userInfo && (
        <div>
          <h3>Información del usuario:</h3>
          <Image
          isZoomed
          width={240}
          alt={userInfo.name}
          src={userInfo.avatar_url}
          />
          <p>Nombre: {userInfo.name}</p>
          <p>Bio: {userInfo.bio}</p>
          <p>Ubicación: {userInfo.location}</p>
        </div>
      )}
    </>
  );
}
