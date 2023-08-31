import { I18nOptions, TxPath, i18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900',
  {
    variants: {
      variant: {
        default:
          'bg-cyan-900 text-zinc-100 hover:bg-cyan-800',
        destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'text-zinc-900 text-zinc-100 outline outline-1 outline-cyan-300',
        subtle:
          'hover:bg-cyan-200 bg-cyan-100 text-zinc-900',
        ghost:
          'bg-transparent hover:bg-cyan-100 hover:text-zinc-900 text-zinc-100 data-[state=open]:bg-transparent data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        xs: 'h-8 px-1.5 rounded-sm',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  tx?: TxPath;
  txOption?: I18nOptions;
  text?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {className, children, variant, isLoading, size, tx, txOption, text, ...rest} = props

    const context = tx ? i18n.t(tx, txOption) : text;
    const content = children ?? context;

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...rest}>
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {content}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
