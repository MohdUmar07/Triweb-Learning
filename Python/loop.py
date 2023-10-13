# a = "anas";
# i = 1
# end = 10;
# while 10>end :
#     print(i,a);
#     i += 1;

rangeEnd = int(input())
for num in range(rangeEnd):
    num = num + 1;
    if num%2 == 0:
        print(num, "is even");
    else :
        print( num, "is odd");