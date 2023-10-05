def fibonacci(n):
    if n == 0:
        return 0
    else:
        counter = 2
        fib1 = 1
        fib2 = 1
        while counter <= n:
            fib1, fib2 = fib2, fib1 + fib2
            counter = counter + 1
        the_number = fib1
    return the_number


#print(fibonacci(7))
