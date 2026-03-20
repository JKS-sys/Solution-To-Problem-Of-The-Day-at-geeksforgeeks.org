'''
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
'''

class Solution:
    def findPreSuc(self, root, key):
        pred = None   # predecessor node
        succ = None   # successor node
        curr = root

        while curr:
            if key < curr.data:
                # current node is a candidate for successor
                succ = curr
                curr = curr.left
            elif key > curr.data:
                # current node is a candidate for predecessor
                pred = curr
                curr = curr.right
            else:
                # key found
                # predecessor: rightmost node in left subtree
                if curr.left:
                    temp = curr.left
                    while temp.right:
                        temp = temp.right
                    pred = temp
                # successor: leftmost node in right subtree
                if curr.right:
                    temp = curr.right
                    while temp.left:
                        temp = temp.left
                    succ = temp
                break

        return (pred, succ)