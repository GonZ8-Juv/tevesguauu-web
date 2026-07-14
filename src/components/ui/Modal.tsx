import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  title: string
  children: ReactNode
  onClose: () => void
}

function Modal({ isOpen, title, children, onClose }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2B2B2B]/45 p-4"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative max-h-[86vh] w-full max-w-3xl overflow-y-auto rounded-[24px] bg-white p-6 shadow-[0_24px_80px_rgba(232,90,147,0.28)] sm:p-8"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <h3 id="modal-title" className="text-2xl font-extrabold text-[#E85A93] sm:text-3xl">
            {title}
          </h3>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Cerrar recomendación"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF8FA] text-2xl font-bold text-[#E85A93] transition duration-200 hover:bg-[#F7AFC5]/35"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}

export default Modal
