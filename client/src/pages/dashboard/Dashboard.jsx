import { Navbar } from "../../components/navbar/Navbar"
import { Rightbar } from "../../components/rightbar/Rightbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import './dashboard.css'
export const Dashboard=()=>{
    return (
        <>
        <Navbar/>
        <div className="dashboard">
        <Sidebar/>
        <Rightbar/>

        </div>
        </>
    )
}