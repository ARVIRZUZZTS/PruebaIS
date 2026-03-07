"use client"

import { useState } from "react"
import Header from "@/components/header";
import Nav from "@/components/nav";
import Btn from "@/components/btn"
import Btnn from "@/components/btnn"
import Alert from "@/components/alert"
import Warning from "@/components/warning"
import Confirm from "@/components/confirm"
import Sidebar from "@/components/sidebar"
import Breadcrumb from "@/components/breadcrumb"
import Input from "@/components/input"
import Checkbox from "@/components/checkbox"
import Radio from "@/components/radio"
import Select from "@/components/select"

import Image from "next/image";

export default function Home() {
  const [alertOpen, setAlertOpen] = useState(false)
  const [warningOpen, setWarningOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <main className="min-h-screen text-[var(--dark)] bg-gradient-to-br from-[var(--white)] via-[var(--whitte)] to-[var(--back)]">

      <header className="py-10 text-center bg-[var(--wine)] text-white">
        <h1 className="text-4xl font-bold">
          Propuesta de <span className="text-[var(--whitte)]">Stack</span><span className="text-[var(--pinky)]">Overflow</span>
        </h1>
      </header>

      <section id="paleta" className="py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Paleta de <span className="text-[var(--pinky)]">COLORES</span>
        </h2>

        <div className="flex justify-center">
          <Image
            src="/PaletteIS.png"
            alt="Paleta de colores"
            width={900}
            height={400}
          />
        </div>
      </section>

      {/* COMPONENTES */}
      <section className="componente py-10 px-10">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Diseño de Componentes
        </h2>

        {/*-----------------------------------------------------------------------*/}

        <div className="bg-[var(--softRed)] text-[var(--whitte)] p-10 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">
            Diseño de Header
          </h2>
          <div className="p-10 bg-white text-[var(--dark)] rounded-lg shadow">
            <Header />
          </div>
        </div>
        {/*-----------------------------------------------------------------------*/}
        <div className="bg-[var(--softRed)] my-10 text-[var(--whitte)] p-10 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">
            Diseño de Nav
          </h2>
          <div className="p-10 bg-white text-[var(--dark)] rounded-lg shadow">
            <Nav />
          </div>
        </div>
        {/*-----------------------------------------------------------------------*/}
        <div className="bg-[var(--softRed)] my-10 text-[var(--whitte)] p-10 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6">
            Diseño de Botones, Botones Negativos, Alerts, Warnings y Confirm
          </h2>

          <div className="p-10 bg-white text-[var(--dark)] rounded-lg shadow flex gap-6">

            <Btn onClick={() => setAlertOpen(true)}>
              Alert
            </Btn>

            <Btn onClick={() => setWarningOpen(true)}>
              Warning
            </Btn>

            <Btn onClick={() => setConfirmOpen(true)}>
              Confirm
            </Btn>

            <Btnn>
              Cancelar
            </Btnn>

          </div>

          <Alert
            open={alertOpen}
            message="Esto es un alert"
            onClose={() => setAlertOpen(false)}
          />

          <Warning
            open={warningOpen}
            message="Esto es un warning"
            onClose={() => setWarningOpen(false)}
          />

          <Confirm
            open={confirmOpen}
            message="¿Estás seguro?"
            onConfirm={() => {
              alert("Confirmado")
              setConfirmOpen(false)
            }}
            onCancel={() => setConfirmOpen(false)}
          />

        </div>

        {/*-----------------------------------------------------------------------*/}
        <div className="bg-[var(--softRed)] my-10 text-[var(--whitte)] p-10 rounded-xl">

          <h2 className="text-2xl font-semibold mb-6">
            Diseño de Sidebar
          </h2>

          <div className="p-10 bg-white text-[var(--dark)] rounded-lg shadow flex gap-6">

            <button
              onClick={() => setSidebarOpen(true)}
              className="px-5 py-2 rounded-[5px] bg-[var(--defRed)] text-[var(--whitte)]
              shadow-[0px_5px_0px_var(--isBlue)] hover:bg-[var(--pinky)] hover:rotate-[-2deg]"
            >
              Más
            </button>

          </div>
          
          {/*-----------------------------------------------------------------------*/}
          <div className="bg-[var(--softRed)] my-10 text-[var(--whitte)] p-10 rounded-xl">

            <h2 className="text-2xl font-semibold mb-6">
              Diseño de BreadCrumb
            </h2>

            <div className="p-10 bg-white text-[var(--dark)] rounded-lg shadow">

              <Breadcrumb />

            </div>

          </div>


        </div>

        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/*-----------------------------------------------------------------------*/}
        <div className="bg-[var(--softRed)] my-10 text-[var(--whitte)] p-10 rounded-xl">
                  
          <h2 className="text-2xl font-semibold mb-6">
            Diseño de Form, Input, Checkbox, Radio Button y Select
          </h2>
                  
          <div className="
            p-10
            bg-[var(--whitte)]
            text-[var(--isBlue)]
            rounded-[5px]
            border-y-[5px] border-x-[2px]
            border-[var(--softRed)]
            shadow-[0_0_9px_var(--wine)]
            flex flex-col gap-10
          ">
          
            {/* Nombre */}
            <Input placeholder="Nombre del comprador" />
                  
            {/* Email */}
            <Input placeholder="Correo electrónico" type="email" />
                  
            {/* Ciudad */}
            <Select />
                  
            {/* Tipo de inmueble */}
            <div className="flex flex-col gap-4">
              <Radio name="tipo" label="Casa" />
              <Radio name="tipo" label="Departamento" />
              <Radio name="tipo" label="Terreno" />
            </div>
                  
            {/* Servicios */}
            <div className="flex flex-col gap-4">
              <Checkbox label="Garaje" />
              <Checkbox label="Piscina" />
              <Checkbox label="Jardín" />
            </div>
                  
            {/* Botones */}
            <div className="flex gap-6">
              <Btn>Buscar</Btn>
              <Btnn>Cancelar</Btnn>
            </div>
                  
          </div>
                  
        </div>
      </section>

    </main>
  );
}