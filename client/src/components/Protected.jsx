import { Navigate, Outlet } from "react-router-dom";
import { state } from './Login'
export default function Protected() {
    return (
        state.isLoggedin ? <Outlet /> : <Navigate to={'/login'} />
    )
}
