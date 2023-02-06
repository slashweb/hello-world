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
import useUsers from '../../hooks/useUsers'

const courseCreator = () => {


  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Creating new content</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              To start creating content
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
                    <Input onChange={(e) => state.name = e.target.value} type="text"/>
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Category</FormLabel>
                    <Select
                      placeholder={'Select category'}
                      onChange={(e) => state.category = e.target.value}
                    >
                      <option value={'Information Techonolgies'}>Information Technologies</option>
                      <option value={'Graphic Design'}>Graphic Design</option>
                    </Select>
                  </FormControl>
                  <Stack spacing={10}>

                    <Button
                      onClick={() => {
                        createNewUser()
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

export default courseCreator;
