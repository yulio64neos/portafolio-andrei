function Header(){
    const rutas =[
        {
            href: "#home",
            text: "Inicio",
        },
        {
            href: "#acerca",
            text: "Acerca de mí",
        },
        {
            href: "#skills",
            text: "Habilidades",
        },
        {
            href: "#proyectos",
            text: "Proyectos",
        },
        {
            href: "#contacto",
            text: "Contacto",
        }
    ]


    return(
        <>
            <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        <a href="#home">Julio Andrei</a>
                    </h1> 
                    <nav className="space-x-6">
                        {rutas.map((ruta, index) => {
                            <a
                                key={index}
                                href={ruta.href}
                                className="text-gray-800 hover:text-gray-600"
                            >
                                {ruta.text}
                            </a>
                        })}
                    </nav>
                </div>
            </header>
        </>
    );
}
export default Header;