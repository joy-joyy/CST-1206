import { useState, useEffect } from "react"
import Loading from "./Loading"
import Profile from "./Profile"

// const singleUser = `https://api.github.com/users/SankThomas`
// const repos = `https://api.github.com/users/sankthomas/repos?per_page=5`
// https://api.github.com/users/sankthomas/repos?page=1&per_page=10&sort=updated

function App() {
  const [items, setItems] = useState([])
  // Change this to any username whose repositories you want to get
  // const [user] = useState("florinpop17")
  const [owner] = useState("facebook")
  const [repro] = useState("react")


  useEffect(() => {
    const fetchRepos = async () => {
      /*const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=9&sort=updated`)
      const data = await res.json();
      setItems(data)
      console.log(data)
      */
      
      const {Octokit} = require ("@octokit/core");
      const octokit = new Octokit();

      const res = await octokit.request('GET /repos/' + owner + '/' + repro + '/issues{?milestone,state,assignee,creator,mentioned,labels,sort,direction,since,per_page,page}', {
        // owner: 'facebook',
        // repo: 'react'
      });
      setItems(res.data)
      console.log(res.data)
          
    }

    fetchRepos()
  }, [owner, repro])

  return (
    <>
      <div className="pt-10">
        <h1 className="mb-10 font-bold text-2xl">
          Issues of {owner}'s repro {repro} (i.e. https://github.com/facebook/react/issues)
        </h1>
      </div>

      {!items ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 pb-10">
          {items.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  )
}

export default App
