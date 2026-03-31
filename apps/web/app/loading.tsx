export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex gap-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.3s]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.15s]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-muted-foreground/60" />
      </div>
    </div>
  )
}
