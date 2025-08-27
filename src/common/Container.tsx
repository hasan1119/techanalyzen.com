import { cn } from '@/lib/utils'
interface ContainerProps {
  className?: string
  children: React.ReactNode
}

const Container = ({ className, children }: ContainerProps) => {
  return <div className={cn('mx-auto max-w-[1440px] w-full px-7 lg:px-12 xl:px-16', className)}>{children}</div>
}

export default Container
