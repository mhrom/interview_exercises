#!/usr/bin/python
import sys

def translate():

    inputString = input("Please enter a string for translate: ")
    vowels=('a','e','i','o','u')
    cacheWords = []
    outputString = ' '
    listOfwords = inputString.split(' ')

    for i in listOfwords:
        cacheLetters = []
        for j in i:
            if j in vowels: 
                cacheLetters.append(j)
            elif j not in vowels:
                str = j + 'o' + j
                cacheLetters.append(str)
            else:
                pass
        cacheWords.append(''.join(cacheLetters))
    print outputString.join(cacheWords)

if __name__=="__main__":
    translate()

