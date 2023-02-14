import { CSSProperties, HTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'

interface OuterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const OuterContainer = forwardRef<HTMLDivElement, OuterProps>(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

interface InnerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export const InnerContainer = forwardRef<HTMLDivElement, InnerProps>(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})


interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  style?: CSSProperties | undefined | any;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

export default Container;