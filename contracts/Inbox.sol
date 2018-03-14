pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    // Constructor
    function Inbox(string initMessage) public {
        message = initMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}