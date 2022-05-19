import React from 'react'
import { useParams } from 'react-router-dom'
import AppCardList from './AppCardList';

export default function CategoryPage({ categoryList, appList }) {
    const params = useParams();
    const categoryId = parseInt(params.categoryId)

    const category = categoryList.find(category => category.id === categoryId)
    if(!category) {
        return <div className="col text-danger">ERROR</div>
    }

    const appsInCategory = appList.filter(app => app.categoryId === categoryId)

    return (
        <div className="col">
            <h2>{ category.name }</h2>
            <AppCardList appList={appsInCategory}/>
        </div>
    )
}
