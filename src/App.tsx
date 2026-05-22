import { CalendarRange, Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-gradient-to-br from-background via-muted/40 to-muted/80 p-6">
      <Card className="w-full max-w-lg shadow-md">
        <CardHeader className="items-center px-8 pt-10 pb-6 text-center">
          <Badge className="mb-4 uppercase tracking-wide">
            University of Toronto
          </Badge>
          <CardTitle className="font-heading text-balance text-3xl tracking-tight sm:text-4xl">
            Computational Linguistics Conference
          </CardTitle>
          <CardDescription className="mx-auto mt-4 max-w-prose pt-2 text-base text-muted-foreground">
            The first conference dedicated to computational linguistics at the
            University of Toronto. Coming&nbsp;September&nbsp;2026!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5 px-8 pb-10 text-center">
          <div className="flex flex-col items-center gap-2 rounded-xl border bg-muted/50 px-4 py-6 text-muted-foreground sm:flex-row sm:justify-center sm:gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <CalendarRange className="size-5 shrink-0" aria-hidden />
              <span>September 2026</span>
            </div>
            <span className="hidden text-border sm:inline" aria-hidden>
              |
            </span>
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="size-5 shrink-0 text-primary" aria-hidden />
              <span>First edition</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Details about the program, submissions, and registration will appear here soon.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
