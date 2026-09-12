/* 404 Page - Displays when a user attempts to access a non-existent route - translate to the language of the user */
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-[#FFFFFF] p-4">
      <div className="text-center border border-[#262626] bg-[#121212] p-10 max-w-md w-full">
        <h1 className="text-5xl font-extrabold mb-4 font-mono text-[#FFFFFF]">404</h1>
        <p className="text-base text-[#A3A3A3] mb-6">Página não encontrada.</p>
        <a
          href="/"
          className="inline-block bg-[#FFFFFF] text-[#0A0A0A] font-extrabold text-xs uppercase tracking-wider px-6 py-3 hover:bg-[#F4F4F2]"
        >
          Voltar para o Início
        </a>
      </div>
    </div>
  )
}

export default NotFound
