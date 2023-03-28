import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <span className="text-white">Logo</span>
              </Link>
              <Link href={"/add"}>
                <button className="text-gray-300 hover:bg-blue-200 hover:text-black px-3 py-2 ml-3 rounded-md text-sm font-medium sm:hidden">
                  Add Product
                </button>
              </Link>
            </div>
            <div className="hidden sm:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </span>
                </Link>
                <Link href={"/add"}>
                  <button className="text-gray-300 hover:bg-blue-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                    Add Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
