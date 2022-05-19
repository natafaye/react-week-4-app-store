import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, Route, Routes } from 'react-router-dom'
import AppCardList from './AppCardList'
import AppPage from './AppPage'
import CategoryPage from './CategoryPage'
import CreateAppPage from './CreateAppPage'
import { FAKE_APPS, FAKE_CATEGORIES } from './data'
import MyAccountPage from './MyAccountPage'

export default function App() {
  const [appList, setAppList] = useState(FAKE_APPS)
  const [categoryList, setCategoryList] = useState(FAKE_CATEGORIES)

  const addApp = (newApp) => {
    setAppList(currList => [...currList, newApp]) // set it to a copy of the current app list, with the new app on the end
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">App Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/1">Games</Nav.Link>
            <Nav.Link as={NavLink} to="/category/2">Business</Nav.Link>
            <Nav.Link as={NavLink} to="/category/0">Health</Nav.Link>
            <Nav.Link as={NavLink} to="/app/new">Create App</Nav.Link>
            <Nav.Link as={NavLink} to="/account">My Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <div className="row">
          <Routes>
            <Route path="/" element={<AppCardList appList={appList} />}/>
            <Route path="/account" element={<MyAccountPage/>} />
            <Route path="/category/:categoryId" element={<CategoryPage categoryList={categoryList} appList={appList}/>} />
            <Route path="/app/:appId" element={<AppPage appList={appList} />} />
            <Route path="/app/new" element={<CreateAppPage onSubmit={addApp} categoryList={categoryList} appList={appList} />} />
          </Routes>
        </div>
      </Container>
    </>
  )
}

