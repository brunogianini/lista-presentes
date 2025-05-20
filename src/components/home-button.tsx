interface ButtonProps{
    text: string,
    link: string
}

export default function HomeButton({text, link}: ButtonProps){
    return(
        <div className="border-2 w-full border-black p-3 flex justify-center m-5 cursor-pointer hover:bg-orange-200">{text}</div>
    )
}