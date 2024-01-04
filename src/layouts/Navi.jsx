import React, {useState} from 'react';
import CartSummary from './CartSummary';
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import {  useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function Navi() {
    const {cartItems} = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate()

    // Çıkış yap'a basıldığında 'handleSignOut' çalışır.
    // 'setIsAuthenticated' fonksiyonu alt component'de çağrılır.
    function handleSignOut() {
        setIsAuthenticated(false)
        navigate("/")
    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        {/* Sepet miktarı 0 dan büyükse sepeti göster */}
                        {cartItems.length>0&&<CartSummary /> }        
                        {/* Giriş yapılmışsa - Çıkış yapılmışsa */}
                        {/* Sanki SignedIn'in içinde signOut diye bir fonksiyon varda o da 'handleSignOut' meotudunu tetikliyor */}
                        {/* Burada alt componente data taşıyoruz (signOut, signIn)*/}
                        {isAuthenticated? <SignedIn signOut={handleSignOut} bisey="1"/> 
                        : <SignedOut signIn={handleSignIn} bisey="2" />}                       
                        
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
