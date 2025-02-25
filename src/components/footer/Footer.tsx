import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-blue-800 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/carlos-h-dev/" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/CrMessiProgrammer" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a href="https://crmessiprogrammer.github.io/portfolio_tjs06/" target="_blank">
                            <EnvelopeSimple size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer