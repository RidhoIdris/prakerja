import Head from 'next/head'
import {useState} from 'react'

export default function Home() {

  const [focus, setFocus] = useState('')

  const hancleFocus = (e)=>
  {
    setFocus(e.target.name)
    console.log(focus)
  }

  return (
    <div className="font-quicksand">
      <Head>
        <title>Kartu Prakerja</title>
        <link rel="icon" href="/img/icon/garuda.png" />
      </Head>
      <div className="min-h-screen bg-blue-400 flex w-full">
        <div className="w-full lg:w-40p xl:w-25p bg-white min-h-full px-6 py-5 md:px-8 md:py-10 text-sm">
          <a href="#" className="flex items-center space-x-2">
            <img src="/img/icon/left-arrow.svg" />
            <span className="text-blue-500">Kembali</span>
          </a>
          <img src="/img/logo-kartu-prakerja.png" className="my-12 w-50p" />
          <div className="text-blue-500">
            <h1 className="text-lg font-bold">Login</h1>
            <p className="text-base mt-2">Bagi kamu yang sudah terdaftar, silakan login</p>
          </div>
          <form className="mt-10">
            <div className="bg-white shadow-md">
              <div className={`flex flex-col px-4 py-2 ${focus === 'email' ? 'border-blue-500' :'border-white'} border-l-4`}>
                <label className=" text-xs">Email<br/>
                <input onBlur={()=>setFocus('')} onFocus={(e)=>hancleFocus(e)} className="text-sm focus:outline-none text-blue-500" name="email" type="email" placeholder="alamat@email.com"/>
                </label>
              </div>
              <div className={`flex flex-col px-4 py-2 ${focus === 'password' ? 'border-blue-500' :'border-white'} border-l-4`}>
                <label className=" text-xs">Password<br/>
                <input onBlur={()=>setFocus('')} onFocus={(e)=>hancleFocus(e)} className="text-sm focus:outline-none text-blue-500" name="password" type="password" placeholder="********"/>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox"/>
                <span class="ml-2 text-xs text-gray-500">Ingat saya</span>
              </label>
              <a href="#" className="text-xs text-blue-500 hover:underline">Lupa Passowrd?</a>
            </div>
            <div className="mt-16 space-x-4">
              <button type="button" className="rounded px-10 py-2 hover:bg-blue-400 bg-blue-500 text-white">Login</button>
              <button type="button" className="rounded px-10 py-2 hover:bg-blue-400 hover:text-white border border-blue-400 text-blue-500">Daftar</button>
            </div>
          </form>
        </div>
        <div className="flex-1 flex justify-center items-end -lg:hidden">
          <img src="/img/login-illustration.png" className="w-80p object-cover"/>
        </div>
      </div>
    </div>
  )
}
