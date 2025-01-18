import { useState } from 'react'

function DropdownList() {
    
    let list: string[] = [
        "Profile information",
        "Change password",
        "Become PRO",
        "Help",
        "Log Out"];

    const [choosenItem, setChoosenItem] = useState(list[0]);
    let array = [];
    let normalStyle = { color: "black" };
    let activeStyle = { color: "blue" };

    array = list.map((dropdownItem) =>
        <li style={
            dropdownItem == choosenItem ? activeStyle : normalStyle
        }
            onClick={() => {
                setChoosenItem(dropdownItem);
            }
            }><a>{dropdownItem}</a></li>
    );

    return (
        <>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {array}
            </ul>
        </>
    )
}

export default DropdownList