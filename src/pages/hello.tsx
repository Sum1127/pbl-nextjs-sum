import { Inter } from "next/font/google";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { MdBuild , MdCall } from "react-icons/md"
import { Heading } from '@chakra-ui/react'


const inter = Inter({ subsets: ["latin"] });

export default function Hello() {
  return (
    <Box>
      <Box>
        <Heading as='h1' size='3xl' w="200px" noOfLines={1} bgGradient='linear(to-r,red.500, orange.500)' bgClip='text'>Hello!</Heading>
        <Heading as='h2' size='md' w="180px" noOfLines={1} bgGradient='linear(to-r,blue.400, pink.400)' bgClip='text'>This is Sum&apos;s site</Heading>
        <Heading as='h2' size='md' w="400px" noOfLines={1} bgGradient='linear(to-r,yellow.600, black)' bgClip='text'>This website is in preparation</Heading>
      </Box>
      <Box backgroundColor="blue.100">
        <Stack direction='row' spacing={4}>
          <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
          Settings
          </Button>
          <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline' _hover={{
            colorScheme:'blue.500',
            variant:'outline',
            color: 'white',
            bgColor: 'blue.300',
            }}>
          Call us
          </Button>
        </Stack>
      </Box>
    </Box>
    
  );
}