import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle} >
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} >
                        About
                    </SidebarLink>
                    <SidebarLink to="outcome" onClick={toggle}>
                        Outcome
                    </SidebarLink>
                    <SidebarLink to="course" onClick={toggle}>
                        Course
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact us
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    </>
  )
}

export default Sidebar;