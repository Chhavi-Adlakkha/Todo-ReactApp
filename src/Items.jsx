import React from 'react'

export default function Items(props) {
    return(<>
    <li><i class="fa-solid fa-trash trashcss" onClick={()=>
    props.delete(props.id)}></i><h4>{props.content}</h4></li>
    </>)
}
