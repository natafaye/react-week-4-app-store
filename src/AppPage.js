import React from 'react'
import { useParams } from 'react-router-dom';

export default function AppPage({ appList }) {
    const params = useParams();
    const appId = parseInt(params.appId)

    const app = appList.find(app => app.id === appId)
    if(!app) {
        return <div className="col text-danger">ERROR</div>
    }

    return (
        <div className="col">
            <h2>{ app.name }</h2>
            <p>Category Id: { app.categoryId } </p>
        </div>
    )
}
