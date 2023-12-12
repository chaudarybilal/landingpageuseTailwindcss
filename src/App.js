import image2 from "../src/Images/image2.png";
function App() {
  return (
    <>
      <div className="bg-slate-500">
        {/* Navbar start */}
        <nav className="w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-4 ">
          <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
          <ul className="md:flex hidden class font-semibold">
            <li class=" mx-[10px] cursor-pointer">Home</li>
            <li class="mx-[10px] cursor-pointer">About</li>
            <li class="mx-[10px] cursor-pointer">Contact</li>
          </ul>
          <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
            Login/SignUp
          </div>
          <div className="md:hidden">
            <a class="text-4xl" href="/#">
              &#8801;
            </a>
          </div>
        </nav>
        {/* Navbar ending */}
        {/* image section start */}
        <header className="w-full h-auto">
          <img
            class="w-full hidden md:block"
            src="https://images.pexels.com/photos/4057659/pexels-photo-4057659.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="webimage"
          />
          <img
            class="w-full md:hidden"
            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="webimage"
          />
        </header>
        {/* image section completed */}
        {/* our student section */}
        <div class="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
          <div class="w-full h-auto flex flex-wrap flex-col items-center ">
            <p class="text-indgo-800 font-bold text-3xl md:text-4xl text-center">
              "Pure Hardwork ,No Shortcuts!"
            </p>
            <div class="w-36 h-1 border-b-4 border-yellow-400  mt-2 rounded-2xl md:mt-4 mb-12"></div>
          </div>
          <div className="w-full flex flex-wrap justify-evenly">
            <div class="w-46 flex flex-col items-center mb-11">
              <img class="h-44 w-44" src={image2} alt="" />
              <p class="text-3xl text-white font-bold">600+</p>
              <p class="text-2xl text-gray-800 font-bold">Different Courses</p>
            </div>
            <div class="w-46 flex flex-col items-center mb-11">
              <img class="h-44 w-44" src={image2} alt="" />
              <p class="text-3xl text-white font-bold">700,000+</p>
              <p class="text-2xl text-gray-800 font-bold">Student Enrolled</p>
            </div>
            <div class="w-46 flex flex-col items-center mb-11">
              <img class="h-44 w-44" src={image2} alt="" />
              <p class="text-3xl text-white font-bold">10,000+</p>
              <p class="text-2xl text-gray-800 font-bold">Successful Transition</p>
            </div>
          </div>
        </div>
        {/* our student section ends hare */}
      </div>
    </>
  );
}

export default App;
