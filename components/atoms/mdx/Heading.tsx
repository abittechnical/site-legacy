import { x } from '@xstyled/styled-components'

interface HeadingProps {
  [p: string]: any
}
export const Heading = (props: HeadingProps) => (
  <x.h1
    mt={1}
    fontSize={{ _: '4xl', sm: '5xl', lg: '6xl' }}
    fontWeight="bold"
    letterSpacing="tight"
    fontFamily="sunny"
    className="casual-text"
    {...props}
  />
)
