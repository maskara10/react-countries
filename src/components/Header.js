function Header({ children, fonte }) {
  let size = 'text-xl';

  if (fonte === 'gigante') {
    size = 'text-3xl';
  }
  return (
    <header>
      <div className="bg-red-500 mx-auto p-4">
        <h1 className={`text-center font-semibold ${size}`}>{children}</h1>
      </div>
    </header>
  );
}

export default Header;
