import Link from "next/link"

interface ButtonProps{
    text: string,
    link: string
}

export default function HomeButton({text, link}: ButtonProps){
    return(
        <Link className="w-full" href={link}>
            <div className="border-2 w-full border-black p-3 flex justify-center m-2 cursor-pointer hover:bg-orange-200">{text}</div>
        </Link>
    )
}