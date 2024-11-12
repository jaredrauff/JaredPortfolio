import { useState } from "preact/hooks";
import { ListItemProps } from "../core/utils/AppInterfaces.interfaces.ts";
import {components} from "../core/utils/AppConstants.constants.ts";

function ListItem({ className = "", title, children, href }: ListItemProps) {
    return (
        <li>
            <a
                href={href}
                className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 ${className}`}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="text-sm leading-snug text-gray-600">{children}</p>
            </a>
        </li>
    );
}

export default function NavigationMenuDemo() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const toggleMenu = (menuName: string) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <nav className="relative">
            <ul className="flex space-x-4">
                <li className="relative">
                    <button
                        className="px-4 py-2 font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                        onClick={() => toggleMenu("gettingStarted")}
                    >
                        Getting started
                    </button>
                    {activeMenu === "gettingStarted" && (
                        <div className="absolute left-0 mt-2 w-max bg-white shadow-lg">
                            <ul className="grid gap-3 p-6 md:w-96 lg:grid-cols-2">
                                <li className="row-span-3">
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-100 to-gray-200 p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="h-6 w-6 mb-4">
                                            {/* Replace with your logo or icon */}
                                            <img src="/logo.svg" alt="Logo" />
                                        </div>
                                        <div className="mb-2 text-lg font-medium">
                                            Your Project Name
                                        </div>
                                        <p className="text-sm leading-tight text-gray-600">
                                            Beautifully designed components that you can copy and
                                            paste into your apps. Accessible. Customizable. Open
                                            Source.
                                        </p>
                                    </a>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem
                                    href="/docs/primitives/typography"
                                    title="Typography"
                                >
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </div>
                    )}
                </li>
                <li className="relative">
                    <button
                        className="px-4 py-2 font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                        onClick={() => toggleMenu("components")}
                    >
                        Components
                    </button>
                    {activeMenu === "components" && (
                        <div className="absolute left-0 mt-2 w-max bg-white shadow-lg">
                            <ul className="grid gap-3 p-4 md:w-96 md:grid-cols-2 lg:w-[600px]">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
                <li>
                    <a
                        href="/docs"
                        className="px-4 py-2 font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                    >
                        Documentation
                    </a>
                </li>
            </ul>
        </nav>
    );
}