'use client'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image';
import router from 'next/router'

export default function RegistrationForm() {

    return (
        <>
        <Header />
      <div className="flex justify-center mt-8">
      <div style={{ minWidth: "30%" }}>
        <div className="flex min-h-full shadow-lg flex-1 flex-col justify-center 
px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex justify-center">
              <Image src="/login.gif" height={100} width={100} alt="#"/>
            </div>
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 
tracking-tight text-gray-900">
              Crear una nueva cuenta
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Correo Electronico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 
text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contraseña
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 
shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirmpassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirmar contraseña
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 
text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 
px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm 
hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Registrar
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Ya tenes una cuenta?{" "}
              <span
                onClick={() => {
                  router.push("/");
                }}
                className="font-semibold leading-6 text-indigo-600 
hover:text-indigo-500 cursor-pointer"
              >
                Ingresar
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
      <Footer />
      </>
    );
  }