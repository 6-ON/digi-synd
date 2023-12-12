import { Tooltip, TooltipProps } from '@chakra-ui/react'
import React, { FC } from 'react'

const AppTooltip: FC<TooltipProps> = (props) => {
	return (
		<Tooltip hasArrow rounded="4" {...props}>
			{props.children}
		</Tooltip>
	)
}

export default AppTooltip
