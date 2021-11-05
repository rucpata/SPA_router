import React from 'react';
import '../styles/Article.css'

const Article = ({title, author, text}) => {

    return (
        <article>
            <h2>{title}</h2>
            <span>{author}</span>
            <p>{text}</p>
        </article>
    )
}

export default Article;