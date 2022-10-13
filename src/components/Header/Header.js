import { Box, Button, Flex, HStack, Icon } from '@chakra-ui/react';
import { IoLogoGameControllerB } from 'react-icons/io';
import * as dataService from '../../services/dataService';

let Header = () => {

    return (
        <>
            <Box bg='#213951' color='white'>
                <Flex h={12} alignItems={'center'} justifyContent={'space-between'} px={4} py={7}>
                    <HStack spacing={3} alignItems={'center'}>
                        <Icon as={IoLogoGameControllerB} />
                        <Box fontSize={'18px'} fontWeight='bold'>Esports</Box>
                        <Button colorScheme='green' onClick={() => dataService.fetchAllMatches()}>Sort by league</Button>
                    </HStack>
                </Flex>
            </Box>
        </>
    );
}

export default Header;