This is a shitty map. 

It allows you to use Objects as keys in a map. Javascript's built-in Map allows you to use Object keys, but values stored with Object keys can only be retrieved using references to the original Object, copies will not work. 

This package provides a map which uses Javascript's built-in Map to back its operations. For Object keys, will perform a full iteration over all of the keys in the map (in addition to one .has() call and one additional call to the backing Map for whatever operation you're attempting), comparing each one for equality using Lodash's isEqual. If the key Objects are large or you have many keys, this may be very slow. That is why this is a shitty map. You have been warned. But hey, it's probably good enough for your shitty project. If so, enjoy. 
