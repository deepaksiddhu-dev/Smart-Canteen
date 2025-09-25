import React from 'react'
import { Link } from 'react-router-dom'

import './AdminPage.css'
const AdminPage = () => {
    return (
        <>
            <div className="profileContent">
                <h1>My Another Contents</h1>
                <div className="operations">
                    <div className="stockEntry">
                        <button><Link to="/stockentry">Stock-Entry</Link></button>
                    </div>
                    <div className="stockIssue">
                        <button><Link to="/stockissue">Stock-Issue</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPage
