#!/usr/bin/python

"Check character if it is a vowel or consonant then return result True or False"

vowels = ['a','i','e','u','o']

def main():
    vowel = raw_input ('Enter one character "Ex. --> a": ')
    if len(vowel)> 1:
        print "You need to enter one character."
    elif not vowel:
        print "You need to enter some character."
    elif vowel.lower() in vowels:
        print "The character is vowel."
        return True
    else:
        print "The character is consonant."
        return False   

if __name__=="__main__":
    main()
