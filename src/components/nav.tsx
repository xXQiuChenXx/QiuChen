import ThemeToggle from "./themeToggle"

const Nav = () => {
  return (
   <header className="w-full">
    <nav className="flex items-center justify-between">
      <h3>test</h3>
      <h3>test2</h3>
      <div>
        <ThemeToggle />
      </div>
    </nav>
   </header>
  )
}

export default Nav