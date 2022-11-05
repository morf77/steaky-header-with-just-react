import { useEffect, useState } from 'react';
import Paragraph from '../../UI/Paragraph';
import classes from './Main.module.css';

function Main (props) {
    const [books, setBooks] = useState([])
    // async function bookReceiver() {
    //     const response = await fetch ("https://www.googleapis.com/books/v1/volumes?q=php")
    //     const bookOBJ = await response.json()
    //     const bookArray = await bookOBJ.items
    //     const books = await bookArray.map((data)=>{ return {title : data.volumeInfo.title }})
    //     console.log(books)
        
    // }
    // books.length ===0 ? (        
    // fetch ("https://www.googleapis.com/books/v1/volumes?q=php")
    // .then(response=>response.json())
    // .then(response => response.items)
    // .then(response=>response.map((data)=>{ return {title : data.volumeInfo.title }}))
    // .then(data=>setBooks(data))) : console.log("list loaded")


    useEffect(()=>{
        fetch ("https://www.googleapis.com/books/v1/volumes?q=react")
        .then(response=>response.json())
        .then(response =>response.items)
        .then((response)=>{
            return (response.map((data)=>{ return {title : data.volumeInfo.title }}))
        }).then(data=>setBooks(data)).catch(error=>console.log("an error"));    
    },[])


    return (
        <main className={classes.main}>
            {books.length === 0 ? (<Paragraph>loading</Paragraph>) : (books.map((book,index)=>{return (<Paragraph key={`${book.title}${index}`}>{book.title}</Paragraph>)}))}
        </main>
    )
}

// export async function getServerSideProps(context){
//     console.log(context.req)
//     console.log("hi")
//     fetch ("https://www.googleapis.com/books/v1/volumes?q=php")
//     .then(response=>response.json())
//     .then(response => response.items)
//     // .then(response=>console.log(response.items))
//     .then(response=>response.map((data)=>{ return {title : data.volumeInfo.title }}))
//     .then(data=>console.log(data));
    
    
//     const books = await fetch ("https://www.googleapis.com/books/v1/volumes?q=php")
//     .then(response => response.json())
//     .then(response => response.items)
//     .then(response=>response.map((data)=>{ return {title : data.volumeInfo.title }}))


//     console.log(books)
//     return {
//         props: {
//             books : books
//         }
//     }
// }

export default Main ;