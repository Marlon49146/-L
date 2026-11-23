"use client";

import { useState } from "react";

export default function PaginaTareas() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([
    "Configurar Git y GitHub",
    "Probar API REST y SQL",
    "Entender rutas en Next.js",
  ]);

  function agregarTarea(e: React.FormEvent) {
    e.preventDefault();
    if (!texto.trim()) return;
    setLista([...lista, texto]);
    setTexto("");
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Mis tareas en Next.js</h1>

      <form onSubmit={agregarTarea} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{ padding: "0.4rem", color: "#000", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.4rem 0.8rem" }}>
          Agregar
        </button>
      </form>

      <ul>
        {lista.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </main>
  );
}