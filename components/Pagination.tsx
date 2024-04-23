export default function Pagination({ jobsPerPage, totalJobs, paginate }: { jobsPerPage: number, totalJobs: number, paginate: (value:number) => any }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="flex justify-center my-10">
      <ul className="flex items-center -space-x-px h-10 text-base">
        {pageNumbers.map(page => (
          <li key={page}>
            <a 
              href="#!" 
              onClick={() => paginate(page)}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-200 dark:active:bg-gray-200 dark:hover:text-white"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}