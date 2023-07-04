import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
  

  function Password() {
    return (
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='email' />
            <FormHelperText>Password must contain at least 8 characters</FormHelperText>
        </FormControl>
    )
  }

  export default Password