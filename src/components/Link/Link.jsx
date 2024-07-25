import React from 'react'
import { Link } from "react-router-dom";

export const Link = () => {
  return (
    <div>
    <h1>Home</h1>
    <Link to="/admin">Go to Admin</Link>
  </div>
  )
}
