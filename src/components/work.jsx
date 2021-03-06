import React from 'react';
import { Link } from 'react-router-dom';


function Work() {
    return(
        <div className='container mt-5 text-start mx-auto'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Work</li>
                </ol>
            </nav>
           <h6>Currently...</h6>
           <li>
             Product Management Intern at <a>Upraised</a>
           </li>
           <li>
            Writing newsletter on <a href='https://neerajc.substack.com/'>Substack</a>. Just read it. Don't sub, but read.
           </li>
           <li>
            Running a newsletter on psychology with ~300 members. If you want to be part of it, click <a href='https://api.whatsapp.com/send/?phone=917247796922&text=Hey,+I+got+to+know+about+Psych.+I+would+love+to+be+part+of+it!&app_absent=0'>here</a>
           </li>
           <li>
            Built several projects as a freelancer and a developer
           </li>
           <li>
            More about past work exp. <a href='https://www.linkedin.com/in/neeraj-chouhan-profile/'>here</a>
           </li>
        </div>
    )
}

export default Work