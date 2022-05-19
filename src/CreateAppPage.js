import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateAppPage({ onSubmit, categoryList, appList }) {
    const [nameValue, setNameValue] = useState("")
    const [categoryIdValue, setCategoryIdValue] = useState(0)

    const navigate = useNavigate();

    const onNameChange = (event) => setNameValue(event.target.value);
    const onCategoryIdChange = (event) => setCategoryIdValue(event.target.value);

    const onSubmitButtonClicked = (event) => {
        event.preventDefault();
        const newApp = {
            id: appList[appList.length - 1].id + 1, // quick hack
            name: nameValue,
            categoryId: parseInt(categoryIdValue)
        }
        onSubmit(newApp);
        // navigate to the page for the new app
        navigate("/app/" + newApp.id);
    }

    return (
        <form className="col-6 mt-4">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={nameValue} onChange={onNameChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Category</label>
                <select className="form-select" value={categoryIdValue} onChange={onCategoryIdChange}>
                    { categoryList.map(category => (
                        <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <button className="btn btn-success" onClick={onSubmitButtonClicked}>Submit</button>
        </form>
    )
}
