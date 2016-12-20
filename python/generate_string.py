#!/usr/bin/python

"""Generate string repeating a several times one character"""

import sys

def generate_n_chars():
    ListOfSymbols = []
    n = input("Enter the length of string:")
    c = raw_input("Enter the character consists a string:")
    for i in range(n):
        ListOfSymbols.append(c)
    print ''.join(ListOfSymbols)

if __name__=="__main__":
    generate_n_chars()
