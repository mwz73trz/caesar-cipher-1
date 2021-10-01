# Rewrite this in Unit Test

from caesar_cipher import caesar_cipher

# print(caesar_cipher("Boy! What a string!", -5) == "Wjt! Rcvo v nomdib!")
# print(caesar_cipher("Hello zach168! Yes here.", 5) == "Mjqqt efhm168! Djx mjwj.")
# print(caesar_cipher("Hello Zach168! Yes here.", -5) == "Czggj Uvxc168! Tzn czmz.")

import unittest

class TestCaeserCipher(unittest.TestCase) :

    def test_caeser_cipher_0(self) :
        self.assertEqual(caesar_cipher("Boy! What a string!", -5), "Wjt! Rcvo v nomdib!")

    def test_caeser_cipher_1(self) :
        self.assertEqual(caesar_cipher("Hello zach168! Yes here.", 5), "Mjqqt efhm168! Djx mjwj.")

    def test_caeser_cipher_2(self) :
        self.assertEqual(caesar_cipher("Hello Zach168! Yes here.", -5), "Czggj Uvxc168! Tzn czmz.")

if __name__ == '__main__':
    unittest.main()
