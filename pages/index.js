import Head from 'next/head';

function Home(){
    return (
         <div>
              <Head>
              <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="shortcut icon" href="images/favicon.ico" />
                  <title> Celke Imersão 11 </title>
              </Head>
              <nav className="navbar">
            <div class="max-width">
                <div className="logo">
                    <a href="#top">Luciano Lima Jr</a>
                </div>
                <ul className="menu">
                    <li><a href="#top" class="menu-btn">Home</a></li>
                    <li><a href="#services" class="menu-btn">Serviços</a></li>
                    <li><a href="#contact" class="menu-btn">Contato</a></li>
                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
        
    </div>
    );
}

export default Home;