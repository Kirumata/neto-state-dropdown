import DropdownList from "./DropdownList"
import "./Dropdown.css"
import { useState } from 'react'

function Dropdown() {

    const [stateOpen, setState] =
        useState("dropdown");

    return (
        <>
            <div className="grid grid-cols-1 w-52">
                <div tabIndex={0} role="button" className="btn m-1" onClick={() => {
                    stateOpen == "dropdown" ? setState("dropdown dropdown-open") : setState("dropdown");
                }}>ACCOUNT SETTINGS<span className="material-icons">public</span>
                </div>
                <div className={stateOpen}>
                    <DropdownList></DropdownList>
                </div>
            </div>
        </>
    )


}

export default Dropdown