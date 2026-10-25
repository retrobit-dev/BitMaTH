import type { CSSProperties } from 'react'

type Formula = {
  text: string
  top?: string
  right?: string
  bottom?: string
  left?: string
  size: number
  rot: number
  delay: string
}

const FORMULAS: Formula[] = [
  { text: 'a² + b² = c²', top: '9%', left: '5%', size: 22, rot: -6, delay: '0s' },
  { text: '∫ f(x) dx', top: '17%', right: '6%', size: 20, rot: 5, delay: '-4s' },
  { text: 'π ≈ 3,14159', top: '34%', left: '2%', size: 17, rot: 3, delay: '-9s' },
  { text: 'y = mx + c', top: '62%', right: '4%', size: 19, rot: -4, delay: '-2s' },
  { text: '√144 = 12', bottom: '16%', left: '6%', size: 17, rot: 6, delay: '-12s' },
  { text: 'sin²θ + cos²θ = 1', bottom: '7%', right: '8%', size: 16, rot: -3, delay: '-6s' },
  { text: '∑ n²', top: '46%', right: '2%', size: 16, rot: 8, delay: '-14s' },
  { text: 'x = (−b ± √(b²−4ac)) / 2a', top: '78%', left: '3%', size: 14, rot: -2, delay: '-7s' },
]

/** Rumus-rumus samar sebagai latar "papan tulis" di balik laci. */
export function FormulaBackdrop() {
  return (
    <div className="formulas" aria-hidden="true">
      {FORMULAS.map((item) => (
        <span
          key={item.text}
          className="formula"
          style={
            {
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              fontSize: item.size,
              animationDelay: item.delay,
              '--rot': `${item.rot}deg`,
            } as CSSProperties
          }
        >
          {item.text}
        </span>
      ))}
    </div>
  )
}
