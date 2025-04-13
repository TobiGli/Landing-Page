'use client'

const FooterNavigation = [
    {
      category: 'Resources',
      links: [
        { name: 'Contacto', href: '#' },
        { name: 'Trabaja con Nosotros', href: '#' },
      ],
    },
    {
      category: 'Follow us',
      links: [
        { name: 'Instagram', href: '#' },
        { name: 'WhatsApp', href: '#' },
      ],
    },
    {
      category: 'Legal',
      links: [
        { name: 'Politica de privacidad', href: '#' },
        { name: 'Terminos y condiciones', href: '#' },
      ],
    },
  ];

export default function Footer() {
    return (
      <>
      <footer className="bg-white dark:bg-gray-900 relative overflow-hidden">

      <div
    aria-hidden="true"
    className="absolute inset-x-0 top-[calc(100%-13rem)] z-0 transform-gpu blur-3xl sm:top-[calc(100%-30rem)]"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    />
  </div>

  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0 relative pb-20">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 me-3"
            alt="FlowBite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Libros Unidos
          </span>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 relative pb-20">
        {FooterNavigation.map((section, index) => (
          <div key={index}>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {section.category}
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {section.links.map((link) => (
                <li key={link.name} className="mb-4">
                  <a href={link.href} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2025 <a href="https://github.com/TobiGli" className="hover:underline">Tobias Gomez™</a>. All Rights Reserved.
      </span>
    </div>
  </div>
</footer>
</>
    )
}