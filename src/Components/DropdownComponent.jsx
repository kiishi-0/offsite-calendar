import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function DropdownComponent({items}) {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Select Department
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map( (item, index) => {
            return <Dropdown.Item key={index} href="#/action-1" as={item}></Dropdown.Item>
        })}
        
        
      </Dropdown.Menu>
    </Dropdown>
  )
}
