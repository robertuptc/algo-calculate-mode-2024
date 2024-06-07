var cal = require("./calculateMode");

cal.calculateMode([1,2,3,3]) == [3]
cal.calculateMode([4.5, 0, 0]) == [0]
cal.calculateMode([1.5, -1]) == [1.5] 
cal.calculateMode([1.5, -1, 1, 1.5]) == [1.5] 
cal.calculateMode([1,1,2,2]) == [1,2]
cal.calculateMode([1,2,3]) == [1,2,3]
cal.calculateMode(["who", "what", "where", "who"]) == ["who"]
