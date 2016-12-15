#!/usr/bin/python

import sys

def is_palindrome():
    InputString = raw_input('Please enter the input word to check if it is palindrome:')
    ReverseList = []
    for i in InputString:
        ReverseList.insert(0,i)
    ReverseString = ''.join(ReverseList)
    
    if InputString == ReverseString:
        print "The word is palindrome"
        return True
    elif InputString != ReverseString:
        print "The word is not palindrome"
        return False

if __name__ == "__main__":
    is_palindrome()
