import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categorias = ['One Punch', 'Samurai X','Naruto'];
    const [categories, setCategories] = useState(['Naruto']);

   /* const handleAdd = () => {
        
        setCategories([...categories, 'Dragon']);
    }*/
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category}></GifGrid>
                    ))
                }
            </ol>
        </>
    )

}
