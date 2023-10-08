import { Modal, Button, ModalOverlay, ModalContent, 
    ModalHeader, ModalCloseButton, ModalBody, 
    ModalFooter, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

    export default function GameOver({ isOpen, result, handleRestart }) {
        return (
          <Modal isOpen={isOpen} onClose={handleRestart}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Game Over</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {result === 'win' && (
                  <Text>You won the game!</Text>
                )}
                {result === 'lose' && (
                  <Text>You lost the game!</Text>
                )}
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleRestart}>Restart</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        );
      }

      GameOver.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        result: PropTypes.string.isRequired,
        handleRestart: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
      }