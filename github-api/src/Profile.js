// import React from "react"
import React, { useEffect, useState } from "react";

import { format } from "date-fns"

export default function Profile(props) {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const [isHover, setIsHover] = useState(false);
const handleMouseEnter = () => {
  setIsHover(true);
};

const handleMouseLeave = () => {
  setIsHover(false);
};

const boxStyle = {
  cursor: 'pointer',
   backgroundColor: isHover ? 'white' : 'rgb(180, 180, 180)',
  color: isHover ? 'red' : 'green',
};

  return (
    <>
      <article style={boxStyle} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => { openInNewTab(props.html_url)}}      
              className="bg-white p-5 rounded shadow shadow-emerald-300">
        <div className="flex items-center space-x-2">
          
            <img
              src={props.user.avatar_url}
              alt={props.user.login}
              className="w-16 h-16 shadow rounded-full"
              onClick={() => { openInNewTab(props.user.html_url) }}
            />

              <h2 className="font-bold text-xl"><b>#{props.number}</b> - {props.title.substring(0,50)}...</h2>
        </div>

<hr></hr>
        <div>
          <p className="mt-2 text-sm">
            Created at {format(new Date(props.created_at), "dd MMM hh:mm:ss")} by {props.user.login}
            <br></br>
            Updated at {format(new Date(props.updated_at), "dd MMM hh:mm:ss")} 
          </p>
        </div>

        <div className="space-x-1">
          {
            props.state === "open" ? (
            <p className="bg-green-600 py-1 px-2 text-xs text-white shadow rounded-lg inline-block">
            Open
            </p>
            ) : (
            <p className="bg-emerald-400 py-1 px-2 text-xs text-white shadow rounded-lg inline-block">
            Close
            </p>
            )
          }

          {
            props.labels.map((item) => ( 
              // <h3 key={item.id}>{item.name}</h3>
              item.name === "Type: Bug" ? (<p key={item.id} className="bg-red-800 py-1 px-2 text-xs text-white shadow rounded-lg inline-block ">{item.name}</p>) : 
              (item.name === "Status: Unconfirmed" ? (<p key={item.id} className="bg-purple-400 py-1 px-2 text-xs text-white shadow rounded-lg inline-block">{item.name}</p>) : 
              (item.name === "Component: Developer Tools" ? (<p key={item.id} className="bg-orange-400 py-1 px-2 text-xs text-white shadow rounded-lg inline-block">{item.name}</p>) : 
              ""))
              ))
          }
        </div>


        <div className="mt-5 flex items-center justify-between text-right">
          <a
            className="underline text-sm"
            href={props.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Issue
          </a>
          <ul>
            <li>{props.comments} comments</li>
          </ul>
        </div>

      </article>
    </>
  )
}
