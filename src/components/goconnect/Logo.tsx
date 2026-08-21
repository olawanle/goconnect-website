import { LOGO_MARK_PATH } from "@/data/goconnect-v2"

const SIZES = {
  nav: 34,
  footer: 28,
} as const

export function Logo({ variant = "nav" }: { variant?: keyof typeof SIZES }) {
  const size = SIZES[variant]

  return (
    <img
      src={LOGO_MARK_PATH}
      alt="GoConnect"
      width={size}
      height={size}
      className="block shrink-0 object-contain"
      style={{ width: size, height: size }}
    />
  )
}
