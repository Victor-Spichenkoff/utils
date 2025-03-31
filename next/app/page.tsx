"use client"

import { Header } from "@/components/template/header"
import { HubButton } from "@/components/template/HubButton"


export default function Home() {
  return (
    <div>
      <Header>Home</Header>
      <div className="flex flex-col gap-3">
        <HubButton to="/form" label="Form"/>
        <HubButton to="/darkMode" label="Dark/Light Mode"/>
      </div>
    </div>
  )
}
