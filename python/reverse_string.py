#!/usr/bin/python

"""The script is reversed input string"""

import sys

def main():
    in_string = raw_input("Enter a string that must be reveresed:")
    ListOfString = []
    ListOfReverseSymbols = []
    for i in in_string:
        ListOfString.append(i)
    for i in ListOfString[::-1]:
        for j in i:
            ListOfReverseSymbols.insert(0,j)
    ReverseString = ''.join(ListOfReverseSymbols[::-1])
    print 'The reversed string is --> "' + ReverseString + '"'
    return ListOfReverseSymbols[::-1]

if __name__=="__main__":
    main()
