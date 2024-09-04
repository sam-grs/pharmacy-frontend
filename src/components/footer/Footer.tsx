import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

export function Footer() {
    const data = new Date().getFullYear()

    return (
        <div className="flex justify-center bg-sky-700 text-white">
            <div className="container flex flex-col items-center py-4 gap-2">
                <h4>Projeto farmácia {data}</h4>

                <div className="flex gap-2">
                    <a href="https://github.com/sam-grs">
                        <GithubLogo size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/samira-grossi/">
                        <LinkedinLogo size={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}
