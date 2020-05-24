import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getSubreddits } from "../store/actions/subredditAction";
import { setPost } from "../store/actions/postAction";


import {Link, useHistory} from 'react-router-dom'

export default function SideNav() {
    const home = 'http://localhost:3000/'
    const url = window.location.href;
    const path = 'http://localhost:3000/r/'
    const current_subreddit = url.replace(path, '')

    let temp = url.replace(path, '')
    let temp2 = temp.split('/')
    const current_subreddit2 = temp2[0]

    const dispatch = useDispatch();
    const subreddits = useSelector((state)=> state.subredditReducer.subreddits);
    const history = useHistory()

    useEffect(()=> {
        dispatch(getSubreddits());
    }, [])

    function toNewPost(){
        setPost(null)
        history.push(`/submit`);
    }

    return (
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div onClick={toNewPost} className="btn btn-primary">Create Post</div>
            <Link to='/createsubreddit' className="btn btn-secondary mt-3">Create Subreddit</Link>
            <br/>
            <p style={{textAlign:"center"}} className="mt-3">Subreddits</p>
            {   (url === home )  &&
                <a
                className="nav-link active"
                id="v-pills-home-tab" 
                data-toggle="pill" href="/" 
                role="tab" 
                aria-controls="v-pills-home" 
                aria-selected="true"
                >
                All
                </a>
            }
            {   url !== home &&
                <a
                className="nav-link"
                id="v-pills-home-tab" 
                data-toggle="pill" href="/" 
                role="tab" 
                aria-controls="v-pills-home" 
                aria-selected="false"
                >
                All
                </a>
            }
            { subreddits &&
            <>
            { subreddits.map((subreddit, idx) => {
                return (
                    <div key={idx}>
                    {   (current_subreddit === subreddit.name.toLowerCase() || current_subreddit2 === subreddit.name.toLowerCase()) &&
                        <a
                        className="nav-link active"
                        id="v-pills-home-tab" 
                        data-toggle="pill" href={`/r/${subreddit.name.toLowerCase()}`} 
                        role="tab" 
                        aria-controls="v-pills-home" 
                        aria-selected="true"
                        >
                        {subreddit.name}
                        </a>
                    }
                    {   (current_subreddit !== subreddit.name.toLowerCase() &&  current_subreddit2 !== subreddit.name.toLowerCase()) &&
                        <a
                        className="nav-link"
                        id="v-pills-home-tab" 
                        data-toggle="pill" href={`/r/${subreddit.name.toLowerCase()}`} 
                        role="tab" 
                        aria-controls="v-pills-home" 
                        aria-selected="false"
                        >
                        {subreddit.name}
                        </a>
                    }
                    </div>

                    )
            })}   
            </>   
            }          
        </div>
    )
}