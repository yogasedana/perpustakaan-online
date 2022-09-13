import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Navbar = ({ user }) => {
    // console.log(user);
    return (
        <div className="navbar bg-white shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    Perpustakaan
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered bg-white"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="/images/user.jpg" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        className="justify-between"
                                        as="button"
                                    >
                                        Dashboard
                                        <span className="badge">
                                            {user.role}
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link href={route("logout")} method="post">
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
