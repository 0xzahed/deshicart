"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { user, loading, signOut } = useAuth();
  const pathname = usePathname();

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FiMenu className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className={
                    pathname === "/"
                      ? "bg-primary text-white font-semibold"
                      : ""
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/items"
                  className={
                    pathname === "/items"
                      ? "bg-primary text-white font-semibold"
                      : ""
                  }
                >
                  Items
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className={
                    pathname === "/categories"
                      ? "bg-primary text-white font-semibold"
                      : ""
                  }
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={
                    pathname === "/about"
                      ? "bg-primary text-white font-semibold"
                      : ""
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    pathname === "/contact"
                      ? "bg-primary text-white font-semibold"
                      : ""
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl font-bold">
            DeshiCart
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link
                href="/"
                className={`relative ${
                  pathname === "/"
                    ? "text-primary font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-primary after:rounded-full"
                    : "hover:text-primary transition-colors"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className={`relative ${
                  pathname === "/items"
                    ? "text-primary font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-primary after:rounded-full"
                    : "hover:text-primary transition-colors"
                }`}
              >
                Items
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className={`relative ${
                  pathname === "/categories"
                    ? "text-primary font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-primary after:rounded-full"
                    : "hover:text-primary transition-colors"
                }`}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`relative ${
                  pathname === "/about"
                    ? "text-primary font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-primary after:rounded-full"
                    : "hover:text-primary transition-colors"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`relative ${
                  pathname === "/contact"
                    ? "text-primary font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-primary after:rounded-full"
                    : "hover:text-primary transition-colors"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {!loading &&
            (user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {user.photoURL ? (
                      <Image
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <div className="bg-primary text-white flex items-center justify-center w-full h-full">
                        {user.displayName?.charAt(0) ||
                          user.email?.charAt(0) ||
                          "U"}
                      </div>
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li className="menu-title">
                    <span>{user.displayName}</span>
                    <span className="text-xs">{user.email}</span>
                  </li>
                  <li>
                    <Link href="/add-product">Add Product</Link>
                  </li>
                  <li>
                    <Link href="/manage-products">Manage Products</Link>
                  </li>
                  <li>
                    <button onClick={signOut}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="btn bg-primary text-white hover:bg-primary/90"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Register
                </Link>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
