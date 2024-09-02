import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="container mx-auto px-2 lg:px-28 2xl:px-52 mt-14 mb-8">
            <div className="rounded-lg border-dark-100 dark:border-dark-700 shadow dark:shadow-dark-700 mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/#projects" className="mr-4 hover:underline md:mr-6">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/#experience" className="mr-4 hover:underline md:mr-6">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link href="/#technologies" className="mr-4 hover:underline md:mr-6">
                            Technologies
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}