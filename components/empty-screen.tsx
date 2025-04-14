import { UseChatHelpers } from 'ai/react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to your Interactive Stock Market Chatbot!
        </h1>
        <p className="leading-normal text-sm">
          This chatbot is designed to provide insights into stock market planning and investing.{' '}
          <span className="font-muted-foreground">
            Get real-time stock data, explore investment strategies, and make informed decisions.
          </span>
        </p>
      </div>
    </div>
  )
}