"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { profile } from "@/lib/portfolio"

export default function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle")
  const timer = useRef<ReturnType<typeof setTimeout>>()
  useEffect(() => () => clearTimeout(timer.current), [])
  async function copy() {
    clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(profile.email)
      setStatus("copied")
    } catch {
      setStatus("error")
    }
    timer.current = setTimeout(() => setStatus("idle"), 4000)
  }
  return <span className="copy-email-wrap"><button className="copy-email" onClick={copy} aria-label={status === "copied" ? "Email address copied" : "Copy email address"}>{status === "copied" ? <Check size={16} /> : <Copy size={16} />}</button><span className="copy-status" role="status">{status === "copied" ? "Copied!" : status === "error" ? "Select the email to copy it." : ""}</span></span>
}
