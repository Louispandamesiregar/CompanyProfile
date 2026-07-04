import * as React from "react"
import { companyInfo } from "@/data/content"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center justify-center text-center">
        <p className="font-semibold text-base">{companyInfo.name}</p>
        <p className="text-xs text-muted-foreground mt-1">
          &copy; {year} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

