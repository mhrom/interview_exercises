#!/usr/bin/python

"""The list as input than sum and multiply of elements as output"""

import sys

def sum_of_elements():
    total = 0
    for i in sys.argv[1:]:
        total = total + int(i)
    return total

def multiply_of_elements():
    total = 1 
    for i in sys.argv[1:]:
        total = total * int(i)   
    return total


def main():
    sum = sum_of_elements()
    multiply = multiply_of_elements()
    print sum, multiply
    return sum, multiply


if __name__=="__main__":
    main()
