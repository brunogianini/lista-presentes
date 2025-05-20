import HomeButton from "@/components/home-button";
import "./globals.css";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen gap-10 flex-row">

      <div className="h-screen w-2/5">

      </div>

      <div className="flex justify-center items-center flex-col">
        <SiteHeader text="Chá de Panela Bruno & Luiza"/>

        <p>FIZEMOS ESTE SITE PARA QUEM QUISER DAR ALGUM PRESENTINHO PARA ESSA NOTA ETAPA! MUITO OBRIGADO PARA TODO MUNDO QUE QUISER COLABORAR!</p>


        <HomeButton text="Quero dar um móvel" link="/"/>
        <HomeButton text="Quero dar um móvel" link="/"/>
        <HomeButton text="Quero dar um móvel" link="/"/>
        <HomeButton text="Quero dar um móvel" link="/"/>

      </div>
    
      <div className="h-screen w-2/5">
        
      </div>

    </main>
  );
}
