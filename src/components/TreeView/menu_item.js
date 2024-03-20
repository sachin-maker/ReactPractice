import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import MenuList from './menu_list';

const MenuItem = ({ item }) => {
    const [currentDisplayContent, setCurrentDisplayContent] = useState({});

    const handleToggleChildren = (getCurrentlabel) => {
        setCurrentDisplayContent({
            ...currentDisplayContent,
            [getCurrentlabel]: !currentDisplayContent[getCurrentlabel],
          });
    }

    return (
        <li>
            <div className='menu-item'>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ?
                        <span onClick={() => handleToggleChildren(item.label)}>
                            {
                                currentDisplayContent[item.label] ?
                                    <FaMinus color="#fff" size={25} />
                                    : <FaPlus color="#fff" size={25} />
                            }
                        </span>

                        : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && currentDisplayContent[item.label]  ?
                    
                    <MenuList list={item.children} />
                    : null
            }
        </li>




    )
}

export default MenuItem