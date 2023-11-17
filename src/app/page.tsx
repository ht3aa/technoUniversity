export default function Home() {
  return (
    <header 
      className="
      bg-[--primary-color] 
      flex 
      align-center 
      justify-between 
      text-sm
      p-[--wrapper-padding]
      py-3
      ">
      <ul className="
        flex
        align-center
        w-[55%]
        ">
        <li className="mr-4">
          <a href="/about">Staff</a>
        </li>
        <li className="mr-4">
          <a href="/about">Researchers</a>
        </li>
        <li className="mr-4">
          <a href="/about">Journals</a>
        </li>
        <li className="mr-4">
          <a href="/about">Magazines</a>
        </li>
        <li className="mr-4">
          <a href="/about">Sitemap</a>
        </li>
        <li>
          <a href="/about">Admissions</a>
        </li>
      </ul>
      <ul className="
        flex
        align-center
        ">
        <li className="mr-4">
          <a href="/about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </a>
        </li>
        <li className="mr-4">
          <a href="/about">EN</a>
        </li>
        <li>
          <a href="/about">AR</a>
        </li>
      </ul>
    </header>
  );
}
