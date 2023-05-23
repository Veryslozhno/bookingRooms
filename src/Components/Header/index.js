import React from "react";

function HeaderGuest() {
    return (
        <header>
            <div className="nav-bar">
                <a>
                    Главная страница
                </a>
            </div>
            <div className="login-bar">
                <div className="register">
                    <a>
                        Регистрация
                    </a>
                </div>
                <div className="login">
                    <a>
                        Авторизация
                    </a>
                </div>
            </div>
        </header>
    );
}

function HeaderUser() {
    return (
        <header>
            <div className="nav-bar">
                <a>
                    Главная страница
                </a>
            </div>
            <div className="login-bar">
                <div className="personal-area">
                    <a>
                        Личный кабинет
                    </a>
                </div>
            </div>
        </header>
    );
}

function Header(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <HeaderUser />;
    }
    return <HeaderGuest />;
}

export default Header;