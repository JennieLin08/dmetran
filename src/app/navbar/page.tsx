'use client';
import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/images/dmetran_logo.png'
import './navbar.css';
import ItemList from '../itemList/page.tsx';

import { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
} from 'mdb-react-ui-kit';

const page = () => {
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value: string) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };
    return (
        <>
            <MDBNavbar sticky light bgColor='light'>
                <MDBContainer fluid>

                    <MDBNavbarBrand href='#'>
                        {/* <a className="navbar-brand p-0" href="#"> */}
                            <Image
                                src={Logo}
                                alt="logo"
                                width={50}
                                height={50}
                            />
                        {/* </a> */}
                        DMETRAN DEMO</MDBNavbarBrand>
                    <MDBTabs justify className='mb-3 '>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                Products
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                Home
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
                                Login
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                </MDBContainer>

            </MDBNavbar>

            <MDBTabsContent>
                <MDBTabsPane open={justifyActive === 'tab1'}><ItemList /></MDBTabsPane>
                <MDBTabsPane open={justifyActive === 'tab2'}></MDBTabsPane>
                <MDBTabsPane open={justifyActive === 'tab3'}></MDBTabsPane>
            </MDBTabsContent>
        </>
    )
}

export default page




