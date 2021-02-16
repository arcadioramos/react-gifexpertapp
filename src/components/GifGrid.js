import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

        //Para renombrar una variable se utilizan los ":"
    const { data:images, loading } = useFetchGifs(category);


    console.log(loading);







    //getGifs();

    return (
        <>
            <h3>{category}</h3>

            {loading ? <p className="card animate__animated animate__flash"> Cargando</p> : null}


            {<div className="card-grid">


                {

                    images.map(img => {

                        return <GifGridItem
                            key={img.id}
                            {...img}
                        />

                    })

                }

            </div>
            }
        </>
    )
}
