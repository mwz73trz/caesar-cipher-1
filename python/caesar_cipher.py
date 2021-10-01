def caesar_cipher(string, shift_amount):
    shifted_string = ''

    for i in range(len(string)):
        char = string[i]
        print(char)
        if char == ' ' or char == "!" or char == ".":
            shifted_string += char
        elif char == "1" or char == "2" or char == "3" or char == "4" or char == "5" or char == "6" or char == "7" or char == "8" or char == "9":
            shifted_string += char
        elif char.isupper():
            shifted_string += chr((ord(char) + shift_amount - 65) % 26 + 65)
        else:
            shifted_string += chr((ord(char) + shift_amount - 97) % 26 + 97)
    return shifted_string 
