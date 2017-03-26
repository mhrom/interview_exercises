#!/usr/bin/python

import sys

def overlapping():
    a = raw_input("Enter a list A:")
    b = raw_input("Enter a list B:")
    for i in a:
        for j in b:
            if i in j and j is not ' ': 
                print j

if __name__=="__main__":
    overlapping()
