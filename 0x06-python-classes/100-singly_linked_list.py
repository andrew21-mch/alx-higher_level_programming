#!/usr/bin/python3
"""
This module defines a Singly linked list
"""


class Node:
    """Defines a node for a singly linked list"""
    def __init__(self, data, next_node=None):
        self.data = data
        self.next_node = next_node

    @property
    def data(self):
        return self.__data

    @data.setter
    def data(self, value):
        if type(value) != int:
            raise TypeError('data must be an integer')

        self.__data = value

    @property
    def next_node(self):
        return self.__next_node

    @next_node.setter
    def next_node(self, value):
        if value is not None and type(value) != Node:
            raise TypeError('next_node must be a Node object')
        self.__next_node = value


class SinglyLinkedList:
    """Defines the singly linked list"""
    def __init__(self):
        self.__head = None

    def sorted_insert(self, value):
        """Inserts a new node in a sorted list"""
        new_node = Node(value)
        if self.__head is None:
            self.__head = new_node
            return

        node = self.__head
        while node.next_node is not None:
            if node.data > value:
                new_node.next_node = node
                self.__head = new_node
                return
            elif node.next_node.data > value:
                new_node.next_node = node.next_node
                node.next_node = new_node
                return
            node = node.next_node
        node.next_node = new_node
        
    def __repr__(self):
        node = self.__head
        txt = ''
        while 1:
            txt += str(node.data)
            node = node.next_node
            if node.next_node is None:
                break
            else:
                txt += '\n'
        return txt
