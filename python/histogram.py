#!/usr/bin/python

"""Build a histogram getting values from list"""

import sys
InputOfNumbers = sys.argv[1:] 
def histogram(ListOfNumbers):
    for i in ListOfNumbers:
        print '*'*int(i)

if __name__=="__main__":
    histogram(InputOfNumbers)
