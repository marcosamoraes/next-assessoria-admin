import { AiFillHeart } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="w-full border-t-2 p-5 flex justify-center">
      Desenvolvido com &nbsp; <AiFillHeart className="text-red-500 mt-1" />
      &nbsp; por &nbsp;
      <a href="https://marcosamoraes.com" target="_blank">
        <b>Marcos Moraes</b>
      </a>
    </footer>
  )
}
