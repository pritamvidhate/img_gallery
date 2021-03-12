import React from 'react'

const Imagecard = ({image}) => {
    const tags = image.tags.split(',');

    return (
    <div className = "max-w-sm bg-gray-100 rounded overflow-hidden shadow-lg mb-2 m-2">
        <img src={image.webformatURL} alt="images" className = "w-full"/>
        <div className="px-5 py-2">
            <div className="font-bold text-red-500 text-xl mb-2">
                Photo by {image.user}
            </div>
            <ul>
                <li>
                    <strong>Views: </strong>
                        {image.views}
                </li>

                <li>
                    <strong>Downloads: </strong>
                        {image.downloads}
                </li>

                <li>
                    <strong>Likes: </strong>
                        {image.likes}
                </li>
        
            </ul>
        </div>
        <div className="px-6 py-4">
        {tags.map(tag =>(
            <span key = {image.id} className="inline-block bg-gray-200 rounded-full
            px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
            </span>
        ))}
        
        </div>
    </div>
    )
}

export default Imagecard;
