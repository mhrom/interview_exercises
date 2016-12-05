#!/usr/bin/python

import sys


def main():
    
    len_string = 0
    len_array = 0
    string_first = raw_input ('Enter a string:')
    string_second = raw_input ("Enter an array of elements separates by space:")

    if not string_first:
        print "The string is empty"
    elif string_first:
        for i in string_first:
            if i:
                len_string += 1
        print 'The length of string is ' + str(len_string)

    if not string_second:
        print "The array cannot be empty"
    elif string_second:
        array_of_strings = string_second.split()
        for i in array_of_strings:
            if i:
                len_array += 1
        print 'The length of array is ' + str(len_array)

if __name__=="__main__":
    main()
    
