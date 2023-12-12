
function App() {
  return (
    <>
   <div className="bg-slate-900">
   {/* Navbar start */}
    <nav className="w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-4 ">
      <div className="text-2xl text-indigo-700 font-bold">
        PW Skills
      </div>
      <ul className="md:flex hidden class font-semibold">
        <li class=" mx-[10px] cursor-pointer">Home</li>
        <li class="mx-[10px] cursor-pointer">About</li>
        <li class="mx-[10px] cursor-pointer">Contact</li>
      </ul>
      <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
        Login/SignUp
      </div>
      <div className="md:hidden">
        <a class="text-4xl" href="" >&#8801;</a>
      </div>
    </nav>
    {/* Navbar ending */}
   </div>
   </>
  );
}

export default App;
