import React from 'react'
import { Link } from 'react-router-dom'

export default function AppCardList({ appList }) {
  return (
    <>
        { appList.map(app => (
            <div className="card m-3 col-3" key={app.id}>
                <div className="card-body">
                    <h4 className="card-title"><Link to={ "/app/" + app.id }>{app.name}</Link></h4>
                </div>
            </div>
        ))}
    </>
  )
}
