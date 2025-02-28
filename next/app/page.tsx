"use client"

import { getTodos } from "@/services/handleApiCall"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function Home() {

  const [res, setRes] = useState("")

  useEffect(()=> {
    (async () => {
      const res = await getTodos()

      if(!res.isError)
        return setRes(`[${res.response.id}] ${res.response.title}`)
    })()
  }, [])


  return (
    <div>
      Resposeta: {res}
    </div>
  );
}
