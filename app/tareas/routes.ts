import { NextResponse } from "next/server";

interface Tarea {
    id: number;
    titulo: string;
    lista: boolean;
}

const tareas: Tarea[] = [
    {id: 1, titulo: "aprender rutas en nextjs", lista: true},
    {id: 2, titulo: "crear endpoint en gat y post", lista: false},
];

export async function get() {
    return NextResponse.json(tareas);
}

export async function post(request: Request) {
    const body =await request.json();

    if (!body.titulo || typeof body.titulo !== "string") {
        return NextResponse.json(
            { error: "El campo 'titulo' es obligatorio" },
            { status: 400 }
        );
    }

    const nuevaTarea: Tarea = {
        id: tareas.length + 1,
        titulo: body.titulo,
        lista: false,  
    };

    tareas.push(nuevaTarea);
    return NextResponse.json(nuevaTarea, { status: 201});
}