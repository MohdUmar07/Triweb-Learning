# Calculator program
import os

def addition():
    print("Addition");
    sum = num1 + num2
    print("Sum = ", sum);
    
    
def subtraction():
    print("Subtraction");
    diffrent = num1 - num2
    print("Diffrent = ", diffrent);
    

def multiplication():
    print("Multiplication");
    product = num1 * num2
    print("Product = ", product);
    

def division():
    print("Division");
    quotient = num1 / num2
    print("Quotient = ", quotient); 
    
    



while 1:
    
    os.system('cls');
    
    print("Enter 1 for Addition ")
    print("Enter 2 for Subtraction ")
    print("Enter 3 for Multiplication ")
    print("Enter 4 for Division ")
    print("Enter 0 to exit ")
    
    
    userChoise = int(input("Enter your choise:- "));
            
    if userChoise == 0:
        break;
    
    num1 = int(input("Enter first number:- "));
    num2 = int(input("Enter second number:- "));

    if userChoise == 1:
        addition(num1,num2)
       
    elif userChoise == 2:
        subtraction(num1,num2)
    
    elif userChoise == 3:
        multiplication(num1,num2)
    
    elif userChoise == 4:
        division(num1,num2)


    else:
        print("Plese entre correct number ")
    input("Press enter to continue ")