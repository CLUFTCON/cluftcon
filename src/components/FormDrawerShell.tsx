import { X } from 'lucide-react'
import { type ReactNode, useEffect, useRef } from 'react'

export function FormDrawerShell({
  open,
  onClose,
  eyebrow,
  title,
  titleId,
  children,
}: {
  open: boolean
  onClose: () => void
  eyebrow: string
  title: string
  titleId: string
  children: ReactNode
}) {
  const closeButton = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    const prior = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !panel.current) return
      const focusable = Array.from(panel.current.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), textarea:not(:disabled), select:not(:disabled), a[href]'))
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prior?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="drawer-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section ref={panel} className="form-drawer" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="drawer-head">
          <div><span className="mono-kicker">{eyebrow}</span><h2 id={titleId}>{title}</h2></div>
          <button ref={closeButton} type="button" onClick={onClose} aria-label={`Close ${title.toLowerCase()}`}><X /></button>
        </div>
        {children}
      </section>
    </div>
  )
}
