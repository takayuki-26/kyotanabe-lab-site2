type DividerType = "wave" | "tech" | "cyber" | "simple"
type DividerDirection = "dark-to-light" | "light-to-dark"

interface SectionDividerProps {
  type?: DividerType
  direction?: DividerDirection
  className?: string
  cyberPosition?: "top" | "bottom" | "both"
}

export default function SectionDivider({
  type = "wave",
  direction = "dark-to-light",
  className = "",
  cyberPosition = "both",
}: SectionDividerProps) {
  const getClassName = () => {
    switch (type) {
      case "wave":
        return `wave-divider wave-divider-${direction} ${className}`
      case "tech":
        return `tech-divider tech-divider-${direction} ${className}`
      case "cyber":
        return `cyber-divider cyber-divider-${cyberPosition} ${className}`
      case "simple":
      default:
        return `section-divider section-divider-${direction} ${className}`
    }
  }

  return <div className={getClassName()} />
}
