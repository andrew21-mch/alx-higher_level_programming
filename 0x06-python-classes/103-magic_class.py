# Write the Python class MagicClass that does exactly the same as the following Python bytecode
# class MagicClass:
#     def __init__(self):
#         self.__dict__['_MagicClass__magic_dict'] = {}
#     def __getitem__(self, key):
#         return self.__magic_dict[key]
#     def __setitem__(self, key, value):
#         self.__magic_dict[key] = value
#     def __delitem__(self, key):
#         del self.__magic_dict[key]
#     def __contains__(self, key):
#         return key in self.__magic_dict
#     def __len__(self):
#         return len(self.__magic_dict)
#     def __iter__(self):
#         return iter(self.__magic_dict)
#     def __repr__(self):
#         return str(self.__magic_dict)
