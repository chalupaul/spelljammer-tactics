import { 
    Box, 
    useColorModeValue,
    Heading,
    HStack,
    Text
} from "@chakra-ui/react"

const formatDice = (face) => {
    switch (face) {
        case 6:
            return face;
        case undefined:
            return `1+`;
        default:
            return `${face}+`;
    }
}

const formatCurrency = (money) => {
    return <Text>{money}<Text as='i'>₽</Text></Text>;
}

export const ItemBox = ({item}) => {
    const minDice = formatDice(item.mindice);
    const cost = formatCurrency(item.cost);
    return (
        <Box
            maxW='xs'
            bg={useColorModeValue('white', 'gray.800')}
            shadow={'lg'}
            rounded={'md'}
            p={4}
            textAlign={'center'}
        >
            <Heading size={'lg'} fontFamily={'body'}>
                {item.name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
                <HStack spacing="12px" justify="center">
                <Box>
                    {item.type}
                </Box>
                <Box>
                    {minDice}
                </Box>
                <Box>
                    {cost}
                </Box>
                </HStack>
            </Text>
            <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
            >
                {item.desc}
            </Text>
        </Box>
    )
}