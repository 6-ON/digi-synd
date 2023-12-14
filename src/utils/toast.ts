import { createStandaloneToast } from '@chakra-ui/react'
import theme from '../theme'

export const { toast } = createStandaloneToast({
	theme,
	defaultOptions: { duration: 3000, isClosable: true, position: 'bottom-left' },
})
