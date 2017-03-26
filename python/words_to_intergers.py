#!/usr/bin/python

import sys

def words_to_intergers():
    inputString= input('Please input a string to convert: ')
    
    for i in inputString.split(' '):
        print  i, len(i)


if __name__=="__main__":
    words_to_intergers()
