import { useState } from "preact/hooks"

export default function SideBar1() {
    let [open, setOpen] = useState(false)

    let Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];
    
    return (
        <div class={`p-2 bg-dark-purple relative ${open ? 'w-64' : 'w-22'}`}>
            <img
                src="/side-bar-1/control.png"
                class={`absolute w-6 cursor-pointer -right-3 ${!open && 'rotate-180'}`}
                onClick={() => setOpen(!open)}
            />
            <div class="flex gap-x-4 items-center">
                <img
                    src="/side-bar-1/logo.png"
                    class={`cursor-pointer p-2 duration-300 ${open && 'rotate-[360deg]'}`}
                />
                <h1
                    class={`origin-left text-white ${!open && 'scale-0'}`}
                >
                    { open && 'hello'}
                </h1>
            </div>
            <ul>
                {
                    Menus.map((m, i) => (
                        <li
                            key={i}
                            class={`
                                flex items-center text-gray-300 p-2 gap-x-2 hover:bg-white cursor-pointer
                                ${m.gap ? 'mt-6' : 'mt-1'}
                            `}
                        >
                            <img 
                                src={`/side-bar-1/${m.src}.png`}
                            />
                            <span class={`${!open && 'hidden'}`}>
                                {open && m.title}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}