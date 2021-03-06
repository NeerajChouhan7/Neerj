import React from 'react';
import {Link} from 'react-router-dom';

export default function bookshelf(){
    return (
        <div className='container mt-5 text-start align-start'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Bookshelf</li>
                </ol>
            </nav>
            <div className='content text-start align-start'>
            <h1>Bookshelf</h1>
            <p>Listing down all the books that I read, just to keep track and higlighted <span className='highlight'>must read books</span></p>
            <h6 className='mt-5'>Currently Reading...</h6>
            <ul>
                <li>
                    Shantaram - Gregory David Roberts
                </li>
                <li>
                    Homo Deus - Yuval Hoah Harari
                </li>
            </ul>
            <h6>Books</h6>
            <ul>
                <li className='highlight'>Autobiography of a yogi - Paramhansa Yogananda</li>
                <li>My experiments with truth - M.K. Gandhi</li>
                <li>1984 - George Orwell</li>
                <li className='highlight'>Animal Farm - George Orwell </li>
                <li>Deep Work - Cal Newport</li>
                <li>Think and grow rich - Napolean Hill</li>
                <li>Inner Engineering - Sadhguru</li>
                <li>Pride & Prejudice - Jane Austen</li>
                <li>Be here now - Baba Ram Das</li>
                <li className='highlight'>The Hitchhiker's Guide to Galaxy - Douglas Adams</li>
                <li>Life's amazing secrets - Gaur Gopal Das</li>
                <li>Autobiography of Ben Franklin</li>
                <li className='highlight'>Metamorphosis - Franz Kafka</li>
                <li>Immortal talks 1 - Shunya</li>
                <li>That will <em className='i'>never</em> work - Marc Randolph</li>
                <li>Poor Economics - Esther Duflo & Abhijit Banarjee</li>
                <li className='highlight'>Fault in our stars - John Green</li>
                <li>Looking for Alaska - John Green</li>
                <li>The Slap - Christos Tsiolkas</li>
                <li>Zero to One - Peter Thiel</li>
                <li>Monk who sold his Ferrari - Robin Sharma</li>
                <li>21 lessons for 21st Century - Yuval Noah Harari</li>
                <li>Sapiens - Yuval Noah Harari</li>
                <li className='highlight'>Man's search for meaning - Victor Frankl</li>
                <li>The Lost Symbol - Dan Brown</li>
                <li>We are displaced -Malaya</li>
                <li>The Google Story - David Vice</li>
                <li>13 Reasons Why - Jay Asher</li>
                <li>Atomic Habits - James Clear</li>
                <li className='highlight'>The Selfish Gene - Richard Dawkins</li>
                <li>Brief Answers to the Big Questions - Stephen Hawkings</li>
                <li>Harry Potter and sorcerer's stone - J.K. Rowling</li>
                <li>Harry Potter and chamber of secrets- J.K. Rowling</li>
                <li>Harry Potter and the goblet of fire - J.K. Rowling</li>
                <li>Harry Potter and Prisoner of Azkaban - J.K. Rowling</li>
                <li className='highlight'>Harry Potter and the Deathly Hallows - J.K. Rowling</li>
                <li>Bobby Fischer teaches Chess - Bobby Fischer</li>
                <li>The virtue of selfishness - Ayn Rand</li>
                <li className='highlight'>The Silent Patient - Alex Michaelides</li>
                <li>For the love of physics - Walter Lewin</li>
                <li>The Psychology of Selling - Brian Tracy</li>
                <li className='highlight'>The Third Door - Alex Banayan</li>
                <li>12 Rules for Life - Jordan Peterson</li>
                <li>The Alchemist</li>
                <li>Five Point Someone</li>
                <li>3 Mistakes of my life</li>
                <li>Diary of a Wimpy Kid - The Third Wheel</li>
                <li>The Theory of everything</li>
                <li className='highlight'>Steve Jobs</li>
                <li>How to win friends & influence people</li>
                <li>How to top worrying and start living</li>
                <li className='highlight'>Elon Musk</li>
                <li>Who will cry when you die</li>
                <li>The Mastery Manual</li>       
                <li>Rich Dad Poor Dad</li>          
                <li>The Secret</li> 
                <li>A Short History of Nearly Everything</li>
                <li>Thinking Fast & Slow</li>
                <li>Traction</li>
                <li>The Power of Subconcious Mind</li>
                <li>...will add more if I get time or remember any.</li>
            </ul>
            <h6>To Read...</h6>
            <ul>
               
                <li>Juilius Caesar</li>
                <li>Corporate Chanakya</li>
                <li>In defence of sanity - G.K. Chesterton</li>
                <li>Brief history of religion - Richard H.</li>
                <li>Made in America - Sam Walton</li>
                <li>To sell is human - Daniel Pink</li>
                <li>Modern man in search of soul - Carl Jung</li>
                <li>Range - David Epstein</li>
                <li>Surely You're Joking, Mr. Feynman! - Richard Feynman</li>
                <li>Atonment - Iam Mac Ewan</li>
                <li>The three body problem</li>
                <li>Greatest salesman in the world</li>
            </ul>
        </div>
        </div>
    )
}
