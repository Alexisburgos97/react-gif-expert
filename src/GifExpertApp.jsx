import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;

        // setCategories( cat => [...cat, 'Valorant'] );
        setCategories( [...categories, newCategory] );
    }

    return (
        <>

            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={ (value) => onAddCategory(value) } /> 
            {/* <AddCategory setCategories={setCategories} /> */}

            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {/* Listado de Gif */}
            { 
                categories.map( category => 
                    (
                        <GifGrid key={category} category={category} />
                        
                    )
                )
                
            }

        </>
    )
}