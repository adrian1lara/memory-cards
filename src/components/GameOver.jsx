import { Modal, Button, ModalOverlay, ModalContent, 
    ModalHeader, ModalBody, 
    ModalFooter, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

    export default function GameOver({ isOpen, result, handleRestart }) {
        return (
          <Modal isOpen={isOpen} onClose={handleRestart}
            isCentered
            size={{ base: 'xs', md: 'md' }}
          >
            <ModalOverlay />
            <ModalContent
              bg={'#232D3F'}
              color={'white'}
              borderRadius={'lg'}
            >
              <ModalHeader fontSize={"2xl"}>Game Over</ModalHeader>
              <ModalBody> 
                {result === 'win' && (
                  <Text fontSize={"2xl"}>You won the game!</Text>
                )}
                {result === 'lose' && (
                  <Text fontSize={"2xl"}>You lost the game!</Text>
                )}
                
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleRestart}>Restart</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )
      }

      GameOver.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        result: PropTypes.string.isRequired,
        handleRestart: PropTypes.func.isRequired,
      }