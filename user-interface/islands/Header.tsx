import { useState } from "preact/hooks";
import { ListItemProps } from "../core/utils/AppInterfaces.interfaces.ts";
import { components } from "../core/utils/AppConstants.constants.ts";

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

export default function Header() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const toggleMenu = (menuName: string) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
            <div className="flex h-14 items-center px-4">
                <div className="mr-4 hidden md:flex"><a className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                        <rect width="256" height="256" fill="none"></rect>
                        <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor"
                              stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line>
                        <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="32"></line>
                    </svg>
                    <span className="hidden font-bold lg:inline-block">shadcn/ui</span></a>
                    <nav className="relative flex items-center gap-4 text-sm xl:gap-6">
                        <ul className="flex space-x-4">
                            <li className="relative">
                                <button
                                    className="transition-colors hover:text-foreground/80 text-foreground/60"
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
                                                        <img
                                                            src="/logo.svg"
                                                            alt="Logo"
                                                        />
                                                    </div>
                                                    <div className="mb-2 text-lg font-medium">
                                                        Your Project Name
                                                    </div>
                                                    <p className="text-sm leading-tight text-gray-600">
                                                        Beautifully designed components
                                                        that you can copy and paste into
                                                        your apps. Accessible.
                                                        Customizable. Open Source.
                                                    </p>
                                                </a>
                                            </li>
                                            <ListItem href="/docs" title="Introduction">
                                                Re-usable components built using Radix
                                                UI and Tailwind CSS.
                                            </ListItem>
                                            <ListItem
                                                href="/docs/installation"
                                                title="Installation"
                                            >
                                                How to install dependencies and
                                                structure your app.
                                            </ListItem>
                                            <ListItem
                                                href="/docs/primitives/typography"
                                                title="Typography"
                                            >
                                                Styles for headings, paragraphs,
                                                lists...etc
                                            </ListItem>
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className="relative">
                                <button
                                    className="transition-colors hover:text-foreground/80 text-foreground/60"
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
                            <li className="relative flex items-center">
                                <a
                                    href="/docs"
                                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                                >
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground py-2 -ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R15u6ja:"
                    data-state="closed">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="!size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
                    </svg>
                    <span className="sr-only">Toggle Menu</span></button>
                <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <button
                            className="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64">
                            <span className="hidden lg:inline-flex">Search documentation...</span><span
                            className="inline-flex lg:hidden">Search...</span><kbd
                            className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"><span
                            className="text-xs">⌘</span>K</kbd></button>
                    </div>
                    <nav className="flex items-center gap-0.5">
                        <button
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0">
                            <a target="_blank" rel="noreferrer" href="https://github.com/shadcn-ui/ui">
                                <svg viewBox="0 0 438.549 438.549" className="h-4 w-4">
                                    <path fill="currentColor"
                                          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                                </svg>
                                <span className="sr-only">GitHub</span></a></button>
                        <button
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground py-2 group/toggle h-8 w-8 px-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-sun hidden [html.dark_&amp;]:block">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2"></path>
                                <path d="M12 20v2"></path>
                                <path d="m4.93 4.93 1.41 1.41"></path>
                                <path d="m17.66 17.66 1.41 1.41"></path>
                                <path d="M2 12h2"></path>
                                <path d="M20 12h2"></path>
                                <path d="m6.34 17.66-1.41 1.41"></path>
                                <path d="m19.07 4.93-1.41 1.41"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-moon hidden [html.light_&amp;]:block">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                            <span className="sr-only">Toggle theme</span></button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
