import { useReducer } from "react"


const TYPES= {
    agregar: 'agregar',
    borrar: 'borrar'
}

const reducer = (state, action)=>{
    switch(action.type){
        case TYPES.agregar:
            return [...state,
                {id: Date.now() , nombre: action.payload}
            ]

        case TYPES.borrar:
            return state.filter(tarea=>tarea.id!==action.payload)

        default: 
            return state
    }
}

const tareasIniciales = [
    {id:1, nombre: "Estudiar"},
    {id:2, nombre: "Rent to own"}
]

export const ListaTareas = () => {

    const[tareas, dispatch]= useReducer(reducer, tareasIniciales);

    const handleSubmit= (event)=>{
        event.preventDefault();
        dispatch({
            type: TYPES.agregar,
            payload: event.target[0].value
        })
    }

    const handleDelete= (id)=>{
        dispatch({
            type: TYPES.borrar,
            payload: id
        })
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit} >
            <input type="text" placeholder="Nueva Tarea" />
            <input
              
             type="submit" 
             value='Crear Tarea'
            />
        </form>
        <div className="ContenedorTareas">
            {tareas.map(tarea=>(
                <div className="Tarea" key={tarea.id}> 
                    <p>{tarea.nombre}</p>
                    <button onClick={()=>handleDelete(tarea.id)} >Borrar</button>
                </div>
            ))}
        </div>
    </div>
  )
}
