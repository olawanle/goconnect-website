import { LOGO_PATH } from "@/data/goconnect-v2"

const VARIANTS = {
  nav: { box: 32, img: 67, left: -17, top: -11 },
  footer: { box: 28, img: 58, left: -15, top: -9 },
} as const

export function Logo({ variant = "nav" }: { variant?: keyof typeof VARIANTS }) {
  const { box, img, left, top } = VARIANTS[variant]

  return (
    <span className="relative block shrink-0 overflow-hidden rounded-sm" style={{ width: box, height: box }}>
      <img
        src={LOGO_PATH}
        alt="GoConnect"
        width={img}
        height={img}
        className="absolute"
        style={{ left, top, width: img, height: img }}
      />
    </span>
  )
}
