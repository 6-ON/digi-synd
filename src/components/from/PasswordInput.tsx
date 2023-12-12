import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons"
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"
import { useState } from "react"

export function PasswordInput() {
	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)

	return (
		<InputGroup size="md">
			<Input
				// pr="4.5rem"
				fontSize="sm"
				ms="4px"
				borderRadius="15px"
				mb="24px"
				size="lg"
				type={show ? 'text' : 'password'}
				placeholder="Enter password"
			/>
			<InputRightElement pr="1rem">
				<Button size="sm" onClick={handleClick}>
					{show ? <ViewOffIcon /> : <ViewIcon />}
				</Button>
			</InputRightElement>
		</InputGroup>
	)
}