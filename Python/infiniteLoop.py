# i = 0;
# while 1:
    
#     print(i,"India");
#     i+=1;
import os;
while 1:
    os.system('cls')
    print("Enter 1 to print A ");
    print("Enter 2 to print B ");
    print("Enter 3 to print C ");
    print("Enter 4 to print D ");
    print("Enter 0 to exit ");


    userInput = int(input("Enter your choise:- "));

    if userInput == 1:
        print("A");

    elif userInput == 2:
        print("B");
    
    elif userInput == 3:
        print("C");
    
    elif userInput == 4:
        print("D");
        
    elif userInput == 0:
        break;

    else:
        print("Plese entre correct number ")
    input("Press enter to try again ")