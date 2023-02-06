import {useCallback, useEffect, useState} from "react";
import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Button,
  Heading,
  Text,
  Badge,
  useToast
} from '@chakra-ui/react';
import {useWeb3React} from "@web3-react/core";
import useCourses from '../../hooks/useCourses'

const Home = () => {
  const {active, account} = useWeb3React()
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState()
  const [desc, setDesc] = useState()
  const [category, setCategory] = useState()
  const coursesContract = useCourses();
  const toast = useToast();

  const getCourses = useCallback(async () => {
    if (coursesContract) {
      const result = await coursesContract?.methods?.getCoursesByAuthor(account)?.call()
      console.log('courses', result)
    }
  }, [coursesContract])

  useEffect(() => {
    getCourses()
  }, [getCourses])


  const createNewCourse = async () => {
    setIsLoading(true)
    coursesContract?.methods?.createNewCourse(name, category, desc)?.send({
      from: account
    })
      .on('transactionHash', (txHash) => {
        toast({
          title: 'Transaction send',
          description: txHash,
          status: 'info'
        })
      })
      .on('receipt', () => {
        toast({
          title: 'Transaction confirmed',
          description: 'Ready',
          status: 'success'
        })
        setIsLoading(false)
      })
      .on('error', (err) => {
        toast({
          title: 'Transaction fail',
          description: err.message,
          status: 'error'
        })
        setIsLoading(false)
      })
  }

  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} w={'50%'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Create new course</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              This course can change the world
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={'white'}
            boxShadow={'lg'}
            p={8}>
            {
              !active
                ?
                <Stack spacing={4}>
                  <Badge py={2} textAlign={'center'} colorScheme={'red'}>Connect Wallet before that</Badge>
                </Stack>
                :
                <Stack spacing={4}>
                  <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input onChange={(e) => setName(e.target.value)} type="text"/>
                  </FormControl>
                  <FormControl id="description">
                    <FormLabel>Description</FormLabel>
                    <Input onChange={(e) => setDesc(e.target.value)} type="text"/>
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Category</FormLabel>
                    <Select
                      placeholder={'Select category'}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value={'Information Techonolgies'}>Information Technologies</option>
                      <option value={'Graphic Design'}>Graphic Design</option>
                    </Select>
                  </FormControl>
                  <Stack spacing={10}>

                    <Button
                      onClick={() => {
                        createNewCourse()
                      }}
                      isLoading={isLoading}
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}>
                      Continue
                    </Button>
                    {
                      isLoading
                        ? <Badge py={2} textAlign={'center'} colorScheme={'red'}>This process could take a while</Badge>
                        : ''
                    }

                  </Stack>
                </Stack>
            }

          </Box>
        </Stack>
      </Flex>
    </>
  )

}

export default Home;
