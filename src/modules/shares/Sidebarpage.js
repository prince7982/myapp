import React from 'react'
import { Link } from 'react-router-dom'

function Sidebarpage() {
    return (
        <div className="flex-shrink-0 p-3" >
            <Link to="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                <span className="fs-5 fw-semibold">Collapsible</span>
            </Link>
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                        Home
                    </button>
                    <div className="collapse" id="home-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><Link to="home" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Home</Link></li>
                            <li><Link to="about" className="link-body-emphasis d-inline-flex text-decoration-none rounded">About</Link></li>
                            <li><Link to="contact" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Contact</Link></li>
                            <li><Link to="productlist" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Product</Link></li>
                            <li><Link to="graph" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Graph</Link></li>
                            <li><Link to="property" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Props</Link></li>
                            <li><Link to="reduxpage" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Redux</Link></li>
                            <li><Link to="lazypage" className="link-body-emphasis d-inline-flex text-decoration-none rounded">lazy</Link></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Dashboard
                    </button>
                    <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Overview</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Weekly</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Monthly</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Annually</a></li>
                        </ul>
                    </div>
                </li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                        Orders
                    </button>
                    <div className="collapse" id="orders-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
                        </ul>
                    </div>
                </li>
                <li className="border-top my-3"></li>
                <li className="mb-1">
                    <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                        Account
                    </button>
                    <div className="collapse" id="account-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>
                            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebarpage