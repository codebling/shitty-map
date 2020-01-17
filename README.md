This is a shitty map. It allows you to use Objects as keys in a map. 

Javascript's built-in Map allows you to use Object keys, but values stored with Object keys can only be retrieved using references to the original Object, copies will not work. 

This package/module provides a map with improved handling for keys which are Objects. With ShittyMap, a copy of a key (shallow or deep) is treated the same as if the original key had been used. 

ShittyMap uses Javascript's built-in Map to back its operations. For Object keys, will perform a full iteration over all of the keys in the map, comparing each one for equality using Lodash's isEqual. If the key Objects are large or you have many keys, this may be very slow. That is why this is a shitty map. You have been warned. But hey, it's probably good enough for your shitty project. If so, enjoy. 
