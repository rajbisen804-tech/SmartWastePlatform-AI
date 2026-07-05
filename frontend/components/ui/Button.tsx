import { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-700",
        className
      )}
      {...props}
    />
  )
}