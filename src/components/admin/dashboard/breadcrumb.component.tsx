export default function BreadCrumb() {
  return (
    <nav
      className="flex px-5 py-3 mb-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Todos los Productos
          </a>
        </li>
      </ol>
    </nav>
  );
}
