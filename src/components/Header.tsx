

function Header() {
    return (
        <header className="h-20 flex justify-between p-8 items-center">
            <img className="animate-pulse flex justify-center items-center max-w-20 max-h-20" src="./public/logo.png" alt="logo" />
            <nav className="justify-center gap-4 flex">
                <a></a>
                <a>Fale conosco</a>
                <a></a>
            </nav>
        </header>
        
    )
}

export default Header