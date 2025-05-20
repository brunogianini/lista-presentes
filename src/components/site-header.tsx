interface HeaderProps{
    text?: string
}

export default function SiteHeader({text}: HeaderProps){
    return(
        <>
            <img src="/frog-svgrepo-com.svg" alt="A" width={100}/>

            <h1 style={{fontFamily: 'Kingred Modern'}} className="text-7xl">Chá de Panela<br></br>Bruno & Luiza</h1>
        </>
    )
}