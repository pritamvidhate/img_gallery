import React, { useState } from 'react'

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit = {onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-1 border-b-2
                border-teal-500 py-2 px-2">

                <input onChange ={e => setText(e.target.value)} 
                className = "appearance-none bg-transparent border-none w-full\
                text-gray-700 mr-20 py-2 px-2 leading-tight focus:outline-none"
                type = "text" placeholder = "Search Image"     
                />    
                
                <button className ="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">
                Search
                </button>

                </div>
            </form>
        </div>
        
    )
}

export default ImageSearch;
